import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import { useState } from 'react';
import { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] =useState ({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
    <Router>
    <Header/>
    <Switch>
      <Route path="/home">
        <Home />       
      </Route>      
      <Route path="/destination">
        <Destination />
      </Route>
      <Route path="/blog">
        <Blog />
        </Route>
        <Route path="/login">
        <Login />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <PrivateRoute path="/book/:vehicleType"> 
        <Book />
      </PrivateRoute>
     <Route exact path="/">
        <Home />
      </Route>
    </Switch>
</Router>
</UserContext.Provider>
  );
 }

 export default App; 
