import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Doctor from "./components/Doctor";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import UserInfo from "./components/UserInfo";
import User from "./components/User";
import PatientSavedRecipe from "./components/PatientSavedRecipe";
import Guest from "./components/Guest";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/doctor" component={Doctor} />
          <Route path="/create" component={CreateUser} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/show/:id" component={UserInfo} />
          <Route path="/user" component={User} />
          <Route path="/savedrecipes" component={PatientSavedRecipe} />
          <Route path="/guest" component={Guest} />
        </div>
      </Router>
    );
  }
}

export default App;
