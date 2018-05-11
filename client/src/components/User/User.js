import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Jumbotron, Grid, Image, Tabs, Tab } from "react-bootstrap";
import { Table } from "react-bootstrap";
import axios from "axios";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./User.css"
import ControlledCarousel from "../Carousel";

class User extends React.Component {

  state = {
    data: [],
    user_id: this.props.match.params.id,
    recipe_id: "",
    first_name: "",
    last_name: "",
    password: "",
    risk_factor: "",
    diet_recommendation: "",
    diet_restriction: "",
    recipes: [],
    tabKey: 1
  };

  componentDidMount() {
    // axios.get(`/api/abttru/${this.props.match.params.id}`)
    axios.get(`/api/abttru/user/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        this.setState(res.data);
      })
      .catch(err => console.log(err))
  }

  fontAwesomeColor = () => {
    if (this.state.risk_factor === "high-cholesterol") {
      return "red";

    }
    else {
      return "black";
    }
  }

  // this.tabHandler = this.tabHandler.bind(this);

  // tabHandler = (tabKey) => {
  //   console.log(tabKey)
  //   this.setState({ tabKey })

  // }


  render() {
    return (
      <div>
        <h4>User Home Page</h4>
        <h1>{this.state.data}</h1>
        <h5>
          <Link to="/">
            <FontAwesomeIcon icon="home" /> Home
              </Link>
          <Link to={{ pathname: "/savedrecipes/", params: { userId: this.state.user_id } }} >
            <FontAwesomeIcon icon="utensils" /> Saved Recipes
              </Link>
        </h5>


        {/* <Grid> */}
        <Jumbotron>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Col xs={3} md={3} lg={3}>
                <Image src="https://thefinanser.com/wp-content/uploads/2015/12/6a01053620481c970b01b7c7617a9f970b-600wi.jpg" circle responsive />
                <h5>{this.state.first_name} {this.state.last_name}</h5>
              </Col>
              <Col xs={3} md={3} lg={3}>
                <FontAwesomeIcon icon="vial" size="4x" color={this.fontAwesomeColor()} />
                <h6>{this.state.risk_factor}</h6>
                <h7>Cholesterol Status:</h7>
                
              </Col>
              <Col xs={3} md={3} lg={3}>
                <FontAwesomeIcon icon="heartbeat" size="4x" color="green" />
                <h6>Normal</h6>
                <h6>Blood Pressure</h6>
               
              </Col>
              <Col xs={3} md={3} lg={3}>
                <FontAwesomeIcon icon="cube" size="4x" color="green" />
                <h6>Normal</h6>
                <h6>Blood Glucose</h6>
                
              </Col>
              <Col xs={3} md={3} lg={3}>
                <FontAwesomeIcon icon="tape" size="4x" color="green" />
                <h6>Normal</h6>
                <h6>Waist Circumference</h6>
                
              </Col>
              <Col xs={3} md={3} lg={3}>
                <FontAwesomeIcon icon="utensils" size="4x" color="blue" />
                <h6>{this.state.diet_recommendation}</h6>
                <h6>Diet Recommendation</h6>
                
              </Col>
              <Col xs={3} md={3} lg={3}>
                <FontAwesomeIcon icon="ban" size="4x" color="red" />
                <h6>{this.state.diet_restriction}</h6>
                <h6>Diet Restriction</h6>
                
              </Col>
            </Col>
          </Row>
        </Jumbotron>

        {/* <Tabs
          defaultActiveKey={this.state.tabKey}
          onSelect={this.handleSelect}
          id="controlled-tab-example"
        >
          <Tab eventKey={1} title="Tab 1">
            Tab 1 content
        </Tab>
          <Tab eventKey={2} title="Tab 2">
            Tab 2 content
        </Tab>
          <Tab eventKey={3} title="Tab 3">
            Tab 3 content
        </Tab>
        </Tabs> */}




        <ControlledCarousel userId={this.state.user_id} diet_label={this.state.diet_recommendation} health_label={this.state.diet_restriction} />
      </div >

    )
  }
}

export default User;