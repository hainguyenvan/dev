# Body
* create user
```
mutation {
  createUser(firstName:"hai", lastName:"nv5", age:25) {
    id,
    firstName
  }
}
```
* get all users
```
{
  users {
    id
    firstName
    lastName
    fullName
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