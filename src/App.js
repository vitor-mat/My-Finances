import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from 'react';

import { LoginPage } from './pages/login/index';
import { SignInPage } from './pages/sigin/index';



function App() {
  return(

<Router>
  <Switch>
    <Route exact path="/">
      <LoginPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/sign-in">
      <SignInPage />
    </Route>
  </Switch>
</Router>
  )
}

export default App;
