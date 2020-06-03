import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

export const Routes: React.FC = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Switch>
  </BrowserRouter>;
} 