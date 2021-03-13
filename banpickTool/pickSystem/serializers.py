from .models import *
from rest_framework import serializers

class ChampInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = champInfo
        fields = '__all__'

class ChampNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = champ_eng_name
        fields = '__all__'


class BlueSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlueTeam
        fields = '__all__'

class RedSerializer(serializers.ModelSerializer):
    class Meta:
        model = RedTeam
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomUrl
        fields = '__all__'
