import React, { Component } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { Container, Row, Col } from "../../Grid";
import axios from "axios";



class UserLogin extends Component {
    state = {
        diet_recommendation: "",
        diet_restriction: "",
        name: "",
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
        console.log(this.state);
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

                console.log(this.state);
            })
    }


    render() {
        return (
            <div>
                <Container>
                    <h1>USER LOG-EEEEN</h1>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input
                                                name="name"
                                                value={this.state.name}
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
                                        <Col size="xs-3 sm-2">
                                            <Button
                                                onClick={this.handleFormSubmit}
                                                type="success"
                                                className="input-lg"
                                            >
                                                Login
                          </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default UserLogin;