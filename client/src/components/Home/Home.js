import React from "react";
import { Link } from "react-router-dom";
import {Panel, Form, FormGroup, FormControl, Label} from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import "./UserList.css";

class Home extends React.Component {
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
              <Link to="/doctor">
                <FontAwesomeIcon icon="lock" /> Continue as Doctor
              </Link>
              <Link to="/user">
                <FontAwesomeIcon icon="user-circle" /> Continue as Patient
              </Link>
            </h5>
            <Form>
                <FormGroup>
                    <Label >Email</Label>
                    <FormControl type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label >Password</Label>
                    <FormControl type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
            </Form>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default Home;