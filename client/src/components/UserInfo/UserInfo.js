import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from 'moment';
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

  deletePatient = (event) => {
    const id = event.target.id;
    console.log(id);
    axios.delete(`/api/abttru/user/${id}`)
      .then(res => this.props.history.push(`/doctor/${this.state.doctor_id}`))
      .catch(err => console.log(err));
  }

  render() {
    Moment.locale('en');
    var dob = this.state.dob;


    return (
      <div className="container">
        <Card className="patient-card" key={this.state._id}>
            <h4>{this.state.name}</h4>
          <CardBody>
            <div className="user-info">
              <h5 className="patients">
                <Link to={`/doctor/${this.state.doctor_id}`} className="patients" >
                  <FontAwesomeIcon icon="list" /> My Patients
              </Link>
              </h5>

              <h2 className="patients">{this.state.first_name + " " + this.state.last_name}</h2>
              <div className="row">
              <img id="user-thumb" src={this.state.user_photo} alt={this.state.first_name} />
              </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <h5 className="health-stats">Email:{" "}</h5><span> {this.state.email}</span><br />
                  <h5 className="health-stats">Risk Factor:{" "}</h5><span>{this.state.risk_factor}</span><br />
                  <h5 className="health-stats">Height:{" "}</h5><span>{this.state.heightFoot}'{this.state.heightInch}"</span><br />
                  <h5 className="health-stats">Weight:{" "}</h5><span>{this.state.weight}</span><br />
                  <h5 className="health-stats">Waist Measure:{" "}</h5><span>{this.state.waist}</span><br />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h5 className="health-stats">DOB:{" "}</h5><span>{Moment(dob).add(1, 'days').format('MMMM Do YYYY')}</span><br />
                    <h5 className="health-stats">Diet Recommendation:{" "}</h5><span>{this.state.diet_recommendation}</span><br />
                    <h5 className="health-stats">Diet Restriction:{" "}</h5><span>{this.state.diet_restriction}</span><br />
                    <h5 className="health-stats">Systolic BP:{" "}</h5><span>{this.state.bp_systolic}</span><br />
                    <h5 className="health-stats">Diastolic BP:{" "}</h5><span>{this.state.bp_diastolic}</span>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-9"></div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Button id={this.state._id} onClick={this.deletePatient.bind(this)} className="btn-lg delete" color="primary">Delete</Button>
                <Link to={{ pathname: `/edit/${this.state._id}`, params: { data: this.state, doctor_id: this.state.doctor_id } }} ><Button className="btn-lg btn-primary" color="primary">Edit Info&nbsp;</Button></Link>
              </div>
              </div>
          </CardBody>
        </Card>
      </div >
    )
  }
}

export default UserInfo;
