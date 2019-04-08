# encoding: utf-8
from django.contrib import admin
from jet.admin import CompactInline
from dashboardviews.models import Customer, Order, Product, Images, Campanycharges, Productcharges
from django.utils.translation import ugettext_lazy as _
from django.utils.html import format_html


class StateCountiesInline(admin.TabularInline):
    model = Images
    extra = 1
    show_change_link = True

class CampanychargesAdmin(admin.ModelAdmin):
    list_display = (
        'charge_name',
        'date',
        'price',
        'owner',
        'description',
    )
    search_fields = ('date','charge_name','description')
    list_filter = (
        'date',
        'price',
        'owner',
        'charge_name',
    )

class ProductchargesAdmin(admin.ModelAdmin):
    list_display = (
        'product',
        'quantity',
        'date',
        'price',
        'owner',
        'description',
    )
    search_fields = ('date','product','charge_name','description')
    list_filter = (
        'product',
        'date',
        'price',
        'owner',
    )



class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'customer',
        'date',
        'product',
        'price',
        'quantity',
        'total',
    )
    search_fields = ('date','product','price')
    list_filter = (
        'customer',
        'date',
        'price',
        'product',
    )

class CustomerAdmin(admin.ModelAdmin):
    list_display = (
        'first_name',
        'last_name',
        'address',
        'city',
        'phone',
        'email',
    )
    search_fields = ('first_name', 'last_name', 'city', 'phone')
    list_filter = (
        'city',
    )


class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'price',
        'brand',
        'category',
        'description',
    )
    list_filter = (
        'category',
        'price',
        'brand',
    )
    ordering = ('title', 'category')
    search_fields = ('title', 'category', 'description', 'brand')

admin.site.site_header = format_html("Extentia Negoce Dashboard")
admin.site.site_title = format_html("Extentia Negoce Dashboard")
admin.site.register(Images)
admin.site.register(Order, OrderAdmin)
admin.site.register(Customer, CustomerAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Campanycharges, CampanychargesAdmin)
admin.site.register(Productcharges, ProductchargesAdmin)

