import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './Routes';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { getAccessToken } from './getAccessToken';
import { App } from './App';


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
    <App />
  </ApolloProvider>,
  document.getElementById('root')
); 