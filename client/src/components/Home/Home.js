import React from "react";
import { Link } from "react-router-dom";
import { Panel, Form, FormGroup, FormControl, Label } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Login from "./Login";
// import "./UserList.css";

class Home extends React.Component {

  state = {

  }

  render() {
    return (
      <div className="container">
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