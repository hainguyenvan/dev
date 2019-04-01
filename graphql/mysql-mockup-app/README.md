# Body
* create user
```
mutation {
  createUser(id:"user-103",firstName:"Tim",lastName:"George", age: 23) {
    id,
    firstName
  }
}
```
* get all users
```
{
  users {
     id,
     firstName
  }
}
```
* get all posts
```
{
  posts {
     id,contents
    user{
      id,firstName, lastName
    }
  }
}
```
# Ref
* https://www.manifold.co/blog/build-a-cms-api-with-graphql-and-apollo-server-ae6a5d5c7fb3