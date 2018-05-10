import React from "react";
import { Row, Col, Jumbotron, Grid, Image, Tabs, Tab } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";


class UserJumbotron extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user_id: this.props.userId,
            risk_factor: this.props.risk_factor,
            diet_recommendation: this.props.diet_label,
            diet_restriction: this.props.health_label,
            isUserPage: this.props.isUserPage
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

    render() {

        return (
            <div>
                <Jumbotron>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <Col xs={3} md={3} lg={3}>
                                <Image src="https://thefinanser.com/wp-content/uploads/2015/12/6a01053620481c970b01b7c7617a9f970b-600wi.jpg" circle responsive />
                                {/* <h5>{this.state.name}</h5> */}
                            </Col>
                            <Col xs={3} md={3} lg={3}>
                                <h5>Cholesterol Status</h5>
                                <FontAwesomeIcon icon="vial" size="4x" color={this.fontAwesomeColor()} />
                                <h5>{this.props.risk_factor}</h5>
                            </Col>
                            <Col xs={3} md={3} lg={3}>
                                <h5>Blood Pressure</h5>
                                <FontAwesomeIcon icon="heartbeat" size="4x" color="green" />
                                <h5>Normal</h5>
                            </Col>
                            <Col xs={3} md={3} lg={3}>
                                <h5>Blood Glucose</h5>
                                <FontAwesomeIcon icon="cube" size="4x" color="green" />
                                <h5>Normal</h5>
                            </Col>
                            <Col xs={3} md={3} lg={3}>
                                <h5>Waist Circumference</h5>
                                <FontAwesomeIcon icon="tape" size="4x" color="green" />
                                <h5>Normal</h5>
                            </Col>
                            <Col xs={3} md={3} lg={3}>
                                <h5>Diet Recommendation</h5>
                                <FontAwesomeIcon icon="utensils" size="4x" color="blue" />
                                <h5>{this.props.diet_label}</h5>
                            </Col>
                            <Col xs={3} md={3} lg={3}>
                                <h5>Diet Restriction</h5>
                                <FontAwesomeIcon icon="ban" size="4x" color="red" />
                                <h5>{this.props.health_label}</h5>
                            </Col>

                        </Col>
                    </Row>
                    {this.state.isUserPage ?
                        <Link to={{ pathname: "/savedrecipes/", params: { userId: this.state.user_id } }} >
                            <FontAwesomeIcon icon="utensils" /> Saved Recipes
                    </Link>
                        : <Link to={{ pathname: `/user/${this.state.user_id}` }}>
                            <FontAwesomeIcon icon="user-plus" /> Go Back To Profile
                    </Link>}
                </Jumbotron>



            </div>
        );

    }
}

export default UserJumbotron;