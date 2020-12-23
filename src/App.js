import React from 'react' 
// import {BrowserRouter} from 'react-router-dom'
import BaseLayout from './components/layout'
import routers from './routers/routers'



// import logo from './logo.svg';
import './App.css';

const App = () => (
  <BaseLayout>
    <div className="content">{routers}</div>
  </BaseLayout>
)
 
export default App;
