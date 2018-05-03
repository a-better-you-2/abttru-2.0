import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class Guest extends React.Component {
  render() {
    return (
        <div>
            <h4>Guest Page</h4>
            <h5>
              <Link to="/">
                <FontAwesomeIcon icon="home" /> Go Back Home
              </Link>
            </h5>
        </div>
    )
  }
}

export default Guest;