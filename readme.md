# Description

---

Auth2 is a bare-bones React.JS app with an apollo connector, connecting to a GraphQL authentication server in the backend. It uses jwt tokens to authenticate users, and refresh tokens to maintain state.

# Instructions to run

---

This project is packaged via npm; the respective package.json file contains all required scripts.

> For convenience, `.env` file is attached within the repository. Not recommended for production.

In order to the run the project, first install the dependencies. 

---

To install all dependencies:

```
    `yarn install` or `npm install`

```

---

To start the website:

```
    `yarn start` or `npm start`
```

---

The project expects a graphql server at port `8000/graphql` with the appropriate configuration; failure to find the serve would cause the apollo connector to crash. The project is ran via `nodemon`, any changes in the files would cause the server to restart for faster dev. experience.


# Graph QL API: types, mutation and queries

#### Types

---

```graphql
LoginResponse {
  accessToken: String!
  user: User!
}
```

```graphql
User {
  id: Int!
  email: String!
}
```

#### Mutations

---

```graphql
Mutation {
  register(password: String!, email: String!): Boolean!
  login(password: String!, email: String!): LoginResponse!
  revokeRefreshTokenForUser(userId: Int!): Boolean!
  logout: Boolean!
}
```

#### Queries

---

```graphql
Query {
  hello: String!
  bye: String!
  users: [User!]!
  me: User
}
```

# Example API requests

#### Registration

Registering an user with a sample email and password.

```graphql
mutation registerUser {
  register(email: "hobby@gmail.com", password: "userPassword")
}
```

#### Login

Logging in an user and returning accessToken for further requests.

```graphql
mutation login {
  login(email: "hobby@gmail.com", password: "userPassword") {
    accessToken
  }
}
```

# Acknowledgement

This project is based on tutorials by youtuber Ben Awad. Here is a link to Ben's channel:https://www.youtube.com/user/99baddawg; like, share and follow his channel if you appreciate the content.
