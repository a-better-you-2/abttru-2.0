import React, { Component } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { Container, Row, Col } from "../../Grid";
import Logo from '../../Home/Logo/Logo';
import axios from "axios";



class UserLogin extends Component {
    state = {
        diet_recommendation: "",
        diet_restriction: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        recipes: [],
        risk_factor: "",
        _id: ""
    }

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        // console.log(this.state);
    }

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        axios.post(`/api/abttru/userLogin`, this.state)
            .then(res => {

                if (res.data == null) {
                    this.props.history.push("/userLogin")
                }
                else {
                    let id = res.data._id;
                    this.setState({
                        _id: id
                    })
                    this.props.history.push(`/user/${id}`);
                }

                // console.log(this.state);
            })
    }


    render() {
        return (
            <div>
                <Container>
                    {/* <h1>USER LOGIN</h1> */}
                    <Logo />
                    <Row>
                        <Col size="xs-12 sm- 12 md-12 lg-12">
                            <form>
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
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            placeholder="Password"
                                        />
                                        <br />
                                    </Col>
                                    <Col size="xs-0 sm-0 md-4 lg-4">
                                        <Button className="input-lg login-button" onClick={this.handleFormSubmit} type="success">Login</Button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default UserLogin;