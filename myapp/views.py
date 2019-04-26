from django.shortcuts import render,redirect,HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.hashers import check_password, make_password
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from myapp.models import employee,testcasecreation,testcaseupdation,testcaseexecution,defectsreported
import ast,json
def submit(request):
    return render(request,"myapp/submit.html")

def result(request):
    return render(request,"myapp/result.html")

def efforts_view(request):
    if request.method == 'POST':
        fromdate = request.POST.get("fromdate") # request['username']
        todate = request.POST.get("todate")
        print(fromdate)
        print(todate)
        return render(request,'myapp/effortsbreakdown.html')


def base(request):
    return render(request,'myapp/base.html')

def effortsbreakdown(request):
    return render(request,'myapp/effortsbreakdown.html')

def defectreports(request):
    defe = defectsreported.objects.all()
    return render(request,'myapp/defectreports.html',{'defe':defe})

def testcasecreationandupdation(request):
    tecre = testcasecreation.objects.all()
    teup = testcaseupdation.objects.all()
    return render(request,'myapp/testcasecreationandupdation.html',{'tecre':tecre},{'teup':teup})

def testcaseexcution(request):
    teexec = testcaseexecution.objects.all()
    return render(request,'myapp/testcaseexecution.html',{'teexec':teexec})

# from myapp.models import employee
# Create your views here.
# def index(request):
	# return render(request,'myapp/index.html')

# def employee(request):
#     if request.method=="POST":
#             empname = request.POST.get('user_name')
#             empid = form.cleaned_data['user_name']
#             projname = form.cleaned_data['user_name']
#             emailid = form.cleaned_data['user_name']
#             password = form.cleaned_data['pass_word']
#             a = employee()
#             try:
#                 user.save()
#                 t=form.save()
#                 t.save()
#             except:
#                 return HttpResponse("sorry username or email already exist please try with other one!")
#             t.save()
#             registered = True
#             messages.info(request, 'successfully Registered!')
#             return index(request)

#         else:
#             print("error form invalid")
#     else:
#         form = Tourist()
# 	return render(request,'myapp/register.html')

def index(request):
    
    if request.method == 'POST':
        empid = request.POST.get("ID") # request['username']
        empmail = request.POST.get("email")
        emppass = request.POST.get('pass')
        empname = request.POST.get('username')
        # test = User.objects.get(email = 'vishal@gmail.com')
        # print(test)
        # print(empid,empmail)
        # empid = request.POST.get("ID")
        pname = request.POST.get("proj")

        user = User.objects.create_user(username=empid, email=empmail, first_name = empname, password = emppass)
        print(emppass)
        obj1 = employee.objects.create(eid = user,pname = pname)
      	# ob1 = employee(eid = request.user, pname = proj)
        user.save()
        obj1.save()   
        # ob1.save()
        return render(request, 'myapp/register.html')
    

    return render(request, 'myapp/index.html')

# def employee(request):
#     if request.method=='POST':
#         empid = request.POST.get("ID")
#         pname = request.POST.get("proj")

#         obj = employee.objects.create_user(empid = empid,pname = pname)
#         obj.save()
@login_required
def dashboard(request):
    
    if request.method=='POST' and request.is_ajax():
        # a=User.objects.get(username=request.user)
        eid = request.user
        data_dict = request.POST.get('data')
        json_acceptable_string = data_dict.replace("'","\"")
        data_dict = json.loads(json_acceptable_string)
        def_len = len(data_dict["testexcution"])
        print(def_len)
        #date = request.POST.get("date")
        sprint = data_dict["defectreport"][0]["sprint"]
        module = data_dict["defectreport"][0]["module"]
        hours = data_dict["defectreport"][0]["hours"]
        #nooftestcases = data_dict["defectreport"][0]["noofcases"]
        #testcasetype = data_dict["defectreport"][0]["testtype"]

        obj2 = testcase.objects.create(eid = eid,sprint = sprint,module=module,hours=hours)
        obj2.save()
        status = "Good"

        return render(request, 'myapp/submit.html')

    #     # else:
    #     # return HttpResponse("<h1>Try Submitting Again</h1>")
    
    return render(request,'myapp/dashboard.html')


@login_required
def logout_view(request):
    logout(request)
    return render(request, 'myapp/logout.html')



def login_view(request):
    if request.method == 'POST':
        empmail = request.POST.get("email_login")
        print("empmail:",empmail) # request['username']
        emppswd = request.POST.get("password");
        # test = User.objects.get(email = 'vishal@gmail.com')
        print("pass:",emppswd)

        user = authenticate(username = empmail, password=emppswd)
        print(user)

        if user:
            if user.is_active:
                login(request,user)
                return redirect('dashboard')
            else:
                return HttpResponse("account not active")
        else:
            return HttpResponse("<h1>Invalid Credentials</h1>")

    else:
        return render(request, 'myapp/index.html')


def defectsreported_view(request):
    if request.method=='POST' and request.is_ajax():
        eid = request.user
        data_dict = request.POST.get('data')
        json_acceptable_string = data_dict.replace("'","\"")
        data_dict = json.loads(json_acceptable_string)
        print(type(data_dict))
        date = data_dict["submitdate"]
        ex_len = len(data_dict["testexcution"])
        cre_len = len(data_dict["testcreation"])
        def_len = len(data_dict["defectreport"])
        print(def_len)
        upd_len = len(data_dict["testupdation"])
        if def_len != 0:
            for i in range(def_len):
                def_sprint = data_dict["defectreport"][i]["sprint"]
                def_module = data_dict["defectreport"][i]["module"]
                def_hours = data_dict["defectreport"][i]["hours"]
                def_noofdefects = data_dict["defectreport"][i]["noofdefects"]
                def_severity = data_dict["defectreport"][i]["severity"]
                obj1 = defectsreported.objects.create(eid = eid,date = date,sprint = def_sprint,module=def_module,hours=def_hours , noofdefects = def_noofdefects, severity = def_severity)
                obj1.save()
        if ex_len != 0:
            for i in range(ex_len):
                test_sprint = data_dict["testexcution"][i]["sprint"]
                test_module = data_dict["testexcution"][i]["module"]
                test_hours = data_dict["testexcution"][i]["hours"]
                test_nooftestcases = data_dict["testexcution"][i]["noofcases"]
                test_type = data_dict["testexcution"][i]["testtype"]

                obj2 = testcaseexecution.objects.create(eid = eid,date = date,sprint = test_sprint,module=test_module,hours=test_hours , nooftestcases = test_nooftestcases, testcasetype = test_type)
                obj2.save()
        if cre_len != 0:
            for i in range(cre_len):
                test_sprint = data_dict["testcreation"][i]["sprint"]
                test_module = data_dict["testcreation"][i]["module"]
                test_hours = data_dict["testcreation"][i]["hours"]
                test_nooftestcases = data_dict["testcreation"][i]["noofcases"]

                obj3 = testcasecreation.objects.create(eid = eid,date = date,sprint = test_sprint,module=test_module,hours=test_hours , nooftestcases = test_nooftestcases)
                obj3.save()
        if upd_len !=0:
            for i in range(upd_len):
                test_sprint = data_dict["testupdation"][i]["sprint"]
                test_module = data_dict["testupdation"][i]["module"]
                test_hours = data_dict["testupdation"][i]["hours"]
                test_nooftestcases = data_dict["testupdation"][i]["noofcases"]

                obj4 = testcaseupdation.objects.create(eid = eid,date = date,sprint = test_sprint,module=test_module,hours=test_hours , nooftestcases = test_nooftestcases)
                obj4.save()

    return render(request,'myapp/submit.html')


# def testcaseupdation_view(request):
#     if request.method=='POST' and request.is_ajax():
#         eid = request.user
#         data_dict = request.POST.get('data')
#         json_acceptable_string = data_dict.replace("'","\"")
#         data_dict = json.loads(json_acceptable_string)
#         print(type(data_dict))
#         date = data_dict["submitdate"]
#         test_sprint = data_dict["testupdation"][0]["sprint"]
#         test_module = data_dict["testupdation"][0]["module"]
#         test_hours = data_dict["testupdation"][0]["hours"]
#         test_nooftestcases = data_dict["testupdation"][0]["noofcases"]

#         obj1 = testcaseupdation.objects.create(eid = eid,date = date,sprint = test_sprint,module=test_module,hours=test_hours , nooftestcases = test_nooftestcases)
#         obj1.save()
#         status = "Good"

#         return render(request, 'myapp/submit.html')
    
#     return render(request,'myapp/dashboard.html')


# def testcasecreation_view(request):
#     if request.method=='POST' and request.is_ajax():
#         eid = request.user
#         data_dict = request.POST.get('data')
#         json_acceptable_string = data_dict.replace("'","\"")
#         data_dict = json.loads(json_acceptable_string)
#         print(type(data_dict))
#         date = data_dict["submitdate"]
#         test_sprint = data_dict["testcreation"][0]["sprint"]
#         test_module = data_dict["testcreation"][0]["module"]
#         test_hours = data_dict["testcreation"][0]["hours"]
#         test_nooftestcases = data_dict["testcreation"][0]["noofcases"]

#         obj1 = testcaseupdation.objects.create(eid = eid,date = date,sprint = test_sprint,module=test_module,hours=test_hours , nooftestcases = test_nooftestcases)
#         obj1.save()
#         status = "Good"

#         return render(request, 'myapp/submit.html')
    
#     return render(request,'myapp/dashboard.html')


# def testcaseexecution_view(request):
#     if request.method=='POST' and request.is_ajax():
#         eid = request.user
#         data_dict = request.POST.get('data')
#         json_acceptable_string = data_dict.replace("'","\"")
#         data_dict = json.loads(json_acceptable_string)
#         print(type(data_dict))
#         date = data_dict["submitdate"]
#         test_sprint = data_dict["testexcution"][0]["sprint"]
#         test_module = data_dict["testexcution"][0]["module"]
#         test_hours = data_dict["testexcution"][0]["hours"]
#         test_nooftestcases = data_dict["testexcution"][0]["noofcases"]
#         test_type = data_dict["testexcution"][0]["testtype"]

#         obj1 = testcaseupdation.objects.create(eid = eid,date = date,sprint = test_sprint,module=test_module,hours=test_hours , nooftestcases = test_nooftestcases, testtype = test_type)
#         obj1.save()
#         status = "Good"

#         return render(request, 'myapp/submit.html')
    
#     return render(request,'myapp/dashboard.html')