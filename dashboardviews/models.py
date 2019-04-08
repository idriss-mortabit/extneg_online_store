# encoding: utf-8
from django.db import models
from django.contrib.auth.models  import User
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _
import datetime


@python_2_unicode_compatible

class Images(models.Model):
    image1 = models.CharField(_('image1'), max_length=255)
    image2 = models.CharField(_('image2'), max_length=255)
    image3 = models.CharField(_('image3'), max_length=255)
    image4 = models.CharField(_('image4'), max_length=255)

    class Meta:
        verbose_name = _('images')
        verbose_name_plural = _('images')
        # unique_together = ('image1', 'image2','image3', 'image4')

    def __str__(self):
        return self.image1

    def get_absolute_url(self):
        return ''


class Product(models.Model):
    id = models.IntegerField(max_length=100, unique=True, primary_key=True)
    title = models.CharField(_('title'), max_length=255)
    price = models.FloatField(_('price'), max_length=255)
    cpu = models.CharField(_('cpu'), max_length=455)
    category = models.CharField(_('category'), max_length=255)
    brand = models.CharField(_('brand'), max_length=255)
    camera = models.CharField(_('camera'), max_length=255)
    size = models.CharField(_('size'), max_length=255)
    weight = models.CharField(_('weight'), max_length=470)
    display = models.CharField(_('display'), max_length=470)
    battery = models.CharField(_('battery'), max_length=470)
    memory = models.CharField(_('memory'), max_length=255)
    images = models.ForeignKey(Images, verbose_name=_('images'), on_delete=models.CASCADE)
    description = models.TextField(_('description'))
    
    class Meta:
        verbose_name = _('product')
        verbose_name_plural = _('products')
        # unique_together = ('id','title', 'brand', "price", 'description','category', 'images')

    def __str__(self):
        return self.title

    @staticmethod
    def autocomplete_search_fields():
        return 'title'

class Customer(models.Model):
    first_name = models.CharField(_('first name'), max_length=255)
    last_name = models.CharField(_('last name'), max_length=255)
    address = models.CharField(_('address'), max_length=555)
    city = models.CharField(_('city'), max_length=555)
    # company = models.ForeignKey(Company, verbose_name=_('company'), related_name='persons', on_delete=models.CASCADE)
    phone = models.CharField(_('phone'), max_length=255)
    email = models.EmailField(_('email'), max_length=255)
    # web = models.URLField(_('web'), max_length=255)
    # content = models.TextField(verbose_name=u'Содержание')
    # visible_for_unauthorized = models.BooleanField(default=True, verbose_name=u'Видна для неавторизованных')
    # visible_for_authorized = models.BooleanField(default=True, verbose_name=u'Видна для авторизованных')

    class Meta:
        verbose_name = _('customer')
        verbose_name_plural = _('customers')
        # ordering = ('url',)

    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)


class Order(models.Model):
    id = models.CharField(max_length=100, unique=True, primary_key=True)
    customer =  models.ForeignKey(Customer, verbose_name=_('customer'), on_delete=models.CASCADE)
    date = models.DateField(_("Date"), default=datetime.date.today)
    product = models.ForeignKey(Product, verbose_name=_('product'), on_delete=models.CASCADE)
    price = models.FloatField(_('price'), max_length=255)
    quantity =  models.IntegerField(_('quantity'), max_length=255)
    total = models.FloatField(_('total'), max_length=255)

    class Meta:
        verbose_name = _('order')
        verbose_name_plural = _('orders')


    def __str__(self):
        return self.id


class Campanycharges(models.Model):
    charge_name = models.CharField(_('name'), max_length=255)
    price = models.IntegerField(_('price'), max_length=255)
    date = models.DateField(_("Date"), default=datetime.date.today)
    owner = models.ForeignKey(User, verbose_name=_('owner'), on_delete=models.CASCADE)
    description = models.TextField(_('description'))
    # company = models.ForeignKey(Company, verbose_name=_('company'), related_name='persons', on_delete=models.CASCADE
    # web = models.URLField(_('web'), max_length=255)
    # content = models.TextField(verbose_name=u'Содержание')
    # visible_for_unauthorized = models.BooleanField(default=True, verbose_name=u'Видна для неавторизованных')
    # visible_for_authorized = models.BooleanField(default=True, verbose_name=u'Видна для авторизованных')

    class Meta:
        verbose_name = _('campany charge')
        verbose_name_plural = _('campany charges')
        # ordering = ('url',)

    def __str__(self):
        return self.owner

class Productcharges(models.Model):
    product = models.ForeignKey(Product, verbose_name=_('product'), on_delete=models.CASCADE)
    quantity = models.IntegerField(_('quantity'), max_length=255)
    price = models.IntegerField(_('price'), max_length=255)
    date = models.DateField(_("Date"), default=datetime.date.today)
    owner = models.ForeignKey(User, verbose_name=_('owner'), on_delete=models.CASCADE)
    description = models.TextField(_('description'))
    # company = models.ForeignKey(Company, verbose_name=_('company'), related_name='persons', on_delete=models.CASCADE
    # web = models.URLField(_('web'), max_length=255)
    # content = models.TextField(verbose_name=u'Содержание')
    # visible_for_unauthorized = models.BooleanField(default=True, verbose_name=u'Видна для неавторизованных')
    # visible_for_authorized = models.BooleanField(default=True, verbose_name=u'Видна для авторизованных')

    class Meta:
        verbose_name = _('product charges')
        verbose_name_plural = _('product charges')
        # ordering = ('url',)

    def __str__(self):
        return self.owner


