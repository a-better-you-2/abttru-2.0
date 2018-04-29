import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class Recipe extends React.Component {
  render() {
    return (
        <div>
            <h4>Recipe Page</h4>
            <h5>
              <Link to="/">
                <FontAwesomeIcon icon="user-plus" /> Go Back Home
              </Link>
              <Link to="/user">
                <FontAwesomeIcon icon="user-plus" /> Go Back To User
              </Link>
            </h5>
        </div>
    )
  }
}

export default Recipe;