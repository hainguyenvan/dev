import graphene
from graphene_django import DjangoObjectType

from ...apps.hero.models import HeroModel
from .types import HeroType


class CreateHero(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        gender = graphene.String(required=True)
        movie = graphene.String(required=True)

    ok = graphene.Boolean()
    hero = graphene.Field(HeroType)

    @staticmethod
    def mutate(root, info, **kwargs):
        ok = True
        hero_instance = HeroModel(name=kwargs.get(
            'name'), movie=kwargs.get('movie'), gender=kwargs.get('gender'))
        hero_instance.save()
        return CreateHero(ok=True, hero=hero_instance)


class DeleteHero(graphene.Mutation):
    ok = graphene.Boolean()
    hero = graphene.Field(HeroType)

    class Arguments:
        id = graphene.Int(required=True)

    @staticmethod
    def mutate(root, info, id):
        return DeleteHero(ok=True, hero=None)


class Mutation(graphene.ObjectType):
    create_hero = CreateHero.Field()
    delete_hero = DeleteHero.Field()
    # update_actor = UpdateActor.Field()
    # create_movie = CreateMovie.Field()
    # update_movie = UpdateMovie.Field()
