import React from "react";
import { Row, Col, Jumbotron, Grid, Image, Tabs, Tab } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";
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
            return "red";
        }
        else {
            return "";
        }
    }
    savedTabColor = () => {
        if (this.props.isUserPage) {
            return "";
        }
        else {
            return "red";
        }
    }

    render() {

        return (
            <Jumbotron className="jumbo">
                <div className="row">
                    <div className="col-xs-2 col-md-1 col-lg-1">
                    </div>
                    <div className="col-xs-10 col-md-1 col-lg-1">
                        <Image id="user_photo" src={this.props.user_photo} circle responsive />
                        {/* <h5>{this.state.name}</h5> */}
                    </div>
                    <div className="col-xs-12 col-md-1 col-lg-1">
                    </div>
                    <div className="col-xs-12 col-md-2 col-lg-2">
                        <div className="col-xs-6">
                            <h5>Cholesterol Status</h5>
                            <FontAwesomeIcon icon="vial" size="4x" color={this.fontAwesomeColor()} />
                            <h5>{this.props.risk_factor}</h5>
                        </div>
                        <div className="col-xs-6">
                            <h5>Blood Pressure</h5>
                            <FontAwesomeIcon icon="heartbeat" size="4x" color="green" />
                            <h5>Normal</h5>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-2 col-lg-2">
                        <div className="col-xs-6">
                            <h5>Blood Glucose</h5>
                            <FontAwesomeIcon icon="cube" size="4x" color="green" />
                            <h5>Normal</h5>
                        </div>
                        <div className="col-xs-6">
                            <h5>Waist Circumference</h5>
                            <FontAwesomeIcon icon="tape" size="4x" color="green" />
                            <h5>Normal</h5>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-2 col-lg-2">
                        <div className="col-xs-6">
                            <h5>Diet Recommendation</h5>
                            <FontAwesomeIcon icon="utensils" size="4x" color="blue" />
                            <h5>{this.props.diet_label}</h5>
                        </div>
                        <div className="col-xs-6">
                            <h5>Diet Restriction</h5>
                            <FontAwesomeIcon icon="ban" size="4x" color="red" />
                            <h5>{this.props.health_label}</h5>
                        </div>
                    </div>
                    <div className="col-xs-2 col-md-2 col-lg-2">
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-1 col-md-1 col-lg-1 col-xs-1 "></div>
                    <div className="col-xs-10 col-md-10 col-lg-10 col-xs-10 tabGroup">
                        <Link to={{ pathname: `/user/${this.props.userId}`, params: { id: this.props.userId } }}>
                            <button id="profileTab" style={{ backgroundColor: this.profileTabColor() }}><FontAwesomeIcon icon="user-plus" />New Search </button>
                        </Link>

                        <Link to={{ pathname: `/savedrecipes/${this.props.userId}`, params: { id: this.props.userId } }} >
                            <button id="savedTab" style={{ backgroundColor: this.savedTabColor() }}> <FontAwesomeIcon icon="utensils" /> Saved Recipes </button>
                        </Link>
                    </div>
                    <div className="col-xs-1 col-md-1 col-lg-1 col-xs-1 "></div>
                </div>
            </Jumbotron>
        );

    }
}

export default UserJumbotron;