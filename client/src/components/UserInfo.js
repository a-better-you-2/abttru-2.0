import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardHeader, CardBody, Container, Button } from "reactstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class UserInfo extends React.Component {
  state = {
    id: "",
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

  deleteUser = (id) => {
    axios.delete(`/api/abttru/${id}`)
      .then(res => this.props.history.push("/")) // redirect to home page
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Card key={this.state._id}>
        <CardHeader>
          <h4>{this.state.name}</h4>
        </CardHeader>
        <CardBody>
          <Container>
            <h5>
              <Link to="/admin">
                <FontAwesomeIcon icon="list" /> User List
              </Link>
            </h5>
            <dl>
              <dt>User ID:</dt>
              <dd>{this.state._id}</dd>
              <dt>Name:</dt>
              <dd>{this.state.name}</dd>
              <dt>Password:</dt>
              <dd>{this.state.password}</dd>
              <dt>Risk Factor:</dt>
              <dd>{this.state.risk_factor}</dd>
              <dt>Diet Recommendation:</dt>
              <dd>{this.state.diet_recommendation}</dd>
              <dt>Diet Restriction:</dt>
              <dd>{this.state.diet_restriction}</dd>
            </dl>
            <Link to={`/edit/${this.state._id}`} className="btn btn-success">Edit</Link>&nbsp;
            <Button onClick={() => this.deleteUser(this.state._id)} color="danger">Delete</Button>
          </Container>
        </CardBody>
      </Card>
    )
  }
}

export default UserInfo;
