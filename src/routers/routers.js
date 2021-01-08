import React from 'react'
import JobManager from '../views/jobManager'
import {Route} from 'react-router-dom'
const routers=[
  {
    path: '/jobManager',
    component: JobManager,
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