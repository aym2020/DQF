from django.contrib import admin
from django.urls import include
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView
from rest_framework import routers, serializers, viewsets

from djangoapp.models import Rules, Dashboards, DashboardsRules, DataOwner, DataDomain


# Serializers define the API representation.
class RulesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rules
        fields = ['name']


# ViewSets define the view behavior.
class RulesViewSet(viewsets.ModelViewSet):
    queryset = Rules.objects.all()
    serializer_class = RulesSerializer


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'rules', RulesViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),

]