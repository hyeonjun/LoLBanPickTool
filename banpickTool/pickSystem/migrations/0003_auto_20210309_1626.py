# Generated by Django 3.1.6 on 2021-03-09 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pickSystem', '0002_auto_20210303_1940'),
    ]

    operations = [
        migrations.RenameField(
            model_name='roomurl',
            old_name='flag',
            new_name='order',
        ),
        migrations.RemoveField(
            model_name='roomurl',
            name='timerB',
        ),
        migrations.RemoveField(
            model_name='roomurl',
            name='timerR',
        ),
        migrations.AddField(
            model_name='roomurl',
            name='timeFlag',
            field=models.CharField(default=False, max_length=10),
        ),
        migrations.AddField(
            model_name='roomurl',
            name='timeSet',
            field=models.CharField(default=False, max_length=10),
        ),
    ]
