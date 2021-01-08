import React from 'react' 
// import {BrowserRouter} from 'react-router-dom'
import BaseLayout from './components/layout'
import routers from './routers/routers'
import './App.css';

const App = (props) => {
  return(
  <BaseLayout>
    <div className="content">   
      {routers}
    </div>
  </BaseLayout>
)}
 
export default App;
