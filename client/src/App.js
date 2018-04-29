import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import UserInfo from "./components/UserInfo";
import User from "./components/User";
import Recipes from "./components/Recipes";
import Guest from "./components/Guest";
import { Container } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="app-wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/create" component={CreateUser} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/show/:id" component={UserInfo} />
          <Route path="/user" component={User} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/guest" component={Guest} />
        </Container>
      </Router>
    );
  }
}

export default App;
