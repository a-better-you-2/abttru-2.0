import React from "react";
import abttruLogo from "./abttru-logo.png";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import Login from "./Login";
// import NavigationBar from '../NavigationBar';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import "../Home.css";

const Logo = () => (
    <div id="img-div">
        <img src={abttruLogo} className="img-responsive" id="abttru-logo" />
    </div>
);

export default Logo;