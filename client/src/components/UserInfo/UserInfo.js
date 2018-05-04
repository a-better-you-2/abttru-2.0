import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Panel, Button } from "react-bootstrap";
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
      .then(res => this.props.history.push("/admin")) // redirect to home page
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
      <Panel key={this.state._id}>
        <Panel>
          <h4>{this.state.name}</h4>
        </Panel>
        <Panel.Body>
          <div>
            <h5>
              <Link to="/doctor">
                <FontAwesomeIcon icon="list" /> Patient List
              </Link>
            </h5>
            <dl>
              <dt>Patient ID:</dt>
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
          </div>
        </Panel.Body>
      </Panel>
      </div>
    )
  }
}

export default UserInfo;
