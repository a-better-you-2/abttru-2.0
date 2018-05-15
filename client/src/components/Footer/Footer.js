import React from "react";
import "./Footer.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

// import { Link } from "react-router-dom";
// import { Row } from '../Grid';

// const linkStyle = {
//     color: "black",
//     boxShadow: "3px 3px 10px black"
// }
// const navStyle = {
//     backgroundColor: "#315659 !important;"
// }

const logoStyle = {
    width: "50px",
    height: "auto",
    margin: "2px"
  }

const Footer = () => (

    <footer className="footer">
        
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 about">
                        <a href="" className="navbar-left logo"><img src={require('./ABTTRU-LOGO.png')} style={logoStyle} alt="logo"/></a>
                        <p className="mission">Our application was created with a passion for food and connects you to recipes from all over the web,
                        and helps your dietitian convey their recommendations to you dynamically.
                        You pick your ingredients, we make a better you.</p>
                </div>
                {/* <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 "> */}
                    <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 blah">
                        <h5> Resources </h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href=""><i className="fa fa-angle-double-right"></i>Readme</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 blah">
                        <h5> Navigation </h5>
                        <ul className="list-unstyled quick-links">
                            <li><h4><a href=""><FontAwesomeIcon icon="user-md" className="icon"/> </a><a href=""><FontAwesomeIcon icon="user-circle" className="icon"/></a></h4></li>
                        </ul>
                    </div>

                {/* </div> */}
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                    <div className="hermanos" >
                    <h5>Connect with our team!</h5>
                        <a href="https://github.com/a-vargasmarte" target="_blank" rel="noopener noreferrer"><img className="bitmoji" src={require('./bitmojiAlberto.png')} alt="bitmoji of alberto" /></a>
                        <a href="https://github.com/JBohde" target="_blank" rel="noopener noreferrer"><img className="bitmoji" src={require('./bitmojiJoshua2.png')} alt="bitmoji of joshua" /></a>
                        <a href="https://github.com/DaveyStacks" target="_blank" rel="noopener noreferrer"><img className="bitmoji" src={require('./bitmojiDavey.png')} alt="bitmoji of davey" /></a>
                    </div>
                </div>
            </div>
            {/* <div className="copy">&copy; A Better You 2018</div> */}
    </footer>

);

export default Footer;