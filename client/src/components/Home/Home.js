import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
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
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Panel>
              <div type="button" className="btn welcome">
                <h3>
                  <Link to="/guest" id="nav-link">
                    <FontAwesomeIcon icon="user" /> Continue as Guest
              </Link>
                </h3>
              </div>
            </Panel>
            <Panel>
              <div  type="button"className="btn welcome">
                <h3>
                  <Link to="/doctorLogin" id="nav-link">
                    <FontAwesomeIcon icon="user-md" color="#EFFFFA" /> Login as Doctor
              </Link>
                </h3>
              </div>
            </Panel>
            <Panel>
              <div  type="button"className="btn welcome">
                <h3>
                  <Link to="/userLogin" id="nav-link">
                    <FontAwesomeIcon icon="user-circle" /> Login as Patient
              </Link>
                </h3>
              </div>
            </Panel>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
        </div>
      </div>
    )
  }
}

export default Home;