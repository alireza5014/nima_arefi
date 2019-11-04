import React from 'react';
import {Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import routes from "./routes";
import Template from "./component/Template";
import AuthProvider from "./component/AuthProvider";
import PrivateRoute from "./component/PrivateRoute";

function App() {

   return (

<AuthProvider>
<Template>
  <Switch>
    {routes.map((route)=>(
        route.private ?<PrivateRoute {...route}/> : <Route {...route}/>
        ) )}
  </Switch>
</Template>
</AuthProvider>

  );
}

export default App;
