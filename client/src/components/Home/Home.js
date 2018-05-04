import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Container, Card, CardHeader, CardBody } from "reactstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import "./UserList.css";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Card>
          <CardHeader>
            <h4>The Homepage</h4>
          </CardHeader>
          <CardBody>
            <h5>
              <Link to="/guest">
                <FontAwesomeIcon icon="user" /> Continue as Guest
              </Link>
              <Link to="/admin">
                <FontAwesomeIcon icon="lock" /> Continue to Admin
              </Link>
              <Link to="/user">
                <FontAwesomeIcon icon="user-circle" /> Continue to User
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
          </CardBody>
        </Card>
      </Container>
    )
  }
}

export default Home;