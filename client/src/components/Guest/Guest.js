import React from "react";
import ControlledCarousel from "../Carousel";
import Logo from '../Home/Logo/Logo';
import "./Guest.css";

class Guest extends React.Component {

  componentDidMount() {
    console.log(this.props.match);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
            <Logo className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
        </div>
        <h5>
        </h5>
        <ControlledCarousel pathName={this.props.match.path} />
      </div>
    )
  }
}

export default Guest;