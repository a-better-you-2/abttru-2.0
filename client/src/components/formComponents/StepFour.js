import React from 'react';


const StepFour = (props) => (
    <div>
        <br />
        <br />
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
        <p>DOB: {props.dateOfBirth}</p>
        <p>Sex: {props.sex}</p>
        <p>Height: {props.heightFoot}' {props.heightInch}"</p>
        <p>Weight: {props.weight}</p>
        <p>Waist Measurement: {props.waistMeas}</p>
        <p>Blood Pressure -- Systolic: {props.systolic}</p>
        <p>Blood Pressure -- Diastolic: {props.diastolic}</p>
        <p>Health Risk Factor: {props.healthRiskFactor}</p>
        <p>Diet Recommendation: {props.dietRecommendation}</p>
    </div>
)

export default StepFour;