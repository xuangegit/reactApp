import React, {Component} from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import App from "../App"
import {Redirect} from 'react-router-dom'


export default class RouteConfig extends Component{
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/jobManager" />
          </Route>
          <App/>
        </Switch>
      </HashRouter>
    )
  }
}
