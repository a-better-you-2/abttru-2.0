import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
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
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
          <Logo className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-4 col-lg-4"></div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <Button>
              <div type="button" className="btn welcome">
                <h3>
                  <Link to="/guest" id="nav-link">
                    <FontAwesomeIcon icon="user" /> Continue as Guest
              </Link>
                </h3>
              </div>
            </Button>
            <Button>
              <div type="button"className="btn welcome">
                <h3>
                  <Link to="/doctorLogin" id="nav-link">
                    <FontAwesomeIcon icon="user-md" color="#F3F0DD" /> Login as Doctor
              </Link>
                </h3>
              </div>
            </Button>
            <Button>
              <div  type="button"className="btn welcome">
                <h3>
                  <Link to="/userLogin" id="nav-link">
                    <FontAwesomeIcon icon="user-circle" /> Login as Patient
              </Link>
                </h3>
              </div>
            </Button>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-4 col-lg-4"></div>
        </div>
      </div>
    )
  }
}

export default Home;