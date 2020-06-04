import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './Routes';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { getAccessToken } from './getAccessToken';


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include',
  request: (operation) => {
    const token = getAccessToken();
    if (token) {
      operation.setContext({
        headers: {
          authorization: `bearer ${token}`
        }
      });
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root')
); 