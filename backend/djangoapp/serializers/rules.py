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
from djangoapp.models import Rules, DataOwner

class DataOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataOwner
        fields = ['name']


class RulesSerializer(serializers.ModelSerializer):
    data_owner = DataOwnerSerializer(required=False)
    
    class Meta:
        model = Rules
        fields = ['name', 'description', 'source', 'data_dimension', 'status', 'data_owner', 'creation_date', 'update_date', 'suspension_date']