import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
import pickle
from dashboardviews import models


class Products_Api(APIView):
  """
  A custom endpoint for GET request.
  """
  def get(self, request, format=None):
    # instance = models.Images.objects.all()
    # Products = models.Product.objects.all()
    # for inst in Products :
    #     inst.delete() 
    # for inst in instance :
    #     inst.delete()  
    # with open("./src/phones.json") as fle:  
        # dat = json.load(fle)
        # for m in dat :
        #     Img = models.Images(image1=m["images"][0], image2=m["images"][1],image3=m["images"][2], image4=m["images"][3])
        #     Img.save()
        #     productsaving = models.Product(id=m["id"], memory=m["memory"], title=m["title"], price=m["price"], cpu=m["cpu"], category=m["category"], brand=m["brand"], camera=m["camera"], size=m["size"], weight=m["weight"], display=m["display"], battery=m["battery"], images=Img, description=m["description"])
        #     productsaving.save()
    Products = models.Product.objects.all()
    data=[]
    for Product in Products :
        data.append({
              "id" : Product.id,
              "title" : Product.title,
              "price" : Product.price,
              "category" : Product.category,
              "description" : Product.description,
              "images" : 
                  [
                      Product.images.image1,
                      Product.images.image2,
                      Product.images.image3,
                      Product.images.image4
                  ],
              "brand":  Product.brand,
              "cpu": Product.cpu,
              "camera": Product.camera,
              "size": Product.size,
              "weight": Product.weight,
              "display": Product.display,
              "battery": Product.battery,
              "memory": Product.memory
            })
    # file = open("./src/client_order/api/products.json","w") 
    # json.dump(data, file)
    # file.close() 
    return Response(data)
