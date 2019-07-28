from django.db import models

from ..actor.models import ActorModel


class MovieModel(models.Model):
    title = models.CharField(max_length=100)
    actors = models.ManyToManyField(ActorModel)
    year = models.IntegerField()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)
