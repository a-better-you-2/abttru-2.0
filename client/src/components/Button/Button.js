import React from "react";

const linkStyle = {
    color: "black",
    boxShadow: "3px 3px 10px black"
}


// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type = "default", className, children, onClick }) => (
    <button
        style={linkStyle}
        onClick={onClick}
        className={["btn btn-lg", `btn-${type}`, className].join(" ")}
    >
        {children}
    </button>
);

export default Button;
