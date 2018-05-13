
import React from "react";
import { Row, Col, Jumbotron, Grid, Image, Tabs, Tab } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";



const DoctorJumbotron = (props) => {

    return (
        <Jumbotron className="jumbo">
            <div className="row">
                <div className="col-xs-2 col-md-1 col-lg-1">
                </div>
                <div className="col-xs-10 col-md-3 col-lg-3">
                    <Image id="doctor_photo" src={props.doctor_photo} thumbnail responsive />
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
                </div>
                <div className="col-xs-2 col-md-1 col-lg-1">
                </div>
            </div>
        </Jumbotron>


    )
}

export default DoctorJumbotron;