from django.contrib import admin

from .models import DataOwner, DataDomain, Rules, Dashboards, DashboardsRules

admin.site.register(Rules)
admin.site.register(Dashboards)
admin.site.register(DashboardsRules)
admin.site.register(DataOwner)
admin.site.register(DataDomain)
