# Description

---

Auth2 is a bare-bones React.JS app with an apollo connector, connecting to a GraphQL authentication server in the backend. It uses jwt tokens to authenticate users, and refresh tokens to maintain state.

# Instructions to run

---

This project is packaged via npm; the respective package.json file contains a description of all scripts.

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

The project uses `graphql-codegen` to generate graphql operations as react hooks. Queries to be transformed are stored in `/src/graphql/` directory, and the generated hooks are exported from `/src/generated` directory.
To run graphql code generator. It transforms queries and mutations stored in the `/src/graphql/` directory into generated hooks.

```
  `yarn run gen` or `npm run gen`
```

---

The project expects a graphql server at port `8000/graphql` with the appropriate configuration; failure to find the serve would cause the apollo connector to crash. The project is ran via `nodemon`, any changes in the files would cause the server to restart for faster dev. experience.

# Acknowledgement

This project is based on tutorials by youtuber Ben Awad. Here is a link to Ben's channel: "https://www.youtube.com/user/99baddawg"; like, share and follow his channel if you appreciate the content.
