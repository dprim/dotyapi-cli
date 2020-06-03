import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

export const Routes: React.FC = () => {
  return <BrowserRouter>
    <header>
      <div>
      <div><Link to="/">Home</Link></div>
        <div><Link to="/register">Register</Link></div>
        <div><Link to="/login">Login</Link></div>
      </div>
    </header>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Switch>
  </BrowserRouter>;
} 