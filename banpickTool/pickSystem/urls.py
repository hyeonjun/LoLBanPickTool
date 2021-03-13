from django.urls import path
from .views import *

urlpatterns=[
    path('champInfo/', champs.as_view(), name="champInfo"),
    path('champInfo/<int:id>/', champsReadAPI.as_view()),
    path('champInfo/<int:id>/update/', champsUpdateAPI.as_view()),
    path('champInfo/<int:id>/delete/', champsDelAPI.as_view()),
    path('champName/', ChampNameReadAPI.as_view()),
    path('blue/', Blue.as_view(), name="blue"),
    path('blue/<str:room>/', BlueReadAPI.as_view()),
    path('blue/<str:room>/update/', BlueUpdateAPI.as_view()),
    # path('blue/<str:room>/', BlueReadAPI.as_view()),
    path('red/', Red.as_view(), name="red"),
    path('red/<str:room>/', RedReadAPI.as_view()),
    path('red/<str:room>/update/', RedUpdateAPI.as_view()),
    # path('red/<str:room>/', RedReadAPI.as_view()),
    path('room/', RoomUrlAPI.as_view()),
    path('roomname/', RoomUrlReadAPI.as_view()),
    path('roomname/<str:room>/', OneRoomUrlReadAPI.as_view()),
    path('roomname/<str:room>/update/',RoomUrlUpdateAPI.as_view()),
]

