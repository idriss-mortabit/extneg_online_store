from django.db import models
from django.utils.translation import ugettext_lazy as _
from jet.dashboard.dashboard import Dashboard, AppIndexDashboard
from jet.dashboard.dashboard_modules import google_analytics
from jet.dashboard import modules
from jet.dashboard.dashboard_modules import yandex_metrika
from jet.dashboard.modules import DashboardModule


class CustomIndexDashboard(Dashboard):
    columns = 3

    def init_with_context(self, context):
        self.available_children.append(google_analytics.GoogleAnalyticsVisitorsTotals)
        self.available_children.append(google_analytics.GoogleAnalyticsVisitorsChart)
        self.available_children.append(google_analytics.GoogleAnalyticsPeriodVisitors)
        ###########################################################################################
        self.children.append(modules.RecentActions(
        _('Recent Actions'),
        10,
        column=0,
        order=0
        ))
        #############################################################################################
        self.children.append(modules.ModelList(
        _('Models'),
        exclude=('auth.*',),
        column=0,
        order=0
        ))	
        #############################################################################################
        self.children.append(modules.AppList(
        _('Applications'),
        exclude=('auth.*',),
        column=0,
        order=0
        ))	
        #############################################################################################
        self.available_children.append(modules.LinkList)
        self.children.append(modules.LinkList(
        _('Support'),
        children=[
        {
        'title': _('Django documentation'),
        'url': 'http://docs.djangoproject.com/',
        'external': True,
        },
        {
        'title': _('Django "django-users" mailing list'),
        'url': 'http://groups.google.com/group/django-users',
        'external': True,
        },
        {
        'title': _('Django irc channel'),
        'url': 'irc://irc.freenode.net/django',
        'external': True,
        }, 
        ],
        column=0,
        order=0
        ))
        #############################################################################################
        self.children.append(modules.Feed(
        _('Latest Django News'),
        feed_url='http://www.djangoproject.com/rss/weblog/',
        limit=5,
        column=0,
        order=0
        ))
        import sys
        sys.stderr.write("hanbi ya nori ya ssaki khayli ba2alinahuj")
        #############################################################################################

        
        #############################################################################################

        #############################################################################################

#     	# Create your models here.
# class CustomAppIndexDashboard(AppIndexDashboard):
#     def init_with_context(self, context):

#         self.children.append(modules.ModelList(
#             title=_('Application models'),
#             models=self.models(),
#             column=0,
#             order=0
#         ))
#         self.children.append(modules.RecentActions(
#             include_list=self.get_app_content_types(),
#             column=1,
#             order=0
#         ))
#         self.children.append(modules.Moneyticket1(
#             title=_('Money Ticket'),
#             models=self.models(),
#             column=0,
#             order=0
#         ))

