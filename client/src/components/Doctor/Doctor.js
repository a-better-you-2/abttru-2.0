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
      <li className="patient" id={patient._id} key={patient._id}>
        {/* <div className="patient"> */}
          <Link to={{ pathname: `/show/${patient._id}`, params: { data: this.state, doctor_id: this.props.match.params.id } }}>
            <img className="img-responsive patient-photo" src={patient.user_photo} alt="alt"></img>
          </Link>
        {/* </div> */}
        <div className="info">
            <h4 className="first-last">{patient.first_name}{" "}{patient.last_name}</h4>
            <h6 className="health"><strong>Risk Factor: </strong>{patient.risk_factor}</h6>
            <br/>
            <h6 className="health"><strong>Diet Recommendation: </strong>{patient.diet_recommendation}</h6>

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
        <div className="main-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                View My Patients
              </button>
              <ul className="dropdown-menu scrollable-menu" role="menu">
                {savedSelect}
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
        </div>
      </div>
      </div>
    )
  }
}

export default Doctor;
