import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Doctor.css";
import DoctorJumbotron from '../DoctorJumbotron/DoctorJumbotron'

class Doctor extends React.Component {


  state = {
    doctor_id: this.props.match.params.id,
    patients: []
  };

  componentDidMount() {
    console.log(this.props);
    axios.get(`/api/abttru/doctor/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);
        this.setState(res.data);
        console.log(this.state);
      })
      .catch(err => console.log(err));

  }

  render() {
    const savedSelect = this.state.patients.map(patient => (
      <li id={patient._id} key={patient._id}>
        <div className="patient">
          <Link to={{ pathname: `/show/${patient._id}`, params: { data: this.state, doctor_id: this.props.match.params.id } }}>
            <img src={patient.user_photo} alt="alt"></img>
          </Link>
        </div>
        <div className="row info">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h4>{patient.first_name}{" "}{patient.last_name}</h4>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {patient.risk_factor}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {patient.diet_recommendation}
            </div>
          </div>
        </div>

      </li>
    ))
    return (
      
      <div>
        <DoctorJumbotron
          name={this.state.name}
          facility_name={this.state.facility_name}
          specialty={this.state.specialty}
          doctor_photo={this.state.doctor_photo}
          data={this.state}
          doctor_id={this.props.match.params.id}
        />
        <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="btn-group">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                View My Patients
              </button>
              <ul className="dropdown-menu scrollable-menu" role="menu">
                {savedSelect}
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
        </div>
      </div>
      </div>
    )
  }
}

export default Doctor;
