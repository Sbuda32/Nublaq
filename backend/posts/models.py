from django.db import models
# from rest_framework import serializers

class Post( models.Model ):
    title = models.CharField( max_length=150 )
    body = models.TextField()
    # created_by_date = serializers.DateTimeField( format="YYYY-MM-DDThh:mm[:ss[.uuuuuu]][+HH:MM|-HH:MM|Z]", read_only=True )
    image = models.ImageField( max_length=300, blank=True, null=True )
    # author = 