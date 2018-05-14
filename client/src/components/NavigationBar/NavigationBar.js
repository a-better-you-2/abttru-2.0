import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { Row } from '../Grid';

const linkStyle = {
  color: "black",
  boxShadow: "3px 3px 10px black"
}
const navStyle = {
  backgroundColor: "#315659 !important;"
  
  
}

const Nav = () => (
  <nav className="navbar navbar-dark" style={navStyle}>
    <a className="navbar-brand" href="/">
      <h1>Welcome to ABTTRU</h1>
    </a>

    <Row>
    
        <Link to={"/"} >
        <button className="btn btn-success" style={linkStyle}>
          <strong>
          Search for Articles
          
          </strong>
          </button>
        </Link>
    
      
      <Link to={"/saved"}>
      <button className="btn btn-success"  style={linkStyle}>
        <strong>
          Saved Articles Page
          </strong>
          </button>
      </Link>
      
    </Row>

  </nav>
);

export default Nav;