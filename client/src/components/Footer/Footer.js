import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Row } from '../Grid';

const linkStyle = {
    color: "black",
    boxShadow: "3px 3px 10px black"
}
const navStyle = {
    backgroundColor: "#315659 !important;"


}

const Footer = () => (

    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-4">
                    <h5>Logo goes here</h5>
                    <p>Our application was created with a passion for food and connects you to recipes from all over the web,
                        and helps your dietitian convey their recommendations to you dynamically.
                        You pick your ingredients, we make a better you.</p>

                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <h5> Resources </h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>Readme</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <h5> Navigation </h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>For Dietitians</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>For Patients</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                    <h5>Connect with our team!</h5>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <a href="https://github.com/a-vargasmarte" target="_blank"><img className="bitmoji" src={require('./bitmojiAlberto.png')} alt="bitmoji of alberto" />Alberto Vargas</a>
                    </div>

                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <a href="https://github.com/JBohde" target="_blank"><img className="bitmoji" src={require('./bitmojiJoshua.png')} alt="bitmoji of joshua" /></a> Joshua Bohde
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <a href="https://github.com/DaveyStacks" target="_blank"><img className="bitmoji" src={require('./bitmojiDavey.png')} alt="bitmoji of davey" /></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <p>&copy; A Better You 2018</p>
            </div>
        </div>
    </footer>

);

export default Footer;