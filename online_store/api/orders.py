from rest_framework.decorators import api_view
from dashboardviews.models import Order, Product, Customer
from time import gmtime, strftime
from random import randint
from rest_framework.response import Response
# b = Blog(name='Beatles Blog', tagline='All the latest Beatles news.')
# b.save()
@api_view(['POST'])
def GetOrder(request):
  data = request.data
  client = data[0]["costumer"]
  mycustumer = Customer(first_name=client["first_name"], last_name=client["last_name"], address=client["address"], city=client["city"], email=client["email"], phone=client["phone"])
  mycustumer.save()
  for singleproduct in data[0]["cart"]:
    myproduct = Product.objects.filter(id = singleproduct["product_id"])
    myid = '#'+str(randint(11,99)) + strftime(" %a, %d %b %Y %H:%M:%S", gmtime())
    myorder = Order(id = myid, customer = mycustumer, product = myproduct, quantity=singleproduct["quantity"], price=myproduct.price , total= data[0]["total"])
    myorder.save()
  return Response(data)