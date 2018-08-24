import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "reactstrap";
import Logo from './Logo/Logo';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./Home.css";

class Home extends React.Component {

  state = {

  }

  render() {
    return (
      <div className="main-content">
        <div className="row">
          <div className="col-0 col-sm-0 col-md-4 col-lg-4"></div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <Logo />
          </div>
          <div className="col-0 col-sm-0 col-md-4 col-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-0 col-sm-0 col-md-4 col-lg-4"></div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 home-buttons">
            <button type="button" className="btn btn-primary welcome">
                <h3>
                  <Link to="/guest" id="nav-link">
                    <FontAwesomeIcon icon="user" /> Continue as Guest
              </Link>
                </h3>
            </button>
            <button type="button" className="btn btn-primary welcome">
                <h3>
                  <Link to="/doctorLogin" id="nav-link">
                    <FontAwesomeIcon icon="user-md" color="#F3F0DD" /> Login as Doctor
              </Link>
                </h3>
            </button>
            <button type="button" className="btn btn-primary welcome">
                <h3>
                  <Link to="/userLogin" id="nav-link">
                    <FontAwesomeIcon icon="user-circle" /> Login as Patient
              </Link>
                </h3>
            </button>
          </div>
          <div className="col-0 col-sm-0 col-md-4 col-lg-4"></div>
        </div>
      </div>
    )
  }
}

export default Home;