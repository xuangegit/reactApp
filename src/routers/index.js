import React, {Component} from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import App from "../App";
import Login from "../views/login/login";
import {Redirect} from 'react-router-dom'


export default class RouteConfig extends Component{
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/jobManager" />
          </Route>
          <Route exact path="/login" component={Login}>
          </Route>
          <App/>
        </Switch>
      </HashRouter>
    )
  }
}
