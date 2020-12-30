import React, {Component} from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import App from "../App";
import Login from "../views/login/login";



export default class RouteConfig extends Component{
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/' render={()=>
            {return (localStorage.getItem('birdUserInfo')&&localStorage.getItem('birdUserInfo')!=='')?<App/>:<Login/>}
          }>
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}
