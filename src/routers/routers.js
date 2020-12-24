import React from 'react'
import Home from "../views/home"
import JobManager from '../views/jobManager'
import dashbord from '../views/dashbord'
import {Route} from 'react-router-dom'
const routers=[
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/jobManager',
    component: JobManager,
    exact: true,
  },
  {
    path: '/dashbord',
    component: dashbord,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  
]

const renderRoutes = (routers) => {
  return routers.map((item, index)=>
    <Route path={item.path} component={item.component} exact={item.exact} key={index}>
      {item.children && renderRoutes(item.children)}
    </Route>
  )
}
export default renderRoutes(routers)