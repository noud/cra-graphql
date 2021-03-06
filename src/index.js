import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from 'react-router'
import './index.css';
import App from './App';
import UserPage from './components/UserPage'

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route path="/user" component={UserPage} />
        <Route path="/" component={App} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
