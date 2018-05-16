import React from 'react';



const StepOne = (props) => (


    <div className="steppy">
        <br />
        <br />
        <form className="form-wizard">

            <h3>First Name:</h3>

            <input className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" type="text" name="first_name"
                placeholder="First Name"
                value={props.first_name}
                onChange={props.onChange}
            />

            <br /><br />

            <h3>Last Name:</h3>

            <input className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" type="text"
                name="last_name"
                placeholder="Last Name"
                value={props.last_name}
                onChange={props.onChange}
            />

            <br /><br />

            <h3>Email:</h3>

            <input className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" type="text"
                name="email"
                placeholder="Email"
                value={props.email}
                onChange={props.onChange} />

            <br />

            <h3>Password:</h3>

            <input className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" type="password"
                name="password"
                placeholder="Password"
                value={props.password}
                onChange={props.onChange} />

            <br /><br />

            <h3>Link to photo:</h3>

            <input className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" type="text"
                name="user_photo"
                placeholder="Link to photo url..."
                value={props.user_photo}
                onChange={props.onChange} />

            <br /><br />
        </form>
    </div>
)

export default StepOne;