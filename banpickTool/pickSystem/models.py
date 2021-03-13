from django.db import models
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.
class champInfo(models.Model):
    eng_name = models.CharField(max_length=100)
    kor_name = models.CharField(max_length=100)
    lobby_image_right = models.CharField(max_length=300)
    lobby_image_left = models.CharField(max_length=300)
    small_img = models.CharField(max_length=300)
    ban_img = models.CharField(max_length=300)
    voice = models.CharField(max_length=200)

    def __str__(self):
        return self.eng_name

class champ_eng_name(models.Model):
    eng_name = models.CharField(max_length=100)
    def __str__(self):
        return self.eng_name


class BlueTeam(models.Model):
    room = models.CharField(max_length=200)
    ban_1 = models.CharField(max_length=100, default="")
    ban_2 = models.CharField(max_length=100, default="")
    ban_3 = models.CharField(max_length=100, default="")
    ban_4 = models.CharField(max_length=100, default="")
    ban_5 = models.CharField(max_length=100, default="")
    pick_1 = models.CharField(max_length=100, default="")
    pick_2 = models.CharField(max_length=100, default="")
    pick_3 = models.CharField(max_length=100, default="")
    pick_4 = models.CharField(max_length=100, default="")
    pick_5 = models.CharField(max_length=100, default="")
    ban_champ_1 = models.CharField(max_length=100, default="", null=True)
    ban_champ_2 = models.CharField(max_length=100, default="", null=True)
    ban_champ_3 = models.CharField(max_length=100, default="", null=True)
    ban_champ_4 = models.CharField(max_length=100, default="", null=True)
    ban_champ_5 = models.CharField(max_length=100, default="", null=True)
    pick_champ_1 = models.CharField(max_length=100, default="", null=True)
    pick_champ_2 = models.CharField(max_length=100, default="", null=True)
    pick_champ_3 = models.CharField(max_length=100, default="", null=True)
    pick_champ_4 = models.CharField(max_length=100, default="", null=True)
    pick_champ_5 = models.CharField(max_length=100, default="", null=True)
    def __str__(self):
        return self.room

class RedTeam(models.Model):
    room = models.CharField(max_length=200)
    ban_1 = models.CharField(max_length=100, default="")
    ban_2 = models.CharField(max_length=100, default="")
    ban_3 = models.CharField(max_length=100, default="")
    ban_4 = models.CharField(max_length=100, default="")
    ban_5 = models.CharField(max_length=100, default="")
    pick_1 = models.CharField(max_length=100, default="")
    pick_2 = models.CharField(max_length=100, default="")
    pick_3 = models.CharField(max_length=100, default="")
    pick_4 = models.CharField(max_length=100, default="")
    pick_5 = models.CharField(max_length=100, default="")
    ban_champ_1 = models.CharField(max_length=100, default="", null=True)
    ban_champ_2 = models.CharField(max_length=100, default="", null=True)
    ban_champ_3 = models.CharField(max_length=100, default="", null=True)
    ban_champ_4 = models.CharField(max_length=100, default="", null=True)
    ban_champ_5 = models.CharField(max_length=100, default="", null=True)
    pick_champ_1 = models.CharField(max_length=100, default="", null=True)
    pick_champ_2 = models.CharField(max_length=100, default="", null=True)
    pick_champ_3 = models.CharField(max_length=100, default="", null=True)
    pick_champ_4 = models.CharField(max_length=100, default="", null=True)
    pick_champ_5 = models.CharField(max_length=100, default="", null=True)
    
    def __str__(self):
        return self.room

class RoomUrl(models.Model):
    room = models.CharField(max_length=200)
    passwordBlue = models.CharField(max_length=50, default="")
    passwordRed = models.CharField(max_length=50, default="")
    order = models.IntegerField(default=1)
    timeFlag = models.CharField(max_length=10, default=False)
    timeSet = models.CharField(max_length=10, default=False)
    clickFlag = models.CharField(max_length=10, default=False)
    selectChamp = models.CharField(max_length=1000, default="")