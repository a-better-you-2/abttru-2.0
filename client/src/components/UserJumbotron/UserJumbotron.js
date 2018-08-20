import React from "react";
import { Jumbotron, Image } from "react-bootstrap";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import axios from "axios";
import { Link } from "react-router-dom";
import cholesterolIcon from './cholesterol.png';
import glucoseIcon from './glucometer.png';
import restrictionIcon from './icons8-no-entry-512.png';
import pressureIcon from './pressure.png';
import recipeIcon from './recipe.png';
import tapeIcon from './tape.png';
import dietIcon from './diet.png';
import searchIcon from './search.png';
import './UserJumbotron.css';


class UserJumbotron extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user_id: this.props.userId,
            risk_factor: this.props.risk_factor,
            diet_recommendation: this.props.diet_label,
            diet_restriction: this.props.health_label,
            isUserPage: this.props.isUserPage,
            savedTab: "",
            profileTab: ""
        };
    }

    fontAwesomeColor = () => {
        if (this.props.risk_factor === "high-cholesterol") {
            return "red";

        }
        else {
            return "black";
        }
    }

    profileTabColor = () => {
        if (this.props.isUserPage) {
            return "#2C3E50";
        }
        else {
            return "#F3F0DD";
        }
    }
    savedTabColor = () => {
        if (this.props.isUserPage) {
            return "#F3F0DD";
        }
        else {
            return "#2C3E50";
        }
    }

    render() {

        return (
            <Jumbotron className="jumbo">
                <div className="row">
                    <div className="col-xs-2 col-md- col-lg-">
                    </div>
                    <div className="col-xs-6 col-md-1 col-lg-1 prof">
                        <Image id="user_photo" src={this.props.user_photo} thumbnail />
                    </div>
                    <div className="col-xs-12 col-md-1 col-lg-1">
                    </div>
                    <div className="col-xs-12 col-md-2 col-lg-2">
                        <div className="col-xs-6">
                            <img src={cholesterolIcon} alt="cholesterol icon" className="health-icon" />
                            {/* <FontAwesomeIcon icon="vial" size="4x" color={this.fontAwesomeColor()} /> */}
                            {/* <h5>Cholesterol Status</h5> */}
                            <h5>{this.props.risk_factor}</h5>
                        </div>
                        <div className="col-xs-6">
                            <img src={pressureIcon} alt="bp icon" className="health-icon" />
                            {/* <FontAwesomeIcon icon="heartbeat" size="4x" color="green" /> */}
                            {/* <h5>Blood Pressure</h5> */}
                            <h5>Normal</h5>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-2 col-lg-2">
                        <div className="col-xs-6">
                            <img src={glucoseIcon} alt="glucose icon" className="health-icon" />
                            {/* <FontAwesomeIcon icon="cube" size="4x" color="green" /> */}
                            {/* <h5>Blood Glucose</h5> */}
                            <h5>Normal</h5>
                        </div>
                        <div className="col-xs-6">
                            <img src={tapeIcon} alt="tape icon" className="health-icon" />
                            {/* <FontAwesomeIcon icon="tape" size="4x" color="green" /> */}
                            {/* <h5>Waist Circumference</h5> */}
                            <h5>Normal</h5>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-2 col-lg-2">
                        <div className="col-xs-6">
                            <img src={dietIcon} alt="diet icon" className="health-icon" />
                            {/* <FontAwesomeIcon icon="utensils" size="4x" color="blue" /> */}
                            {/* <h5>Diet Recommendation</h5> */}
                            <h5>{this.props.diet_label}</h5>
                        </div>
                        <div className="col-xs-6">
                            <img src={restrictionIcon} alt="restriction icon" className="health-icon" />
                            {/* <FontAwesomeIcon icon="ban" size="4x" color="red" /> */}
                            {/* <h5>Diet Restriction</h5> */}
                            <h5>{this.props.health_label}</h5>
                        </div>
                    </div>
                    <div className="col-xs-1 col-md-1 col-lg-1">
                    </div>
                </div>
                <div className="row search-saved">
                    <div className="col-xs-1 col-md-1 col-lg-1 col-xs-1 "></div>
                    <div className="col-xs-10 col-md-10 col-lg-10 col-xs-10 tabGroup">
                        <Link to={{ pathname: `/user/${this.props.userId}`, params: { id: this.props.userId } }}>
                            <button id="profileTab" style={{ backgroundColor: this.profileTabColor() }}><p style={{ color: this.savedTabColor() }} id="tabs"><img src={searchIcon} alt="search icon" className="tab-icon" />New Search  </p></button>
                        </Link>

                        <Link to={{ pathname: `/savedrecipes/${this.props.userId}`, params: { id: this.props.userId } }} >
                            <button id="savedTab" style={{ backgroundColor: this.savedTabColor() }}><p style={{ color: this.profileTabColor() }} id="tabs"><img src={recipeIcon} alt="search icon" className="tab-icon" />  Saved Recipes</p></button>
                        </Link>
                    </div>
                    <div className="col-xs-1 col-md-1 col-lg-1 col-sm-1"></div>
                </div>
            </Jumbotron>
        );

    }
}

export default UserJumbotron;