import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import Header from './components/Header/Header';
import DogDetails from './Views/Home/Dogs/DogDetails';
import NewDogs from './Views/Home/Dogs/NewDogs';
function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dogs/:id">
          <DogDetails />
        </Route>
        <Route exact path="/dogs/">
          <NewDogs />
        </Route>
    
 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
