import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Header} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
