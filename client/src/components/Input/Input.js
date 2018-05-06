import React from "react";


const linkStyle = {
    color: "black",
    boxShadow: "5px 5px 10px black"
}

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Input = props => (
    <div className="input-group input-group-lg">
        <input className="form-control" type="text" {...props} style={linkStyle} />
    </div>
);

export default Input;
