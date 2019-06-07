import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./Nav.css";

const linkStyle = {
  color: "white",
  fontSize: "16px",
  float: "right"
   // boxShadow: "3px 3px 10px black"
}

const navStyle = {
  backgroundColor: "#315659",
  display: "inline-block",
  float: "right",
  color: "white",
  // padding: "10px"
}

const logoStyle = {
  width: "75px",
  height: "auto"
}

const Nav = () => (
  <nav className="navbar navbar-default" >
  <div className="container-fluid" id="navfluid" style={navStyle}>
  <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar" ></span>
    <span className="icon-bar" ></span>
    <span className="icon-bar" ></span>
    </button>
    <Link to="/"><div className="navbar-left logo"><img src={require('./ABTTRU-LOGO.png')} style={logoStyle} alt="logo"/></div></Link>
    {/* <a className="navbar-brand" href="" style={brandStyle}>A Better You</a> */}
  </div>
  <div className="collapse navbar-collapse" id="navigationbar" style={linkStyle}>
    <ul className="nav navbar-nav">
    <Link to="/"><li style={linkStyle}><FontAwesomeIcon icon="home" /> Home</li> </Link>
    </ul>
  </div> {/* <!-- /.navbar-collapse --> */}
  </div>{/* <!-- /.container-fluid --> */}
</nav>
);

export default Nav;