import React, {Component} from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import App from "../App";
import Login from "../views/login";



export default class RouteConfig extends Component{
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/' render={()=>
            <App>
            </App>
          }>
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}
