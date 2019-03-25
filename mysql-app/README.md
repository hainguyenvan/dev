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
    id
    contents
    user {
      id
      firstName
      lastName
      fullName
    }
  }
}
```
* create post
```
mutation {
  createPost(contents: "test 105", date: "20190324", userID: 3) {
    id
  }
}
```
# Ref
* https://www.manifold.co/blog/build-a-cms-api-with-graphql-and-apollo-server-ae6a5d5c7fb3
* Merge schema file
  * https://blog.apollographql.com/modularizing-your-graphql-schema-code-d7f71d5ed5f2