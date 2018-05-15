import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import Login from "./Login";
// import NavigationBar from '../NavigationBar';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import "./UserList.css";

class Home extends React.Component {

  state = {

  }

  render() {
    return (
      <div className="container">
        {/* <NavigationBar /> */}
        <Panel bsStyle="primary">
          <Panel>
            <Panel.Title componentClass="h4">User List</Panel.Title>
          </Panel>
          <Panel.Body>
            <h5>
              <Link to="/guest">
                <FontAwesomeIcon icon="user" /> Continue as Guest
              </Link>
              {/* <Link to="/doctorLogin"> */}
              <Link to="/doctorLogin">
                <FontAwesomeIcon icon="lock" /> Continue as Doctor
              </Link>
              <Link to="/userLogin">
                <FontAwesomeIcon icon="user-circle" /> Continue as Patient
              </Link>
            </h5>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default Home;