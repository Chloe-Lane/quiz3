from django.urls import path
from . import views, rooms
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('rooms/', views.getRooms, name="rooms"),
    path('rooms/<str:pk>', views.getRoom, name="room"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'), 
]

