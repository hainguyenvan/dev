import graphene
from graphene_django import DjangoObjectType

from ...apps.hero.models import HeroModel
from .types import HeroType


class Query(graphene.ObjectType):
    heroes = graphene.List(HeroType)
    hero = graphene.Field(HeroType, id=graphene.Int())

    def resolve_heroes(self, info, **kwargs):
        return HeroModel.objects.all()

    def resolve_hero(self, info, **kwargs):
        id = kwargs.get('id')
        return HeroModel.objects.get(id=id)
