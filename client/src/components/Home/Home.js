import React from "react";
import { Link } from "react-router-dom";
import { Panel, Image } from "react-bootstrap";
// import abttruLogo from "./abttru-logo.png";
import Logo from './Logo/Logo';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import doctorIcon from './doctor-female.png'
// import Login from "./Login";
// import NavigationBar from '../NavigationBar';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import "./Home.css";

class Home extends React.Component {

  state = {

  }

  render() {
    return (
      <div className="container">
        <Logo />
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          {/* <Panel bsStyle="primary"> */}
          {/* <div id="img-div">
            <Image id="abttru-logo" src={abttruLogo} responsive circle />
          </div> */}

          <Panel>
            <Panel.Body>
              <h3 className="welcome">
                <Link to="/guest">
                  <FontAwesomeIcon icon="user" /> Continue as Guest
              </Link>
              </h3>
            </Panel.Body>
          </Panel>
          <Panel>
            <Panel.Body>
              <h3 className="welcome">
                <Link to="/doctorLogin">
                  {/* <FontAwesomeIcon icon="user-md" />  */}
                  <img src={doctorIcon} alt="doctor icon" id="doctor-icon" /> Login as Doctor
              </Link>
              </h3>
            </Panel.Body>
          </Panel>
          <Panel>
            <Panel.Body>
              <h3 className="welcome">
                <Link to="/userLogin">
                  <FontAwesomeIcon icon="user-circle" /> Login as Patient
              </Link>
              </h3>
            </Panel.Body>
          </Panel>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
      </div>
    )
  }
}

export default Home;