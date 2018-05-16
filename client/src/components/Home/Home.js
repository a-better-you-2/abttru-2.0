import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import Logo from './Logo/Logo';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import doctorIcon from './doctor-female.png'
import "./Home.css";

class Home extends React.Component {

  state = {

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
          <Logo className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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
                    <FontAwesomeIcon icon="user-md"/> Login as Doctor
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
      </div>
    )
  }
}

export default Home;