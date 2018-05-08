import React from 'react';


const StepFour = (props) => (
    <div>
        <br />
        <br />
        <p>First Name: {props.first_name}</p>
        <p>Last Name: {props.last_name}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
        <p>DOB: {props.dob}</p>
        <p>Sex: {props.sex}</p>
        <p>Height: {props.heightFoot}' {props.heightInch}"</p>
        <p>Weight: {props.weight}</p>
        <p>Waist Measurement: {props.waist}</p>
        <p>Blood Pressure -- Systolic: {props.bp_systolic}</p>
        <p>Blood Pressure -- Diastolic: {props.bp_diastolic}</p>
        <p>Health Risk Factor: {props.risk_factor}</p>
        <p>Diet Recommendation: {props.diet_recommendation}</p>
        <p>Diet restriction: {props.diet_restriction}</p>
    </div>
)

export default StepFour;