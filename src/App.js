import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import Header from './components/Header/Header';
import DogDetails from './Views/Home/Dogs/DogDetails';
import NewDogs from './Views/Home/Dogs/NewDogs';
import EditDogs from './Views/Home/Dogs/EditDogs';
import Auth from './Views/Home/Auth';
import { Redirect } from 'react-router-dom';
import users from './services/users';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(users());
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth">
          <Auth setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/dogs/">
          {currentUser ? <NewDogs /> : <Redirect to="/auth" />}
        </Route>
        <Route exact path="/dogs/:id/edit">
          {currentUser ? <EditDogs /> : <Redirect to="auth" />}
        </Route>
        <Route exact path="/dogs/:id">
          <DogDetails currentUser={currentUser} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
