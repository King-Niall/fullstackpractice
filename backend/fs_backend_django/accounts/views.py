from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from .serializers import UserSerializer

class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def check_logged_in(request):
    user = request.user
    return JsonResponse({
        "username": user.username,
    })
