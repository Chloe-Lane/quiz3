from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('products/', views.getProducts, name="products"),
    path('product/<str:pk>', views.getProduct, name="product"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'), 
]

