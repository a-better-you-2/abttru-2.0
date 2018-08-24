import React from "react";
import { Jumbotron} from "reactstrap";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import axios from "axios";
import { Link } from "react-router-dom";
import cholesterolIcon from './cholesterol.png';
import glucoseIcon from './glucometer.png';
import restrictionIcon from './icons8-no-entry-512.png';
import pressureIcon from './pressure.png';
import recipeIcon from './recipe.png';
import tapeIcon from './tape.png';
import dietIcon from './diet.png';
import searchIcon from './search.png';
import './UserJumbotron.css';


class UserJumbotron extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user_id: this.props.userId,
            risk_factor: this.props.risk_factor,
            diet_recommendation: this.props.diet_label,
            diet_restriction: this.props.health_label,
            isUserPage: this.props.isUserPage,
            savedTab: "",
            profileTab: ""
        };
    }

    fontAwesomeColor = () => {
        if (this.props.risk_factor === "high-cholesterol") {
            return "red";

        }
        else {
            return "black";
        }
    }

    profileTabColor = () => {
        if (this.props.isUserPage) {
            return "#2C3E50";
        }
        else {
            return "#F3F0DD";
        }
    }
    savedTabColor = () => {
        if (this.props.isUserPage) {
            return "#F3F0DD";
        }
        else {
            return "#2C3E50";
        }
    }

    render() {

        return (
            <Jumbotron className="jumbo">
                <div className="row patient-profile">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 prof">
                        <img id="user_photo" src={this.props.user_photo} alt="user_photo" />
                    </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
                                <img src={cholesterolIcon} alt="cholesterol icon" className="health-icon" />
                                <span className="health_stats"> {this.props.risk_factor}</span>
                            </div>
                            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
                                <img src={pressureIcon} alt="bp icon" className="health-icon" />
                                <span className="health_stats"> Normal</span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
                                <img src={glucoseIcon} alt="glucose icon" className="health-icon" />
                                <span className="health_stats"> Normal</span>
                            </div>
                            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
                                <img src={tapeIcon} alt="tape icon" className="health-icon" />
                                <span className="health_stats"> Normal</span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
                                <img src={dietIcon} alt="diet icon" className="health-icon" />
                                <span className="health_stats"> {this.props.diet_label}</span>
                            </div>
                            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
                                <img src={restrictionIcon} alt="restriction icon" className="health-icon" />
                                <span className="health_stats"> {this.props.health_label}</span>
                            </div>
                        </div>
                </div>
                <div className="row search-saved">
                    <div className="col-0 col-md-0 col-lg-1 col-1 "></div>
                    <div className="col-12 col-md-12 col-lg-10 col-10 tabGroup">
                        <Link to={{ pathname: `/user/${this.props.userId}`, params: { id: this.props.userId } }}>
                            <button id="profileTab" style={{ backgroundColor: this.profileTabColor() }}><p style={{ color: this.savedTabColor() }} id="tabs"><img src={searchIcon} alt="search icon" className="tab-icon" />New Search  </p></button>
                        </Link>

                        <Link to={{ pathname: `/savedrecipes/${this.props.userId}`, params: { id: this.props.userId } }} >
                            <button id="savedTab" style={{ backgroundColor: this.savedTabColor() }}><p style={{ color: this.profileTabColor() }} id="tabs"><img src={recipeIcon} alt="search icon" className="tab-icon" />  Saved Recipes</p></button>
                        </Link>
                    </div>
                    <div className="col-0 col-md-0 col-lg-1 col-sm-1"></div>
                </div>
            </Jumbotron>
        );

    }
}

export default UserJumbotron;