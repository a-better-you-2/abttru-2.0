import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardHeader, CardBody, Container, Button, Form, FormGroup, Label, Input} from "reactstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class Create extends React.Component {
  state = {
    // isbn: "",
    name: "",
    password: "",
    risk_factor: "",
    diet_recommendation: "",
    diet_restriction: "",
    isValid: true
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.name && this.state.password) {
      this.setState({
        isValid: true
      });
      axios.post("/api/abttru", this.state)
        .then(res => this.props.history.push("/")) // redirect to home page
        .catch(err => console.log(err));
    }
    else {
      this.setState({
        isValid: false
      });
    }
  }

  render() {
    return (
      <Container>
        <Card>
          <CardHeader>
            <h4>Add User</h4>
          </CardHeader>
          <CardBody>
            <Container>
              <h5>
                <Link to="/">
                  <FontAwesomeIcon icon="plus-circle" /> User List
                </Link>
              </h5>
              <Form>
                {/* <FormGroup>
                  <Label for="user_id">* User ID:</Label>
                  <Input type="text" name="user_id" value={this.state.user_id} onChange={this.onChange} placeholder="User ID" />
                </FormGroup> */}
                <FormGroup>
                  <Label for="name">* Name:</Label>
                  <Input type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password:</Label>
                  <Input type="text" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" />
                </FormGroup>
                <FormGroup>
                  <Label for="risk_factor">Risk Factor:</Label>
                  <Input type="text" name="risk_factor" value={this.state.risk_factor} onChange={this.onChange} placeholder="Risk Factor"/>
                </FormGroup>
                <FormGroup>
                  <Label for="diet_recommendation">Diet Recommendation:</Label>
                  <Input type="text" name="diet_recommendation" value={this.state.diet_recommendation} onChange={this.onChange} placeholder="Diet Recommendation" />
                </FormGroup>
                <FormGroup>
                  <Label for="diet_restriction">Diet Restrictions:</Label>
                  <Input type="text" name="diet_restriction" value={this.state.diet_restriction} onChange={this.onChange} placeholder="Diet Restrictions" />
                </FormGroup>
                <Button onClick={this.onSubmit} color="primary">Submit</Button>
              </Form>
            </Container>
          </CardBody>
        </Card>
        <br />
        {/* { !this.state.isValid && (
            <Alert color="danger">
              Please fill the required form fields.
            </Alert>
          )
        } */}
      </Container>
    )
  }
}

export default Create;
