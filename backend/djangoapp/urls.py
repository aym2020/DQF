from rest_framework import routers
from django.urls import path

from djangoapp.views import RulesViewSet, DataOwnersViewSet, DataDomainsViewSet
from djangoapp.views.config import get_constants


router = routers.DefaultRouter()
router.register(r'rules', RulesViewSet)
router.register(r'dataowners', DataOwnersViewSet)
router.register(r'datadomains', DataDomainsViewSet)

urlpatterns = [
  path('constants/', get_constants, name='constant')
]