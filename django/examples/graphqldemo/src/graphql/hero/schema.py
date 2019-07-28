import graphene
from graphene_django import DjangoObjectType

from ...apps.hero.models import HeroModel


class HeroType(DjangoObjectType):
    class Meta:
        model = HeroModel


class Query(graphene.ObjectType):
    heroes = graphene.List(HeroType)
    hero = graphene.Field(HeroType, id=graphene.Int())

    def resolve_heroes(self, info, **kwargs):
        return HeroModel.objects.all()

    def resolve_hero(self, info, **kwargs):
        id = kwargs.get('id')
        return HeroModel.objects.get(id=id)


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
        return CreateHero(ok=ok, hero=hero_instance)


class Mutation(graphene.ObjectType):
    create_hero = CreateHero.Field()
    # update_actor = UpdateActor.Field()
    # create_movie = CreateMovie.Field()
    # update_movie = UpdateMovie.Field()


# heroschema = graphene.Schema(query=Query, mutation=Mutation)
heroschema = graphene.Schema(query=Query, mutation=Mutation)
