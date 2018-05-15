import React from "react";
// import { Link } from "react-router-dom";
// import { Row, Col, Jumbotron, Grid, Image, Tabs, Tab } from "react-bootstrap";
import axios from "axios";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./User.css"
import UserJumbotron from '../UserJumbotron/'
import ControlledCarousel from "../Carousel";

class User extends React.Component {

  state = {
    data: [],
    user_id: this.props.match.params.id,
    recipe_id: "",
    first_name: "",
    last_name: "",
    password: "",
    user_photo: "",
    risk_factor: "",
    diet_recommendation: "",
    diet_restriction: "",
    recipes: [],
    passwordHasBeenUpdated: "",
    tabKey: 1,
    isUserPage: true
  };

  componentDidMount() {
    console.log(this.props);
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


  render() {
    return (
      <div className="jumbo-div">
        <UserJumbotron
          // className={"col-md-12"}
          userId={this.props.match.params.id}
          user_photo={this.state.user_photo}
          risk_factor={this.state.risk_factor}
          diet_label={this.state.diet_recommendation}
          health_label={this.state.diet_restriction}
          isUserPage={this.state.isUserPage}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
        />


        <ControlledCarousel userId={this.state.user_id} diet_label={this.state.diet_recommendation} health_label={this.state.diet_restriction} />
      </div>

    )
  }
}

export default User;