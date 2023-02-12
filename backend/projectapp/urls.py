from django.contrib import admin
from django.urls import include
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView
from rest_framework import routers

from djangoapp.urls import router as djangorouter

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()

router.registry.extend(djangorouter.registry)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/', include('djangoapp.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),

]
