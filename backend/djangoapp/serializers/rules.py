"""
This file defines serializers for Django models "Rules" and "DataOwner". 
Serializers allow complex data structures like Django models to be converted to and from Python data types that can be easily rendered into JSON or other content types. 
This can be useful for rendering data to an API response or for validating incoming data from an API request.

The "DataOwnerSerializer" class defines a serializer for the "DataOwner" model, and the "RulesSerializer" class defines a serializer for the "Rules" model. 

In the "RulesSerializer" class, the "data_owner" field is set to an instance of the "DataOwnerSerializer" class with "required=False", 
meaning that the "data_owner" field is not required in order to create an instance of the "Rules" model. 

The "Meta" class in each serializer defines the model to be serialized and the fields that should be included in the serialized representation.
"""


from rest_framework import serializers
from djangoapp.models import Rules, DataOwner, DataDomain

class DataOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataOwner
        fields = ['id_data_owner', 'name', 'description', 'creation_date', 'update_date', 'suspension_date']

class DataDomainSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataDomain
        fields = ['id_data_domain', 'name', 'description', 'creation_date', 'update_date', 'suspension_date']

class RulesSerializer(serializers.ModelSerializer):
    data_owner = DataOwnerSerializer(required=False, read_only=True)
    data_domain = DataDomainSerializer(required=False, read_only=True)
    data_owner = serializers.PrimaryKeyRelatedField(queryset=DataOwner.objects.all(), required=False)
    data_domain = serializers.PrimaryKeyRelatedField(queryset=DataDomain.objects.all(), required=False)
    
    class Meta:
        model = Rules
        fields = ['name', 'description', 'source', 'data_dimension', 'data_owner', 'data_domain', 'creation_date', 'update_date', 'suspension_date', 'status']