import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {Panel, Button, Form, FormGroup, FormControl, Label, Alert} from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class Create extends React.Component {
  state = {
    user_id: "",
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
      console.log(this.state);
      axios.post("/api/abttru/", this.state)
        .then(res => this.props.history.push("/doctor")) // redirect to admin page
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
      <div className="container">
        <Panel>
          <Panel>
            <h4>Add Patient</h4>
          </Panel>
          <Panel.Body>
            <div>
              <h5>
                <Link to="/doctor">
                  <FontAwesomeIcon icon="list" /> Patient List
                </Link>
              </h5>
              <Form>
                <FormGroup>
                  <Label>* Name:</Label>
                  <FormControl type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Name" />
                </FormGroup>
                <FormGroup>
                  <Label>Password:</Label>
                  <FormControl type="text" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" />
                </FormGroup>
                <FormGroup>
                  <Label>Risk Factor:</Label>
                  <FormControl type="text" name="risk_factor" value={this.state.risk_factor} onChange={this.onChange} placeholder="Risk Factor"/>
                </FormGroup>
                <FormGroup>
                  <Label>Diet Recommendation:</Label>
                  <FormControl type="text" name="diet_recommendation" value={this.state.diet_recommendation} onChange={this.onChange} placeholder="Diet Recommendation" />
                </FormGroup>
                <FormGroup>
                  <Label>Diet Restrictions:</Label>
                  <FormControl type="text" name="diet_restriction" value={this.state.diet_restriction} onChange={this.onChange} placeholder="Diet Restrictions" />
                </FormGroup>
                <Button onClick={this.onSubmit.bind(this)} color="primary">Submit</Button>
              </Form>
            </div>
          </Panel.Body>
        </Panel>
        <br />
        { !this.state.isValid && (
            <Alert color="danger">
              Please fill the required form fields.
            </Alert>
          )
        }
      </div>
    )
  }
}

export default Create;
