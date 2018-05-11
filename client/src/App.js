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
import UserLogin from "./components/User/UserLogin/UserLogin";
import DoctorLogin from "./components/Doctor/DoctorLogin/DoctorLogin";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/doctor/:id" component={Doctor} />
            <Route path="/doctorLogin" component={DoctorLogin} />
            <Route path="/create" component={CreateUser} />
            <Route path="/edit/:id" component={EditUser} />
            <Route path="/show/:id" component={UserInfo} />
            <Route path="/user/:id" component={User} />
            <Route path="/userLogin" component={UserLogin} />
            <Route path="/savedrecipes" component={PatientSavedRecipe} />
            <Route path="/guest" component={Guest} />
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
