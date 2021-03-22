import React from "react";
import {Route,Link,Switch} from 'react-router-dom'
import Home from './Home.js'

const App = () => {
  return (
    <div className ='App'>
     
        <h1 className='store-header'>Lambda Eats!</h1>       
      
        <nav>
          <ul>
           <div className='nav-links'>
             <Link to='/'>
              <li>Home</li>
            </Link>
            </div>
          </ul> 
        </nav>
     
     
        
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>        
      </Switch>
    </div>
  );
};
export default App;
