from django.contrib import admin
from myapp.models import employee,defectsreported,testcasecreation,testcaseexecution,testcaseupdation

# Register your models here.
# from myapp.models import employee
admin.site.register(employee)
admin.site.register(defectsreported)
admin.site.register(testcaseexecution)
admin.site.register(testcasecreation)
admin.site.register(testcaseupdation)