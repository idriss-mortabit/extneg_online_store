from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


def Login(request):
  data = request.data  
  user = authenticate(username=data.username, password=data.password)
  if user is not None:
    return Response(data)
  else:
      return []