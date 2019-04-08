"""online_store URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from jet.dashboard.dashboard_modules import google_analytics_views
from online_store.api.product_list import Products_Api
from online_store.api.orders import GetOrder
from online_store.api.login import Login
from online_store.api.register import Register
from online_store.views.index_view import index_view


urlpatterns = [
	path('jet/', include('jet.urls', 'jet')),  # Django JET URLS
	path('jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),
    path('admin/', admin.site.urls),
    #############################  API  #################################
    path('api/get/products', Products_Api.as_view()),
    path('api/get/orders', GetOrder),
    path('api/login', Login),
    path('api/register', Register),
    re_path('',index_view, name='index_view'),
]
