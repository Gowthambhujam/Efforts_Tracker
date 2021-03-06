# Generated by Django 2.0.1 on 2019-04-21 06:13

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='defectsreported',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('sprint', models.CharField(max_length=20)),
                ('module', models.CharField(max_length=20)),
                ('hours', models.CharField(max_length=20)),
                ('noofdefects', models.CharField(max_length=20)),
                ('severity', models.CharField(max_length=20)),
                ('eid', models.ForeignKey(on_delete='cascade', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='testcase',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('sprint', models.CharField(max_length=20)),
                ('module', models.CharField(max_length=20)),
                ('hours', models.CharField(max_length=20)),
                ('nooftestcases', models.CharField(max_length=20)),
                ('testcasetype', models.CharField(max_length=20)),
                ('eid', models.ForeignKey(on_delete='cascade', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
