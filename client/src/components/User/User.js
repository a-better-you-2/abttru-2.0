import React from "react";
import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";
import axios from "axios";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./User.css"
import ControlledCarousel from "../Carousel";

class User extends React.Component {
  state = {
    data: [],
    user_id: "5aeccb14e21ebe39bce2f568",
    recipe_id: "",
    name: "",
    password: "",
    risk_factor: "",
    diet_recommendation: "",
    diet_restriction: "",
    recipes: [],
  };

  componentDidMount() {
    // axios.get(`/api/abttru/${this.props.match.params.id}`)
    axios.get(`/api/abttru/${"5aeccb14e21ebe39bce2f568"}`)
      .then(res => {
        console.log(res.data);
        this.setState(res.data);
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="container">
        <h4>User Home Page</h4>
        <h1>{this.state.data}</h1>
        <h5>
          <Link to="/">
            <FontAwesomeIcon icon="home" /> Home
              </Link>
          <Link to="/savedrecipes">
            <FontAwesomeIcon icon="utensils" /> Saved Recipes
              </Link>
        </h5>
        <Table striped responsive hover >
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Risk Factor</th>
              <th>Diet Recommendation</th>
              <th>Diet Restrictions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="id"><Link to={`/user`}>{this.state._id}</Link></td>
              <td className="name"><FontAwesomeIcon icon="user-circle" />{this.state.name}</td>
              <td className="risk_factor"><FontAwesomeIcon icon="heartbeat" /> {this.state.risk_factor}</td>
              <td className="diet_recommendation"><FontAwesomeIcon icon="utensils" /> {this.state.diet_recommendation}</td>
              <td className="diet_restriction"><FontAwesomeIcon icon="allergies" />{this.state.diet_restriction}</td>
            </tr>
          </tbody>
        </Table>
        {<ControlledCarousel />}

      </div>
    )
  }
}

export default User;