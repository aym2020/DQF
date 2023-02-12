"""
This file is a Django ViewSet that handles the logic of a RESTful API endpoint for the Rules model. 
It defines a set of views that can be used to interact with the Rules model via a REST API.

The RulesViewSet class extends the viewsets.ModelViewSet class from the rest_framework package. 
The viewsets.ModelViewSet class provides a default set of views for working with model instances, including views for creating, retrieving, updating, and deleting instances.

The RulesViewSet class sets the following properties:

- queryset: This is the default queryset that the views will use to retrieve instances of the Rules model. 
Rules.objects.all() returns all instances of the Rules model from the database.

- serializer_class: This property sets the serializer class that the views will use to serialize and deserialize instances of the Rules model. 
In this case, it is set to RulesSerializer.

- permission_classes: This property sets the permission classes that the views will use to control access to the API endpoints. 
In this case, it is set to an empty tuple, which means that there are no permission classes defined and any client can access the API endpoints.
"""

from rest_framework import viewsets

from djangoapp.models import Rules, DataOwner, DataDomain
from djangoapp.serializers.rules import RulesSerializer, DataOwnerSerializer, DataDomainSerializer


# ViewSets define the view behavior.
class RulesViewSet(viewsets.ModelViewSet):
    queryset = Rules.objects.all()
    serializer_class = RulesSerializer
    permission_classes = ()

class DataOwnersViewSet(viewsets.ModelViewSet):
    queryset = DataOwner.objects.all()
    serializer_class = DataOwnerSerializer
    permission_classes = ()

class DataDomainsViewSet(viewsets.ModelViewSet):
    queryset = DataDomain.objects.all()
    serializer_class = DataDomainSerializer
    permission_classes = ()