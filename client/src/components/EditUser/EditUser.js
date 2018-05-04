import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {Panel, Button, Form, FormGroup, FormControl, Label} from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class EditUser extends React.Component {
  state = {
    isbn: "",
    name: "",
    password: "",
    risk_factor: "",
    diet_recommendation: "",
    diet_restriction: ""
  };

  componentDidMount() {
    axios.get(`/api/abttru/${this.props.match.params.id}`)
    .then(res => {
      this.setState(res.data);
    })
    .catch(err => console.log(err));
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/abttru/${this.props.match.params.id}`, this.state)
      .then(res => this.props.history.push(`/show/${this.props.match.params.id}`)) // redirect back to the show page
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
      <Panel>
        <Panel>
          <h4>Edit User</h4>
        </Panel>
        <Panel.Body>
          <div>
            <h5>
              <Link to={`/show/${this.props.match.params.id}`}>
                <FontAwesomeIcon icon="angle-left" /> Back
              </Link>
            </h5>
            <Form>
                <FormGroup>
                  <Label for="user_id">* User ID:</Label>
                  <FormControl type="text" name="user_id" value={this.state._id} onChange={this.onChange} placeholder="User ID" />
                </FormGroup>
                <FormGroup>
                  <Label for="name">* Name:</Label>
                  <FormControl type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Title" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password:</Label>
                  <FormControl type="text" name="password" value={this.state.password} onChange={this.onChange} placeholder="Author" />
                </FormGroup>
                <FormGroup>
                  <Label for="risk_factor">Risk Factor:</Label>
                  <FormControl type="text" name="risk_factor" value={this.state.risk_factor} onChange={this.onChange} placeholder="Risk Factor"/>
                </FormGroup>
                <FormGroup>
                  <Label for="diet_recommendation">Diet Recommendation:</Label>
                  <FormControl type="text" name="diet_recommendation" value={this.state.diet_recommendation} onChange={this.onChange} placeholder="Diet Recommendation" />
                </FormGroup>
                <FormGroup>
                  <Label for="diet_restriction">Diet Restrictions:</Label>
                  <FormControl type="text" name="diet_restriction" value={this.state.diet_restriction} onChange={this.onChange} placeholder="Diet Restriction" />
                </FormGroup>
                <Button onClick={this.onSubmit} color="primary">Submit</Button>
              </Form>
          </div>
        </Panel.Body>
      </Panel>
      </div>
    )
  }
}

export default EditUser;
