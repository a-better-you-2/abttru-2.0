import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Panel, Button } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class UserInfo extends React.Component {
  state = {
    patient_id: this.props.match.params.id,
    doctor_id: this.props.location.params.doctor_id,
    name: "",
    password: "",
    risk_factor: "",
    diet_recommendation: "",
    diet_restriction: ""
  };

  componentDidMount() {
    console.log(this.props)
    axios.get(`/api/abttru/user/${this.state.patient_id}`)
      .then(res => {
        this.setState(res.data);
        console.log(this.state);
      })

      .catch(err => console.log(err));

  }

  // deleteUser = (id) => {
  //   axios.delete(`/api/abttru/user/${id}`)
  //     .then(res => this.props.history.push("/doctor")) // redirect to home page
  //     .catch(err => console.log(err));
  // }

  deletePatient = (event) => {
    const id = event.target.id;
    console.log(id);
    axios.delete(`/api/abttru/user/${id}`)
      .then(res => this.props.history.push(`/doctor/${this.state.doctor_id}`))
      // .then(res => this.props.history.push("/doctor")) // redirect to home page
      // .then(() => {
      //   axios.get(`/api/abttru/user/${this.props.location.params.userId}`)
      //     .then(res => {
      //       console.log(res.data);
      //       this.setState(res.data);
      //     })
      // })
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
                <Link to={`/doctor/${this.state.doctor_id}`}>
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
              <Link to={{ pathname: `/edit/${this.state._id}`, params: { data: this.state } }} className="btn btn-success">Edit</Link>&nbsp;
              <Button id={this.state._id} onClick={this.deletePatient.bind(this)} color="danger">Delete</Button>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default UserInfo;
