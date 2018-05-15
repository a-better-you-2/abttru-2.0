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
        // event.preventDefault();
        // axios.getArticles(this.state.articleSearch, this.state.startDate, this.state.endDate)
        //     .then(res => this.setState({ articles: res.data.response.docs }))
        //     .catch(err => console.log(err));
        // console.log(this.state.articles);

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
                    <Row>
                        <Col size="xs-12 sm- 12 md-12 lg-12">
                            <form>
                                <h1>HELLO DOCTOR!!</h1>
                                
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
                                            <Button onClick={this.handleFormSubmit} type="success" className="input-lg login">Login</Button>
                                        </Col>
                                    </Row>
        
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DoctorLogin;