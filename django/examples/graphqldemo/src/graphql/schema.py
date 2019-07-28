import graphene

from .hero.schema import heroschema


class Query(heroschema.Query, graphene.ObjectType):
    pass


class Mutation(heroschema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
