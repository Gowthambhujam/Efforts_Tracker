from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# class employee(models.Model):
	# # name = models.CharField(max_length=50)
	# eid = models.ForeignKey(User, on_delete = 'cascade', default = '1')
	# # email = models.EmailField(max_length=50,unique=True)
	# project = models.CharField(max_length=50)
	# # password = models.CharField(max_length=30)

class employee(models.Model):
	eid = models.ForeignKey(User, on_delete = 'cascade')
	pname = models.CharField(max_length = 40,default = 'test')

	def __str__(self):
		return self.eid.username

class defectsreported(models.Model):
	date = models.CharField(max_length=32)
	sprint = models.CharField(max_length=20)
	module = models.CharField(max_length=20)
	hours = models.CharField(max_length=20)
	noofdefects = models.CharField(max_length=20)
	severity = models.CharField(max_length=20)
	eid = models.ForeignKey(User, on_delete = 'cascade')



class testcasecreation(models.Model):
	eid = models.ForeignKey(User, on_delete = 'cascade')
	date = models.CharField(max_length=32)
	sprint = models.CharField(max_length=20)
	module = models.CharField(max_length=20)
	hours = models.CharField(max_length=20)
	nooftestcases = models.CharField(max_length=20)

class testcaseexecution(models.Model):
	eid = models.ForeignKey(User, on_delete = 'cascade')
	date = models.CharField(max_length=32)
	sprint = models.CharField(max_length=20)
	module = models.CharField(max_length=20)
	hours = models.CharField(max_length=20)
	nooftestcases = models.CharField(max_length=20)
	testcasetype = models.CharField(max_length=20)


class testcaseupdation(models.Model):
	eid = models.ForeignKey(User, on_delete = 'cascade')
	date = models.CharField(default="cy",max_length=32)
	sprint = models.CharField(max_length=20)
	module = models.CharField(max_length=20)
	hours = models.CharField(max_length=20)
	nooftestcases = models.CharField(max_length=20)
