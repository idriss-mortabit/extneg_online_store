from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from rest_framework.response import Response

def Register(request):
  data = request.data
  user = User.objects.create_user(username = data.username, password = data.password)
  return Response(data)