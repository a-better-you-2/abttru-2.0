import React, { Component } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { Container, Row, Col } from "../../Grid";
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
        axios.getArticles(this.state.articleSearch, this.state.startDate, this.state.endDate)
            .then(res => this.setState({ articles: res.data.response.docs }))
            .catch(err => console.log(err));
        console.log(this.state.articles);
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <h1>HELLO DOCTOR!!</h1>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
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
            </div>
        );
    }
}

export default DoctorLogin;