# Generated by Django 3.1.6 on 2021-03-09 08:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pickSystem', '0004_auto_20210309_1702'),
    ]

    operations = [
        migrations.AlterField(
            model_name='roomurl',
            name='order',
            field=models.IntegerField(default=1),
        ),
    ]