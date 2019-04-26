
   e1=true;e2=true;e3=true;e4=true;e5=true;e6=true;e7=true;e8=true;e9=true;e10=true;e11=true;e12=true;e13=true;e14=true;e15=true;e16=true;e17=true;e18=true;e19=true;e20=true;e21=true;e22=true;e23=true;e24=true;e25=true;e26=true;e27=true;e28=true,e29=true; 
             function postToDb(TableData) {
               data=TableData;
               alert(data)
                 $.ajax({
                   url: "defectsreported",
                   data:{data:data},

                   type: "POST",
                   dataType: "json",
                   success: function(data) {
                     if(data.status == 'success'){
                     $('#myModal').modal('show');

                   }
                   else if(data.status == 'error'){
                       alert("Internal Server ERROR!");
                   }
                   }
                 });
            }


 function getd() {
   d= new Date();
   return ((d.getDate())<10 ? "0"+(d.getDate()): (d.getDate()));
 }

 function getm() {
   d= new Date();
   return ((d.getMonth()+1)<10 ? "0"+(d.getMonth()+1): (d.getMonth()+1));
 }


     $(document).ready(function(){
      var errors=0;
      var nofrows=0;
      document.body.style.zoom="90%";

      $('#reload').click(function(){

        location.reload();
      });

      

        $('.crudable').crudable();

        var d = new Date();
        var toDayLimit=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        var toDay= getd()+'-'+getm()+'-'+d.getFullYear();
        
        $('#datefield').val(toDay);
        
        $('[data-toggle="tooltip"]').tooltip();
        //alert(toDay);
        $('#date').datepicker({
    format: "dd-mm-yyyy",
    endDate: "+0d",
    todayBtn: "linked",
    daysOfWeekDisabled:"" ,
    daysOfWeekHighlighted:"",
    autoclose: true,
    todayHighlight: true
});
       

                //     $.ajax({
                //     url: "getProjects.php",
                //     data:{'id':$('#empid').val()},
                //     dataType: "JSON",
                //     success: function(json){
                //         //here inside json variable you've the json returned by your PHP
                //         if(json.status=='success'){
                //             var toAppend='';
                //             $.each(json.data,function(idx, obj) {
                //               toAppend += '<option value='+obj.pid+'>'+obj.projectname+'</option>';
                //             });
                //             //alert(toAppend);
                //             $('#project').append(toAppend);
                //         }
                //         if(json.status=='error'){
                //           $("#addtask").attr("disabled", "disabled");
                //            $('#myModal-1').modal('show');
                            
                //         }
                //     }
                // })

                //get tasks form database
                //         $.ajax({
                //     url: "getTasks.php",
                //     dataType: "JSON",
                //     success: function(json){
                //         //here inside json variable you've the json returned by your PHP
                //         if(json.status='success'){
                //             var toAppend='';
                //             $.each(json.data,function(idx, obj) {
                //               toAppend += '<option value='+obj.taskid+'>'+obj.tasktype+'</option>';
                //             });
                //             //alert(toAppend);
                //             $('#task').append(toAppend);
                //         }
                //     }
                // });
              

// add tasktypes tables to ui based on selection
                                  
                                // $('#addtask').on( "click",function(){
                                //     alert("hello")
                                // }



                                  $(document).ready(function(){
                                    $("#addtask").on("click", function(){
                                    console.log("hi");
                                        $("#project").attr("disabled", "disabled");
                                        var task=$('#task').val();
                                  if(task==1){
                                    $('.tccreation').detach().appendTo('.sections').show();  
                                  }
                                  if(task==2){
                                   $('.tcupdation').detach().appendTo('.sections').show(); 
                                  }
                                  if(task==3){
                                   $('.tcexecution').detach().appendTo('.sections').show(); 
                                  }
                                  if(task==4){
                                   $('.defectreport').detach().appendTo('.sections').show(); 
                                  }
                                  if(task==5){
                                   
                                   $('.defectretest').detach().appendTo('.sections').show(); 
                                  }

                                  if(task==6){
                                     $('.kttraining').detach().appendTo('.sections').show(); 
                                   
                                  }
                                  if(task==7){
                                     $('.requirements').detach().appendTo('.sections').show(); 
                                   
                                  }
                                  if(task==8){
                                     $('.testenvironment').detach().appendTo('.sections').show(); 
                                  }

                                  if(task==9){
                                     $('.projectmanagement').detach().appendTo('.sections').show(); 
                                  }
                                  if(task==10){
                                    $('.automationframework').detach().appendTo('.sections').show();  
                                  }
                                  if(task==11){
                                   $('.automationrandd').detach().appendTo('.sections').show(); 
                                  }
                                  if(task==12){
                                   $('.automationtestdev').detach().appendTo('.sections').show(); 
                                  }
                                  if(task==13){
                                   $('.automationtestexec').detach().appendTo('.sections').show(); 
                                  }
                                  if(task==14){
                                   
                                   $('.automationtestmani').detach().appendTo('.sections').show(); 
                                  }

                                  if(task==15){
                                     $('.automationfes').detach().appendTo('.sections').show(); 
                                   
                                  }
                                  if(task==16){
                                     $('.automationpeer').detach().appendTo('.sections').show(); 
                                   
                                  }
                                  if(task==17){
                                    $('.performancetcscript').detach().appendTo('.sections').show();  
                                  }
                                  if(task==18){
                                   $('.performancetcexec').detach().appendTo('.sections').show(); 
                                  }
                                  if(task==19){
                                   $('.performancetestreport').detach().appendTo('.sections').show(); 
                                  }
                                  if(task==20){
                                   $('.performancetestload').detach().appendTo('.sections').show(); 
                                  }
                                  if(task==21){
                                   
                                   $('.performancetestclient').detach().appendTo('.sections').show(); 
                                  }

                                  if(task==22){
                                     $('.securityuserac').detach().appendTo('.sections').show(); 
                                   
                                  }
                                  if(task==23){
                                     $('.securitystratagy').detach().appendTo('.sections').show(); 
                                   
                                  }

                                  if(task==24){
                                     $('.securityvulnerable').detach().appendTo('.sections').show(); 
                                  }

                                  if(task==25){
                                     $('.securitypen').detach().appendTo('.sections').show(); 
                                  }
                                  if(task==26){
                                    $('.securityany').detach().appendTo('.sections').show();  
                                  }
                                  if(task==27){
                                    $('.performancerandd').detach().appendTo('.sections').show();  
                                  } 
                                  if(task==28){
                                    $('.leave').detach().appendTo('.sections').show();  
                                  }
                                   if(task==29){
                                    $('.misc').detach().appendTo('.sections').show();  
                                  }                                    
                            }); 

                           });
                                  

$(document).on('click','#rmtask',function(){
          $(this).parent().parent().parent().parent().detach().appendTo('.sections').hide();
         $(this).parent().parent().parent().parent().find(':input').each(function(){
            jQuery(this).val('');
         });
     });

$('.sections').on('input','#hours',function () {
     hrs=0;

    $('.sections #hours').each(function(){
       var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
        str=$(this).val()
        $(this).css('border-color', '');
        if(reg.test(str)){
          $(this).css('border-color', '');
          if(!isNaN(parseFloat(str))){
          hrs=hrs+parseFloat(str);
          //alert(hrs);
          }  
        }else{
          $(this).css('border-color', 'red');

        }
        
    });

    
    $('#total').text(hrs.toFixed(2));

});


//modify total hours when click on delete button
$(document).on('click', '.btn-danger', function(){ 
     // Your Code
                var hrs=0,min=0;  
        var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
     
                //alert('hi');  
         $('.sections #hours').each(function(row, tr){

          str=$(this).val()
        $(this).css('border-color', '');
        if(reg.test(str)){
          $(this).css('border-color', '');
          if(!isNaN(parseFloat(str))){
          hrs=hrs+parseFloat(str);
          //alert(hrs);
          }  
        }else{
          $(this).css('border-color', 'red');

        }
         });
                $('#total').text(hrs.toFixed(2));
      });


$(document).on('click', '#rmtask', function(){ 
     // Your Code
                var hrs=0,min=0;  
        var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
     
                //alert('hhi');  
         $('.sections #hours').each(function(row, tr){

           str=$(this).val()
        $(this).css('border-color', '');
        if(reg.test(str)){
          $(this).css('border-color', '');
          if(!isNaN(parseFloat(str))){
          hrs=hrs+parseFloat(str);
          //alert(hrs);
          }  
        }else{
          $(this).css('border-color', 'red');

        }
         });
                      
                $('#total').text(hrs.toFixed(2));

      });


// get each tasks data

  function getTestcreationdata(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;                         
    if($('.tccreation').css('display') == 'block'){
            var rows=0; var srows=0;
            var no=$('.tccreation #bill-1').is(':checked')?1:0;
            //alert(no);
            $('#tccreation tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(2) input').val())){
                    obj={"task":1,
                    "hours":$(this).find('td:eq(2) input').val(),
                    "description":$(this).find('td:eq(3) input').val(),
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "noofcases": $(this).find('td:eq(4) input').val(),
                    "priority": $(this).find('td:eq(5) select').val(),
                    "ids": $(this).find('td:eq(6) input').val(),
                    "misc": $(this).find('td:eq(7) input').val(),
                    "billable":no}
                   // alert(JSON.stringify(obj));            
                    TableData.push(obj);
                    srows=srows+1;

              }
              if(srows!=rows){
                e1=false;
              }else{e1=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e1=true;
          }
          //alert(errors);
          return TableData;
  }

  function getTestupdationdata(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
           var rows=0; var srows=0; 
           
 if($('.tcupdation').css('display') == 'block'){
                var no=$('.tcupdation #bill-2').is(':checked')?1:0;
            $('#tcupdation tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(2) input').val())){
                    obj={"task":2,
                    "hours":$(this).find('td:eq(2) input').val(),
                    "description":$(this).find('td:eq(3) input').val(),
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "noofcases": $(this).find('td:eq(4) input').val(),
                    "priority": $(this).find('td:eq(5) select').val(),
                    "ids": $(this).find('td:eq(6) input').val(),
                    "misc": $(this).find('td:eq(7) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
                    srows=srows+1; 
              } 
              if(srows!=rows){
                e2=false;
              }else{e2=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e2=true;
          }
          return TableData;
  }

function getTestexecutiondata(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
              var rows=0; var srows=0; 
           
                            
    if($('.tcexecution').css('display') == 'block'){
          var no=$('.tcexecution #bill-3').is(':checked')?1:0;
            $('#tcexecution tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(3) input').val())){
                    obj={"task":3,
                    "hours":$(this).find('td:eq(3) input').val(),
                    "description":$(this).find('td:eq(4) input').val(),
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "testtype": $(this).find('td:eq(2) select').val(),
                    "noofcases": $(this).find('td:eq(5) input').val(),
                    "priority": $(this).find('td:eq(6) select').val(),
                    "ids": $(this).find('td:eq(7) input').val(),
                    "pass": $(this).find('td:eq(8) input').val(),
                    "fail": $(this).find('td:eq(9) input').val(),
                    "misc": $(this).find('td:eq(10) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
               srows=srows+1;  
              } 
              if(srows!=rows){
                e3=false;
              }else{e3=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e3=true;
          }
          return TableData;
  }

function getDefectreportdata(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
                                
    if($('.defectreport').css('display') == 'block'){
        var rows=0; var srows=0; 
          
            var no=$('.defectreport #bill-4').is(':checked')?1:0;
            $('#defectreport tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(2) input').val())){
                    obj={"task":4,
                    "hours":$(this).find('td:eq(2) input').val(),
                    "description":$(this).find('td:eq(3) input').val(),
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "severity": $(this).find('td:eq(5) select').val(),
                    "noofdefects": $(this).find('td:eq(4) input').val(),
                    "ids": $(this).find('td:eq(6) input').val(),
                    "misc": $(this).find('td:eq(7) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
               srows=srows+1; 
              } 
              if(srows!=rows){
                e4=false;
              }else{e4=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e4=true;
          }
          return TableData;
  }

  function getDefectretestingdata(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
               var rows=0; var srows=0; 
          
                            
    if($('.defectretest').css('display') == 'block'){
            var no=$('.defectretest #bill-5').is(':checked')?1:0;
            $('#defectretest tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(2) input').val())){
                    obj={"task":5,
                    "hours":$(this).find('td:eq(2) input').val(),
                    "description":$(this).find('td:eq(3) input').val(),
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "noofpass": $(this).find('td:eq(5) input').val(),
                    "nooffail": $(this).find('td:eq(6) input').val(),
                    "noofdefects": $(this).find('td:eq(4) input').val(),
                    "ids": $(this).find('td:eq(7) input').val(),
                    "misc": $(this).find('td:eq(8) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
               srows=srows+1; 
              }
               if(srows!=rows){
                e5=false;
              }else{e5=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e5=true;
          }
          return TableData;
  }

function getKtdata(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
            var rows=0; var srows=0; 
          
                               
    if($('.kttraining').css('display') == 'block'){
        var no=$('.kttraining #bill-6').is(':checked')?1:0;
        //alert(no);
            $('#kttraining tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(2) input').val())){
                    obj={"task":6,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "hours":$(this).find('td:eq(2) input').val(),
                    "description":$(this).find('td:eq(3) input').val(),
                    "misc": $(this).find('td:eq(4) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
               srows=srows+1; 
              } 
              if(srows!=rows){
                e6=false;
              }else{e6=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e6=true;
          }
          return TableData;
  }

function getRequirementsdata(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
        var rows=0; var srows=0; 
           
                                   
    if($('.requirements').css('display') == 'block'){
          var no=$('.requirements #bill-7').is(':checked')?1:0;
            $('#requirements tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(2) input').val())){
                    obj={"task":7,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "hours":$(this).find('td:eq(2) input').val(),
                    "description":$(this).find('td:eq(3) input').val(),
                    "misc": $(this).find('td:eq(4) input').val(),
                   "billable":no}
                                
                    TableData.push(obj);
                srows=srows+1; 
              }
               if(srows!=rows){
                e7=false;
              }else{e7=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e7=true;
          }
          return TableData;
  }


function getTestenvironmentdata(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
             var rows=0; var srows=0; 
           
                             
    if($('.testenvironment').css('display') == 'block'){
        var no=$('.testenvironment #bill-8').is(':checked')?1:0;
            $('#testenvironment tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(2) input').val())){
                    obj={"task":8,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "hours":$(this).find('td:eq(2) input').val(),
                    "description":$(this).find('td:eq(3) input').val(),
                    "misc": $(this).find('td:eq(4) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
              srows=srows+1;  
              }
               if(srows!=rows){
                e8=false;
              }else{e8=true;} 
            });
            //alert(JSON.stringify(TableData));
          }else{
            e8=true;
          }
          return TableData;
  }

function getProjectmanagementdata(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
       var rows=0; var srows=0; 
           
                                   
    if($('.projectmanagement').css('display') == 'block'){
           var no=$('.projectmanagement #bill-9').is(':checked')?1:0;
            $('#projectmanagement tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(3) input').val())){
                    obj={"task":9,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "subtask":$(this).find('td:eq(2) select').val(),
                    "hours":$(this).find('td:eq(3) input').val(),
                    "description": $(this).find('td:eq(4) input').val(),
                    "misc": $(this).find('td:eq(5) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
                srows=srows+1;  
              }
               if(srows!=rows){
                e9=false;
              }else{e9=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e9=true;
          }
          return TableData;
  }

function getAutomationframework(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
        var rows=0; var srows=0; 
          
                                 
    if($('.automationframework').css('display') == 'block'){
           var no=$('.automationframework #bill-10').is(':checked')?1:0;
            $('#automationframework tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(3) input').val())){
                    obj={"task":10,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "product":$(this).find('td:eq(2) input').val(),
                    "hours":$(this).find('td:eq(3) input').val(),
                    "description": $(this).find('td:eq(4) input').val(),
                    "tool":$(this).find('td:eq(5) input').val(),
                    "framework":$(this).find('td:eq(6) input').val(),
                    "features":$(this).find('td:eq(7) input').val(),
                    "commits":$(this).find('td:eq(8) input').val(),
                    "misc": $(this).find('td:eq(9) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
                    srows=srows+1;   
                
              }
               if(srows!=rows){
                e10=false;
              }else{e10=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e10=true;
          }
          return TableData;
  }


function getAutomationrandd(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
          var rows=0; var srows=0; 
          
                                 
    if($('.automationrandd').css('display') == 'block'){
           var no=$('.automationrandd #bill-11').is(':checked')?1:0;
            $('#automationrandd tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(3) input').val())){
                    obj={"task":11,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "product":$(this).find('td:eq(2) input').val(),
                    "hours":$(this).find('td:eq(3) input').val(),
                    "description": $(this).find('td:eq(4) input').val(),
                    "areaofresearch":$(this).find('td:eq(5) input').val(),
                    "topicsexplored":$(this).find('td:eq(6) input').val(),
                    "misc": $(this).find('td:eq(7) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
              srows=srows+1; 
              }
               if(srows!=rows){
                e11=false;
              }else{e11=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e11=true;
          }
          return TableData;
  }


function getAutomationtestdev(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
            var rows=0; var srows=0; 
           
                                
    if($('.automationtestdev').css('display') == 'block'){
          var no=$('.automationtestdev #bill-12').is(':checked')?1:0;
            $('#automationtestdev tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(3) input').val())){
                    obj={"task":12,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "product":$(this).find('td:eq(2) input').val(),
                    "hours":$(this).find('td:eq(3) input').val(),
                    "description": $(this).find('td:eq(4) input').val(),
                    "noofscripts":$(this).find('td:eq(5) input').val(),
                    "scriptids":$(this).find('td:eq(6) input').val(),
                    "misc": $(this).find('td:eq(7) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
              srows=srows+1;
              }
               if(srows!=rows){
                e12=false;
              }else{e12=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e12=true;
          }
          return TableData;
  }

function getAutomationtestexec(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
              var rows=0; var srows=0; 
           
                              
    if($('.automationtestexec').css('display') == 'block'){
          var no=$('.automationtestexec #bill-13').is(':checked')?1:0;
            $('#automationtestexec tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(3) input').val())){
                    obj={"task":13,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "product":$(this).find('td:eq(2) input').val(),
                    "hours":$(this).find('td:eq(3) input').val(),
                    "description": $(this).find('td:eq(4) input').val(),
                    "noofcases":$(this).find('td:eq(5) input').val(),
                    "runduration":$(this).find('td:eq(6) input').val(),
                    "platform":$(this).find('td:eq(7) input').val(),
                    "environment":$(this).find('td:eq(8) input').val(),
                    "passed":$(this).find('td:eq(9) input').val(),
                    "failed":$(this).find('td:eq(10) input').val(),
                    "skipped":$(this).find('td:eq(11) input').val(),
                    "misc": $(this).find('td:eq(12) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
            srows=srows+1;
              } if(srows!=rows){
                e13=false;
              }else{e13=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e13=true;
          }
          return TableData;
  }


function getAutomationtestmaintain(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
              var rows=0; var srows=0; 
           
                             
    if($('.automationtestmani').css('display') == 'block'){
          var no=$('.automationtestmani #bill-14').is(':checked')?1:0;
            $('#automationtestmani tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(3) input').val())){
                    obj={"task":14,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "product":$(this).find('td:eq(2) input').val(),
                    "hours":$(this).find('td:eq(3) input').val(),
                    "description": $(this).find('td:eq(4) input').val(),
                    "noofscripts":$(this).find('td:eq(5) input').val(),
                    "misc": $(this).find('td:eq(6) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
              srows=srows+1; 
              }
               if(srows!=rows){
                e14=false;
              }else{e14=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e14=true;
          }
          return TableData;
  }

function getAutomationtestfes(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
               var rows=0; var srows=0; 
           
                             
    if($('.automationfes').css('display') == 'block'){
           var no=$('.automationfes #bill-15').is(':checked')?1:0;
            $('#automationfes tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(3) input').val())){
                    obj={"task":15,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "product":$(this).find('td:eq(2) input').val(),
                    "hours":$(this).find('td:eq(3) input').val(),
                    "description": $(this).find('td:eq(4) input').val(),
                    "tool":$(this).find('td:eq(5) input').val(),
                    "framework":$(this).find('td:eq(6) input').val(),
                    "environment":$(this).find('td:eq(7) input').val(),
                    "misc": $(this).find('td:eq(8) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
              srows=srows+1;
              }
               if(srows!=rows){
                e15=false;
              }else{e15=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e15=true;
          }
          return TableData;
  }


function getAutomationpeer(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
        var rows=0; var srows=0; 
           
                                    
    if($('.automationpeer').css('display') == 'block'){
          var no=$('.automationpeer #bill-16').is(':checked')?1:0;
            $('#automationpeer tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(3) input').val())){
                    obj={"task":16,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "product":$(this).find('td:eq(2) input').val(),
                    "hours":$(this).find('td:eq(3) input').val(),
                    "description": $(this).find('td:eq(4) input').val(),
                    "noofscripts":$(this).find('td:eq(5) input').val(),
                    "noofsuggetions":$(this).find('td:eq(6) input').val(),
                    "misc": $(this).find('td:eq(7) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
              srows=srows+1;
              }
               if(srows!=rows){
                e16=false;
              }else{e16=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e16=true;
          }
          return TableData;
  }

/*  performance tasktypes*/

  function getPerformancescript(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
            var rows=0; var srows=0; 
          
                               
    if($('.performancetcscript').css('display') == 'block'){
          var no=$('.performancetcscript #bill-17').is(':checked')?1:0;
            $('#performancetcscript tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(0) input').val())){
                    obj={"task":17,
                    "hours":$(this).find('td:eq(0) input').val(),
                    "noofscripts":$(this).find('td:eq(1) input').val(),
                    "comments":$(this).find('td:eq(2) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
              srows=srows+1; 
              }
               if(srows!=rows){
                e17=false;
              }else{e17=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e17=true;
          }
          return TableData;
  }


function getPerformancetcexec(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
            var rows=0; var srows=0; 
          
                             
    if($('.performancetcexec').css('display') == 'block'){
           var no=$('.performancetcexec #bill-18').is(':checked')?1:0;
            $('#performancetcexec tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(0) input').val())){
                    obj={"task":18,
                    "hours":$(this).find('td:eq(0) input').val(),
                    "nooftests":$(this).find('td:eq(1) input').val(),
                    "executiontype":$(this).find('td:eq(2) input').val(),
                    "testdetails":$(this).find('td:eq(3) input').val(),
                    "runduration":$(this).find('td:eq(4) input').val(),
                    "comments":$(this).find('td:eq(5) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
             srows=srows+1;   
              }
               if(srows!=rows){
                e18=false;
              }else{e18=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e18=true;
          }
          return TableData;
  }

function getPerformancetestreport(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
          var rows=0; var srows=0; 
          
                                 
    if($('.performancetestreport').css('display') == 'block'){
          var no=$('.performancetestreport #bill-19').is(':checked')?1:0;
            $('#performancetestreport tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(0) input').val())){
                    obj={"task":19,
                    "hours":$(this).find('td:eq(0) input').val(),
                    "comments":$(this).find('td:eq(1) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
               srows=srows+1; 
              } if(srows!=rows){
                e19=false;
              }else{e19=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e19=true;
          }
          return TableData;
  }


function getPerformancetestload(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
         var rows=0; var srows=0; 
          
                                   
    if($('.performancetestload').css('display') == 'block'){
          var no=$('.performancetestload #bill-20').is(':checked')?1:0;
            $('#performancetestload tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(0) input').val())){
                    obj={"task":20,
                    "hours":$(this).find('td:eq(0) input').val(),
                    "comments":$(this).find('td:eq(1) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
              srows=srows+1;
              }
               if(srows!=rows){
                e20=false;
              }else{e20=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e20=true;
          }
          return TableData;
  }


function getPerformancetestclient(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
          var rows=0; var srows=0; 
           
                                
    if($('.performancetestclient').css('display') == 'block'){
          var no=$('.performancetestclient #bill-21').is(':checked')?1:0;
            $('#performancetestclient tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(0) input').val())){
                    obj={"task":21,
                    "hours":$(this).find('td:eq(0) input').val(),
                    "comments":$(this).find('td:eq(1) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
            srows=srows+1;  
              }
               if(srows!=rows){
                e21=false;
              }else{e21=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e21=true;
          }
          return TableData;
  }


function getPerformancerandd(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
          var rows=0; var srows=0; 
          
                                 
    if($('.performancerandd').css('display') == 'block'){
          var no=$('.performancerandd #bill-22').is(':checked')?1:0;
            $('#performancerandd tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(2) input').val())){
                    obj={"task":27,
                    "sprint":$(this).find('td:eq(0) input').val(),
                    "module":$(this).find('td:eq(1) input').val(),
                    "hours":$(this).find('td:eq(2) input').val(),
                    "description": $(this).find('td:eq(3) input').val(),
                    "areaofresearch":$(this).find('td:eq(4) input').val(),
                    "topicsexplored":$(this).find('td:eq(5) input').val(),
                    "misc": $(this).find('td:eq(6) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
              srows=srows+1; 
              }
               if(srows!=rows){
                e27=false;
              }else{e27=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e27=true;
          }
          return TableData;
  }



/* security types*/

function getSecurityuserac(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
        var rows=0; var srows=0; 
          
                                 
    if($('.securityuserac').css('display') == 'block'){
        var no=$('.securityuserac #bill-23').is(':checked')?1:0;
            $('#securityuserac tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(0) input').val())){
                    obj={"task":22,
                    "hours":$(this).find('td:eq(0) input').val(),
                    "comments":$(this).find('td:eq(1) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
               srows=srows+1;  
              }
               if(srows!=rows){
                e22=false;
              }else{e22=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e22=true;
          }
          return TableData;
  }

function getSecuritystratagy(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
           var rows=0; var srows=0; 
           
                                
    if($('.securitystratagy').css('display') == 'block'){
          var no=$('.securitystratagy #bill-24').is(':checked')?1:0;
            $('#securitystratagy tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(0) input').val())){
                    obj={"task":23,
                    "hours":$(this).find('td:eq(0) input').val(),
                    "comments":$(this).find('td:eq(1) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
              srows=srows+1; 
              }
               if(srows!=rows){
                e23=false;
              }else{e23=true;}
            });
          //  alert(JSON.stringify(TableData));
          }else{
            e23=true;
          }
          return TableData;
  }

function getSecurityvulnerable(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
             var rows=0; var srows=0; 
          
                               
    if($('.securityvulnerable').css('display') == 'block'){
          var no=$('.securityvulnerable #bill-25').is(':checked')?1:0;
            $('#securityvulnerable tr').each(function(row, tr){
                 rows=rows+1;
              if(reg.test($(this).find('td:eq(0) input').val())){
                    obj={"task":24,
                    "hours":$(this).find('td:eq(0) input').val(),
                    "noofvulnerabilities":$(this).find('td:eq(1) input').val(),
                    "vulnerabilityname": $(this).find('td:eq(2) input').val(),
                    "comments":$(this).find('td:eq(3) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
             srows=srows+1;
              }
               if(srows!=rows){
                e24=false;
              }else{e24=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e24=true;
          }
          return TableData;
  }

function getSecuritypen(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
       var rows=0; var srows=0; 
           
                               

    if($('.securitypen').css('display') == 'block'){
          var no=$('.securitypen #bill-26').is(':checked')?1:0;
            $('#securitypen tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(0) input').val())){
                    obj={"task":25,
                    "hours":$(this).find('td:eq(0) input').val(),
                     "noofvulnerabilities":$(this).find('td:eq(1) input').val(),
                    "vulnerabilityname": $(this).find('td:eq(2) input').val(),
                    "comments":$(this).find('td:eq(3) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
             srows=srows+1;      
              }
               if(srows!=rows){
                e25=false;
              }else{e25=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e25=true;
          }
          return TableData;
  }

  function getSecurityany(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
       var rows=0; var srows=0; 
           
                                  
    if($('.securityany').css('display') == 'block'){
          var no=$('.securityany #bill-27').is(':checked')?1:0;
            $('#securityany tr').each(function(row, tr){
                rows=rows+1;
              if(reg.test($(this).find('td:eq(0) input').val())){
                    obj={"task":26,
                    "hours":$(this).find('td:eq(0) input').val(),
                    "reporttype":$(this).find('td:eq(1) input').val(),
                    "status": $(this).find('td:eq(2) input').val(),
                    "comments":$(this).find('td:eq(3) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
             srows=srows+1;   
              } 
              if(srows!=rows){
                e26=false;
              }else{e26=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e26=true;
          }
          return TableData;
  }

function getleavedetails(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
       var rows=0; var srows=0; 
          
                                    
    if($('.leave').css('display') == 'block'){
          var no=$('.leave #bill-28').is(':checked')?1:0;
            $('#leave tr').each(function(row, tr){
                rows=rows+1; //alert($(this).find('td:eq(0) select').val());
              if(reg.test($(this).find('td:eq(0) select').val())){
                    obj={"task":28,
                    "hours":$(this).find('td:eq(0) select').val(),
                    "comments":$(this).find('td:eq(1) input').val(),
                    "billable":no}
                                
                    TableData.push(obj);
             srows=srows+1; 
              }
               if(srows!=rows){
                e28=false;
              }else{e28=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e28=true;
          }
          return TableData;
  }

  function getmisc(){
      var TableData = new Array();
      var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
       var rows=0; var srows=0; 
          
                                    
    if($('.misc').css('display') == 'block'){
          var no=$('.misc #bill-29').is(':checked')?1:0;
            $('#misc tr').each(function(row, tr){
                rows=rows+1; //alert($(this).find('td:eq(0) select').val());
              if(reg.test($(this).find('td:eq(1) input').val())){
                    obj={"task":29,
                    "hours":$(this).find('td:eq(1) input').val(),
                  "description":$(this).find('td:eq(0) input').val(),
                  "billable":no}
                                
                    TableData.push(obj);
             srows=srows+1; 
              }
               if(srows!=rows){
                e29=false;
              }else{e29=true;}
            });
            //alert(JSON.stringify(TableData));
          }else{
            e29=true;
          }
          return TableData;
  }

// Data submit to db
                $('#form').submit(function(e) {
                       // alert('Hai');


                        var reg=/^[0-9]+(\.(\d{1,2})+)*$/;
                        var empid=$('#empid').val();
                         var submitdate = $('#datefield').val();
                        var pid = $('#project').val();
                        //alert(pid);
                        var totaldata= new Array();
                        var testcreation= getTestcreationdata();
                        var testupdation= getTestupdationdata();
                        var testexcution=getTestexecutiondata();
                        var defectreport=getDefectreportdata();
                        var defectretest=getDefectretestingdata();
                        var ktdata=getKtdata();
                        var requirements=getRequirementsdata();
                        var testenvironment=getTestenvironmentdata();
                        var projectmanagement=getProjectmanagementdata();
                        var autoframework=getAutomationframework();
                        var autorandd=getAutomationrandd();
                        var autotestdev=getAutomationtestdev();
                        var autotestexec=getAutomationtestexec();
                        var automaintain=getAutomationtestmaintain();
                        var autotestfes=getAutomationtestfes();
                        var autopeer=getAutomationpeer();
                        var performancescript=getPerformancescript();
                        var performancetcexec=getPerformancetcexec();
                        var performancetestreport=getPerformancetestreport();
                        var performancetestload=getPerformancetestload();
                        var performancetestclient=getPerformancetestclient();
                        var securityuserac= getSecurityuserac();
                        var securitystratagy= getSecuritystratagy();
                        var securityvulnerable= getSecurityvulnerable();
                        var securitypen= getSecuritypen();
                        var securityany= getSecurityany();
                        var performancerandd=getPerformancerandd();
                        var leave=getleavedetails();
                        var misc=getmisc();

                    data={"empid":empid,"submitdate":submitdate,"project":pid,"testcreation":testcreation,"testupdation":testupdation,"testexcution":testexcution,"defectreport":defectreport
                            ,"defectretest":defectretest,"ktdata":ktdata,"requirements":requirements,"testenvironment":testenvironment,
                          "projectmanagement":projectmanagement,"autoframework":autoframework,"autorandd":autorandd,"autotestdev":autotestdev
                          ,"autotestexec":autotestexec,"automaintain":automaintain,"autotestfes":autotestfes,"autopeer":autopeer,"performancetcexec": performancetcexec,"performancescript":performancescript,"performancetestreport":performancetestreport,"performancetestload":performancetestload,"performancetestclient": performancetestclient,"performancerandd":performancerandd,"securityuserac":securityuserac,"securitystratagy":securitystratagy,"securityvulnerable":securityvulnerable,"securitypen":securitypen,"securityany":securityany,"leave":leave,"misc":misc};
                      totaldata.push(data);
                      //alert(JSON.stringify(data));
                    
                   // alert(errors);
                  //alert("e1="+e1+"e2="+e2+"e3="+e3+"e4="+e4+"e5="+e5+"e6="+e6+"e7="+e7+"e8="+e8+"e9="+e9+"e10="+e10+"e11="+e11+"e12="+e12+"e13="+e13+"e14="+e14+"e15="+e15+"e16="+e16+"e17="+e17+"e18="+e18+"e19="+e19+"e20="+e20+"e21="+e21+"e22="+e22+"e23="+e23+"e24="+e24+"e25="+e25+"e26="+e26+"e27="+e27);
                   if(e1&&e2&&e3&&e4&&e5&&e6&&e7&&e8&&e9&&e10&&e11&&e12&&e13&&e14&&e15&&e16&&e17&&e18&&e19&&e20&&e21&&e22&&e23&&e24&&e25&&e26&&e27&&e28&&e29){

                    TableData = JSON.stringify(data);
                  //alert(TableData)
              postToDb(TableData);

                   }
                  else{
                    $('#myModalerror').modal('show');

                  }           


                    return false;
                });

                

                  

            });


$(function() {


    // This function gets cookie with a given name
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    /*
    The functions below will create a header with csrftoken
    */

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    function sameOrigin(url) {
        // test that a given url is a same-origin URL
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});     
// Send data to Database
