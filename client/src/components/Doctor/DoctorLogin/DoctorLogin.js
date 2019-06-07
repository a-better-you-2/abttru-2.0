import React, { Component } from "react";
import Input from "../../Input/Input";
import { Container, Row, Col } from "../../Grid";
import Logo from '../../Home/Logo/Logo';
import axios from "axios";



class DoctorLogin extends Component {
    state = {
        email: [],
        password: [],
        doctor_id: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        axios.post(`/api/abttru/doctorLogin`, this.state)
            .then(res => {

                if (res.data == null) {
                    this.props.history.push("/doctorLogin")
                }
                else {
                    let id = res.data._id;
                    this.setState({
                        _id: id
                    })
                    this.props.history.push(`/doctor/${id}`);
                }

                console.log(this.state);
            })
    };

    render() {
        return (
            <div>
                <Container>
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                        <Logo className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    </div>
                    <Row>
                        {/* <Col size="xs-12 sm- 12 md-12 lg-12"> */}
                        <form className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Row>
                                <Col size="xs-0 sm-0 md-4 lg-4"></Col>
                                <Col size="xs-12 sm-12 md-4 lg-4">
                                    <Input
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        placeholder="Enter Email"
                                    />
                                    <br />
                                    <Input
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        placeholder="Password"
                                    />
                                    <br />
                                    <button onClick={this.handleFormSubmit} className="input-lg login">Login</button>
                                </Col>
                                <Col size="xs-0 sm-0 md-4 lg-4"></Col>
                            </Row>
                        </form>
                        {/* </Col> */}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DoctorLogin;