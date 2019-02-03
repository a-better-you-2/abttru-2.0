
import React from "react";
import { Jumbotron } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";
import { Link } from "react-router-dom";
import './DoctorJumbotron.css';



const DoctorJumbotron = (props) => {

    return (
        <Jumbotron>
            <div className="row">
                <div className="col-xs-2 col-md-2 col-lg-2">
                </div>
                <div className="col-xs-10 col-md-2 col-lg-2 prof">
                    <img id="doctor_photo" src={props.doctor_photo} alt="doctor_photo"/>
                </div>
                <div className="col-xs-12 col-md-1 col-lg-1">
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6">
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <h2 className="about-doc">Dr.{' '}
                            {props.name}</h2>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <h3 className="about-doc">Specialty:<br />{' '}</h3>
                            <h5>{props.specialty}</h5>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <h3 className="about-doc">Facility Name:<br />{' '}</h3>
                            <h5>{props.facility_name}</h5>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <Link to={{
                            pathname: `/create/${props.doctor_id}`,
                            params: {
                                data: props.data,
                                doctor_id: props.doctor_id
                            }
                        }} > <button className="btn add-patient">
                                <FontAwesomeIcon icon="user-plus" /> Add Patient
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-xs-2 col-md-1 col-lg-1">
                </div>
            </div>
        </Jumbotron>


    )
}

export default DoctorJumbotron;