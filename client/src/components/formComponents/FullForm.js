import React, { Component } from 'react';
import { Panel, Button, Form, FormGroup, FormControl, Label, Alert } from "react-bootstrap";
import axios from "axios";
import Step1 from './StepOne';
import Step2 from './StepTwo';
import Step3 from './StepThree';
import Step4 from './StepFour';
import StepZilla from 'react-stepzilla';
import "./Dropdown.css";
import "./FullForm.css";

class FullForm extends Component {

    state = {
        doctor_id: this.props.location.params.data.doctor_id,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        dob: "",
        sex: "",
        heightFoot: "",
        heightInch: "",
        weight: "",
        waist: "",
        risk_factor: "",
        dietRecommendation: "",
        bp_systolic: "",
        bp_diastolic: "",
        isValid: true

    }

    onChangeHandler = e => {
        console.log(this.props);
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })

    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log(this.props);
        console.log(this.state);
        if (this.state.email && this.state.password) {

            this.setState({
                isValid: true
            });
            console.log(this.state);
            axios.post(`/api/abttru/doctor/${this.props.location.params.data.doctor_id}`, this.state)
                .then(res => {
                    console.log(res);
                    this.props.history.push(`/doctor/${this.props.location.params.data.doctor_id}`)
                }) // redirect to admin page
                .catch(err => console.log(err));
        }
        else {
            this.setState({
                isValid: false
            });
        }
    }


    render() {

        // console.log(this.state);

        const steps =
            [
                {
                    name: 'General Patient Info', component: <Step1
                        first_name={this.state.first_name}
                        last_name={this.state.last_name}
                        email={this.state.email}
                        password={this.state.password}
                        onChange={this.onChangeHandler}
                    />
                },
                {
                    name: 'Patient Statistics', component: <Step2
                        dob={this.state.dob}
                        sex={this.state.sex}
                        heightFoot={this.state.heightFoot}
                        heightInch={this.state.heightInch}
                        weight={this.state.weight}
                        waist={this.state.waist}
                        onChange={this.onChangeHandler}
                    />
                },
                {
                    name: 'Patient Health Factors', component: <Step3
                        bp_systolic={this.state.bp_systolic}
                        bp_diastolic={this.state.bp_diastolic}
                        risk_factor={this.state.risk_factor}
                        dietRecommendation={this.state.dietRecommendation}
                        onChange={this.onChangeHandler}
                    />
                },
                {
                    name: 'Confirm & Save', component: <Step4
                        first_name={this.state.first_name}
                        last_name={this.state.last_name}
                        email={this.state.email}
                        password={this.state.password}
                        dob={this.state.dob}
                        sex={this.state.sex}
                        heightFoot={this.state.heightFoot}
                        heightInch={this.state.heightInch}
                        weight={this.state.weight}
                        waist={this.state.waist}
                        bp_systolic={this.state.bp_systolic}
                        bp_diastolic={this.state.bp_diastolic}
                        risk_factor={this.state.risk_factor}
                        dietRecommendation={this.state.dietRecommendation}
                    />
                }
            ]

        return (
            <div className="App">

                <div className='step-progress'>
                    <StepZilla

                        steps={steps}

                        showNavigation={true}

                        showSteps={true}

                        stepsNavigation={true}

                        preventEnterSubmission={true}

                        nextTextOnFinalActionStep={"Click to Review Data"}

                        hocValidationAppliedTo={[3]}

                        startAtStep={0}

                        prevBtnOnLastStep={true}

                        onStepChange={(step) => window.sessionStorage.setItem('step', step)}
                    />
                </div>
                <Button onClick={this.onSubmit.bind(this)} color="primary">Submit</Button>

            </div>
        );
    }
}

export default FullForm;