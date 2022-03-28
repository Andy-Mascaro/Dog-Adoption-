import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import Header from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
    
 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
