from jet.dashboard.modules import DashboardModule
from contact.models import Ticket
from dashboardviews import models

class RecentTickets(DashboardModule):
    title = 'Recent tickets'
    title_url = Ticket.get_admin_changelist_url()
    template = 'contact/dashboard_modules/recent_tickets.html'
    limit = 10

    def _init_(self, context):
        self.children = Ticket.objects.order_by('-date_add')[:self.limit]
		
		
		
class LinkList(DashboardModule):
    title = 'Links'
    template = 'jet.dashboard/modules/link_list.html'
    layout = 'stacked'
    children = []
    settings_form = LinkListSettingsForm
    child_form = LinkListItemForm
    child_name = 'Link'
    child_name_plural = 'Links'

    def __init__(self, title=None, children=list(), **kwargs):
        children = list(map(self.parse_link, children))
        kwargs.update({'children': children})
        super(LinkList, self).__init__(title, **kwargs)

    def settings_dict(self):
        return {
            'layout': self.layout
        }

    def load_settings(self, settings):
        self.layout = settings.get('layout', self.layout)

    def store_children(self):
        return True

    def parse_link(self, link):
        if isinstance(link, (tuple, list)):
            link_dict = {'title': link[0], 'url': link[1]}
            if len(link) >= 3:
                link_dict['external'] = link[2]
            return link_dict
        elif isinstance(link, (dict,)):
            return link


class LinkListSettingsForm(forms.Form):
    layout = forms.ChoiceField(label='Layout', choices=(('stacked', 'Stacked'), ('inline', 'Inline')))


class LinkListItemForm(forms.Form):
    url = forms.CharField(label='URL')
    title = forms.CharField(label='Title')
    external = forms.BooleanField(label='External link', required=False)

class Moneyticket1(DashboardModule):
    title = _('Charges')
    exclude = None
    hide_empty = True
    def __init__(self, title=None, children=list(), **kwargs):
        children = list(map(self.parse_link, children))
        kwargs.update({'children': children})
        super(LinkList, self).__init__(title, **kwargs)

    def settings_dict(self):
        return {
            'layout': self.layout
        }

    def load_settings(self, settings):
        self.layout = settings.get('layout', self.layout)
    def store_children(self):
        return True
    def render(self):
        orders = models.Customer.getAllObjetcts()
        total = 0
        for orders in orders:
            total = total + order.price
