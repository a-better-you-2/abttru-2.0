import React from 'react';



const StepOne = (props) => (


    <div>
        <br />
        <br />
        <form className="form-wizard">

            <h2>First Name:</h2>

            <input className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" type="text" name="first_name"
                placeholder="First Name"
                value={props.first_name}
                onChange={props.onChange}
            />

            <br /><br />

            <h2>Last Name:</h2>

            <input className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" type="text"
                name="last_name"
                placeholder="Last Name"
                value={props.last_name}
                onChange={props.onChange}
            />

            <br /><br />

            <h2>Email:</h2>

            <input className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" type="text"
                name="email"
                placeholder="Email"
                value={props.email}
                onChange={props.onChange} />

            <br />

            <h2>Password:</h2>

            <input className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" type="password"
                name="password"
                placeholder="Password"
                value={props.password}
                onChange={props.onChange} />

            <br /><br />

            <h2>Link to photo:</h2>

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