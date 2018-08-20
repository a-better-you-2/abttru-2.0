import React from "react";
// import abttruLogo from "./abttru-logo.png";
import "../Home.css";

const Logo = () => (
    <div id="img-div">
        {/* <img src={abttruLogo} id="abttru-logo" alt="alt" /> */}
        <img src={require(`./abttru-logo2.png`)} id="abttru-logo" alt="logo"/>
    </div>
);

export default Logo;