from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import RegisterView
from .views import check_logged_in

urlpatterns = [
    path('register/', RegisterView.as_view(), name='api-register'),
    path('login/', obtain_auth_token, name='api-login'),
    path('check/', check_logged_in, name='check-logged-in'),

]
