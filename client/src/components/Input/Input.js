import React from "react";


const linkStyle = {
    color: "black",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25)',
}

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Input = props => (
    <div className="form-group">
        <input className="form-control" type="text" {...props} style={linkStyle} />
    </div>
);

export default Input;
