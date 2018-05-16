import React from "react";
import abttruLogo from "./abttru-logo.png";
import "../Home.css";

const Logo = () => (
    <div id="img-div">
        <img src={abttruLogo} className="img-responsive" id="abttru-logo" alt="alt" />
    </div>
);

export default Logo;