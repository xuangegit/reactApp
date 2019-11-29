import React from 'react'
import home from "../views/home"
import dashbord from '../views/dashbord'
import {Route} from 'react-router-dom'
const routers=[
  {
    path: '/',
    component: home,
    exact: true,
  },
  {
    path: '/home',
    component: home,
    exact: true,
  },
  {
    path: '/dashbord',
    component: dashbord,
    exact: true,
  }
  
]

const renderRoutes = (routers) => {
  return routers.map((item, index)=>
    <Route path={item.path} component={item.component} exact={item.exact} key={index}>
      {item.children && renderRoutes(item.children)}
    </Route>
  )
}
export default renderRoutes(routers)