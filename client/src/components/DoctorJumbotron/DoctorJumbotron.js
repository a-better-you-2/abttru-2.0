
import React from "react";
import { Jumbotron, Image } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import axios from "axios";
import { Link } from "react-router-dom";
import './DoctorJumbotron.css';



const DoctorJumbotron = (props) => {

    return (
        <Jumbotron className="jumbo">
            <div className="row">
                <div className="col-xs-2 col-md-2 col-lg-2">
                </div>
                <div className="col-xs-10 col-md-2 col-lg-2 prof">
                    <Image id="doctor_photo" src={props.doctor_photo} thumbnail />
                </div>
                <div className="col-xs-12 col-md-1 col-lg-1">
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6">
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <h2>Dr.{' '}
                            {/* <FontAwesomeIcon icon="vial" size="4x" color={fontAwesomeColor()} /> */}
                            {props.name}</h2>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <h3>Specialty:{' '}
                            {/* <FontAwesomeIcon icon="vial" size="4x" color={fontAwesomeColor()} /> */}
                            {props.specialty}</h3>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <h3>Facility Name:{' '}
                            {/* <FontAwesomeIcon icon="heartbeat" size="4x" color="green" /> */}
                            {props.facility_name}</h3>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <Link to={{
                            pathname: `/create/${props.doctor_id}`,
                            params: {
                                data: props.data,
                                doctor_id: props.doctor_id
                            }
                        }} > <button className="btn btn-success">
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