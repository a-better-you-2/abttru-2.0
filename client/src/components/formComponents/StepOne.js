import React from 'react';



const StepOne = (props) => (


    <div>
        <br />
        <br />
        <form>
            <label>
                First Name:{"  "}
                <input type="text" name="first_name"
                    placeholder="First Name"
                    value={props.first_name}
                    onChange={props.onChange}
                />
            </label>
            <br /><br />
            <label>
                Last Name:{"  "}
                <input type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={props.last_name}
                    onChange={props.onChange}
                />
            </label>
            <br /><br />
            <label>
                Email:{"  "}
                <input type="text"
                    name="email"
                    placeholder="Email"
                    value={props.email}
                    onChange={props.onChange} />
            </label>
            <br /><br />
            <label>
                Password:{"  "}
                <input type="password"
                    name="password"
                    placeholder="Password"
                    value={props.password}
                    onChange={props.onChange} />
            </label>
            <br /><br />
            <label>
                Link to photo:{"  "}
                <input type="text"
                    name="user_photo"
                    placeholder="Link to photo url..."
                    value={props.user_photo}
                    onChange={props.onChange} />
            </label>
            <br /><br />
        </form>
    </div>
)

export default StepOne;