from rest_framework import serializers
from .models import Author


class AuthorSerializer(serializers.Serializer):
    id = serializers.CharField(required=False)
    name = serializers.CharField()
    email = serializers.CharField()
    
    def create(self, validated_data):
        return Author.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.email = validated_data.get('email', instance.name)
        instance.save()
        return instance