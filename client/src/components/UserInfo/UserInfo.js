import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Panel, Button } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./UserInfo.css";

class UserInfo extends React.Component {
  state = {
    patient_id: this.props.match.params.id,
    doctor_id: "",
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
        <Panel className="patient-panel"
          key={this.state._id}>
          <Panel>
            <h4>{this.state.name}</h4>
          </Panel>
          <Panel.Body>
            <div>
              <h5>
                <Link to={`/doctor/${this.state.doctor_id}`}>
                  <FontAwesomeIcon icon="list" /> My Patients
              </Link>
              </h5>


              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
              <h2>{this.state.first_name + " " + this.state.last_name}</h2>
              <img className="thumbnail user-thumb col-xs-12 col-sm-12 col-md-3 col-lg-3" src={this.state.user_photo} alt={this.state.first_name} />
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                    <h3>{this.state.email}</h3>
                    <h4>Risk Factor:{" "}{this.state.risk_factor}</h4>
                    <h4>Height:{" "}{this.state.heightFoot}'{this.state.heightInch}"</h4>
                    <h4>Weight:{" "}{this.state.weight}</h4>
                    <h4>Waist Measure:{" "}{this.state.waist}</h4>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                    <h4>DOB:{" "}{this.state.dob}</h4>
                    <h4>Diet Recommendation:{" "}{this.state.diet_recommendation}</h4>
                    <h4>Diet Restriction:{" "}{this.state.diet_restriction}</h4>
                    <h4>Systolic BP:{" "}{this.state.bp_systolic}</h4>
                    <h4>Diastolic BP:{" "}{this.state.bp_diastolic}</h4>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                  </div>
                </div>
              </div>


              <Link to={{ pathname: `/edit/${this.state._id}`, params: { data: this.state, doctor_id: this.state.doctor_id } }} className="btn btn-success">Edit</Link>&nbsp;
              <Button id={this.state._id} onClick={this.deletePatient.bind(this)} color="danger">Delete</Button>
            </div>
          </Panel.Body>
        </Panel>
      </div >
    )
  }
}

export default UserInfo;
