import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Jumbotron, Grid, Image, Tabs, Tab } from "react-bootstrap";
import { Table } from "react-bootstrap";
import axios from "axios";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./User.css"
import ControlledCarousel from "../Carousel";

class User extends React.Component {
  constructor(props) {
    super(props)
  }
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
                <h5>{this.state.name}</h5>
              </Col>
              <Col xs={3} md={3} lg={3}>
                <h5>Cholesterol Status</h5>
                <FontAwesomeIcon icon="vial" size="4x" color={this.fontAwesomeColor()} />
                <h5>{this.state.risk_factor}</h5>
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
                <h5>{this.state.diet_recommendation}</h5>
              </Col>
              <Col xs={3} md={3} lg={3}>
                <h5>Diet Restriction</h5>
                <FontAwesomeIcon icon="ban" size="4x" color="red" />
                <h5>{this.state.diet_restriction}</h5>
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