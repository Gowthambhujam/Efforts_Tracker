# Generated by Django 2.0.1 on 2019-04-24 15:03

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('myapp', '0003_auto_20190422_2039'),
    ]

    operations = [
        migrations.CreateModel(
            name='testcasecreation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(max_length=32)),
                ('sprint', models.CharField(max_length=20)),
                ('module', models.CharField(max_length=20)),
                ('hours', models.CharField(max_length=20)),
                ('nooftestcases', models.CharField(max_length=20)),
                ('eid', models.ForeignKey(on_delete='cascade', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='testcaseexecution',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(max_length=32)),
                ('sprint', models.CharField(max_length=20)),
                ('module', models.CharField(max_length=20)),
                ('hours', models.CharField(max_length=20)),
                ('nooftestcases', models.CharField(max_length=20)),
                ('testcasetype', models.CharField(max_length=20)),
                ('eid', models.ForeignKey(on_delete='cascade', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='testcaseupdation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(default='cy', max_length=32)),
                ('sprint', models.CharField(max_length=20)),
                ('module', models.CharField(max_length=20)),
                ('hours', models.CharField(max_length=20)),
                ('nooftestcases', models.CharField(max_length=20)),
                ('eid', models.ForeignKey(on_delete='cascade', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='testcase',
            name='eid',
        ),
        migrations.AlterField(
            model_name='defectsreported',
            name='date',
            field=models.CharField(max_length=32),
        ),
        migrations.DeleteModel(
            name='testcase',
        ),
    ]
