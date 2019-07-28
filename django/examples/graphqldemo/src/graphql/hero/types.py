from graphene_django import DjangoObjectType

from ...apps.hero.models import HeroModel


class HeroType(DjangoObjectType):
    class Meta:
        model = HeroModel
