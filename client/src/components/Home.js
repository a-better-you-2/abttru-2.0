import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import "./UserList.css";

class Home extends React.Component {
  render() {
    return (
        <div>
            <h4>User List</h4>
            <h5>
              <Link to="/guest">
                <FontAwesomeIcon icon="user-plus" /> Continue as Guest
              </Link>
              <Link to="/admin">
                <FontAwesomeIcon icon="user-plus" /> Continue to Admin
              </Link>
              <Link to="/user">
                <FontAwesomeIcon icon="user-plus" /> Continue to User 
              </Link>
            </h5>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
            </Form>
        </div>
    )
  }
}

export default Home;