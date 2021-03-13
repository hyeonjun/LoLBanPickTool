from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework import status, generics
# Create your views here.
class champs(APIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []
    permission_classes = []

    def get(self, request, *args, **kwargs):
        champ = champInfo.objects.all()
        serializer = ChampInfoSerializer(champ, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        chmps_serializer = ChampInfoSerializer(data=request.data)
        if chmps_serializer.is_valid():
            chmps_serializer.save()
            return Response(chmps_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', chmps_serializer.errors)
            return Response(chmps_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class champsReadAPI(generics.RetrieveAPIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []
    permission_classes = []

    lookup_field = "id"
    queryset = champInfo.objects.all()
    serializer_class = ChampInfoSerializer

class champsUpdateAPI(generics.UpdateAPIView):
    lookup_field = "id"
    queryset = champInfo.objects.all()
    serializer_class = ChampInfoSerializer

class champsDelAPI(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = champInfo.objects.all()
    serializer_class = ChampInfoSerializer


class ChampNameReadAPI(APIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []
    permission_classes = []

    def get(self, request, *args, **kwargs):
        champ = champ_eng_name.objects.all()
        serializer = ChampNameSerializer(champ, many=True)
        return Response(serializer.data)

class Blue(generics.CreateAPIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []
    permission_classes = []

    queryset = BlueTeam.objects.all()
    serializer_class = BlueSerializer

class BlueReadAPI(generics.RetrieveAPIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []
    permission_classes = []

    # lookup_field = "id"
    lookup_field = "room"
    queryset = BlueTeam.objects.all()
    serializer_class = BlueSerializer

class BlueUpdateAPI(generics.UpdateAPIView):
    lookup_field = "room"
    queryset = BlueTeam.objects.all()
    serializer_class = BlueSerializer

class BlueDelAPI(generics.DestroyAPIView):
    lookup_field = "room"
    queryset = BlueTeam.objects.all()
    serializer_class = BlueSerializer

class Red(generics.CreateAPIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []
    permission_classes = []

    queryset = RedTeam.objects.all()
    serializer_class = RedSerializer

class RedReadAPI(generics.RetrieveAPIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []
    permission_classes = []

    lookup_field = "room"
    queryset = RedTeam.objects.all()
    serializer_class = RedSerializer

class RedUpdateAPI(generics.UpdateAPIView):
    lookup_field = "room"
    queryset = RedTeam.objects.all()
    serializer_class = RedSerializer

class RedDelAPI(generics.DestroyAPIView):
    lookup_field = "room"
    queryset = RedTeam.objects.all()
    serializer_class = RedSerializer


class RoomUrlAPI(APIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []
    permission_classes = []

    def get(self, request, *args, **kwargs):
        room = RoomUrl.objects.all()
        serializer = RoomSerializer(room, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = RoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RoomUrlReadAPI(APIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []
    permission_classes = []

    def get(self, request, *args, **kwargs):
        room = RoomUrl.objects.all()
        serializer = RoomSerializer(room, many=True)
        return Response(serializer.data)

class OneRoomUrlReadAPI(generics.RetrieveAPIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []
    permission_classes = []

    lookup_field = "room"
    queryset = RoomUrl.objects.all()
    serializer_class = RoomSerializer

class RoomUrlUpdateAPI(generics.UpdateAPIView):
    lookup_field = "room"
    queryset = RoomUrl.objects.all()
    serializer_class = RoomSerializer