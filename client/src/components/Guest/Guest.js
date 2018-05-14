import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import ControlledCarousel from "../Carousel";
import "./Guest.css";

class Guest extends React.Component {

  componentDidMount() {
    console.log(this.props.match);
  }
  render() {
    return (
      <div className="container">
        <h4>Guest Page</h4>
        <h5>
          <Link to="/">
            <FontAwesomeIcon icon="home" /> Go Back Home
              </Link>
        </h5>
        <ControlledCarousel pathName={this.props.match.path} />
      </div>
    )
  }
}

export default Guest;