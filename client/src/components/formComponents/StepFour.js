import React from 'react';
import Moment from 'moment';


const StepFour = (props) => (
        <div className="steppy">
                <br />
                <br />
                <h5 className="review-info">First Name:{" "}{props.first_name}</h5>
                <h5 className="review-info">Last Name:{" "}{props.last_name}</h5>
                <h5 className="review-info">Email:{" "}{props.email}</h5>
                <h5 className="review-info">Password:{" "} ****************************</h5>
                <h5 className="review-info">IMG:{" "} {props.user_photo}</h5>
                <h5 className="review-info">DOB: {" "}{Moment(props.dob).format('MMMM Do YYYY')}</h5>
                <h5 className="review-info">Sex:{" "}{props.sex}</h5>
                <h5 className="review-info">Height: {" "}{props.heightFoot}' {props.heightInch}"</h5>
                <h5 className="review-info">Weight:{" "}{props.weight}</h5>
                <div><h5 className="review-info">Waist Measurement:{" "} {props.waist}</h5></div>
                <h5 className="review-info">BP -- Systolic:{" "} {props.bp_systolic}</h5>
                <h5 className="review-info">BP -- Diastolic: {" "}{props.bp_diastolic}</h5>
                <h5 className="review-info">Health Risk Factor: {" "}{props.risk_factor}</h5>
                <h5 className="review-info">Diet Recommendation: {" "}{props.diet_recommendation}</h5>
                <h5 className="review-info"> Diet restriction: {" "}{props.diet_restriction}</h5>
        </div>
)

export default StepFour;