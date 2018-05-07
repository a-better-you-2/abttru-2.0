import React, { Component } from 'react';

import Step1 from './StepOne';
import Step2 from './StepTwo';
import Step3 from './StepThree';
import Step4 from './StepFour';
import StepZilla from 'react-stepzilla';
import "./Dropdown.css";

class FullForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        sex: "",
        heightFoot: "",
        heightInch: "",
        weight: "",
        waistMeas: "",
        healthRiskFactor: "",
        dietRecommendation: "",
        systolic: "",
        diastolic: "",

    }

    onChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })

    }


    render() {

        // console.log(this.state);

        const steps =
            [
                {
                    name: 'General Patient Info', component: <Step1
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        password={this.state.password}
                        onChange={this.onChangeHandler}
                    />
                },
                {
                    name: 'Patient Statistics', component: <Step2
                        dateOfBirth={this.state.dateOfBirth}
                        sex={this.state.sex}
                        heightFoot={this.state.heightFoot}
                        heightInch={this.state.heightInch}
                        weight={this.state.weight}
                        waistMeas={this.state.waistMeas}
                        onChange={this.onChangeHandler}
                    />
                },
                {
                    name: 'Patient Health Factors', component: <Step3
                        systolic={this.state.systolic}
                        diastolic={this.state.diastolic}
                        healthRiskFactor={this.state.healthRiskFactor}
                        dietRecommendation={this.state.dietRecommendation}
                        onChange={this.onChangeHandler}
                    />
                },
                {
                    name: 'Confirm & Save', component: <Step4
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        password={this.state.password}
                        dateOfBirth={this.state.dateOfBirth}
                        sex={this.state.sex}
                        heightFoot={this.state.heightFoot}
                        heightInch={this.state.heightInch}
                        weight={this.state.weight}
                        waistMeas={this.state.waistMeas}
                        systolic={this.state.systolic}
                        diastolic={this.state.diastolic}
                        healthRiskFactor={this.state.healthRiskFactor}
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

                        startAtStep={window.sessionStorage.getItem('step') ? parseFloat(window.sessionStorage.getItem('step')) : 0}

                        prevBtnOnLastStep={true}

                        onStepChange={(step) => window.sessionStorage.setItem('step', step)}
                    />
                </div>

            </div>
        );
    }
}

export default FullForm;