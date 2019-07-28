from django.db import models


class HeroModel(models.Model):
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    movie = models.CharField(max_length=100)

    class Meta:
        db_table = 'hero'
