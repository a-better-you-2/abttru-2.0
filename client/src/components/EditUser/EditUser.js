import React from 'react';
// import { Link } from "react-router-dom";
import axios from 'axios';
import { Card, Button } from 'reactstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Step1 from '../formComponents/StepOne';
import Step2 from '../formComponents/StepTwo';
import Step3 from '../formComponents/StepThree';
import Step4 from '../formComponents/StepFour';
import StepZilla from 'react-stepzilla';

class EditUser extends React.Component {
  state = {};

  componentDidMount() {
    axios
      .get(`/api/abttru/user/${this.props.match.params.id}`)
      .then(res => {
        this.setState(res.data);
      })
      .catch(err => console.log(err));
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    axios
      .put(`/api/abttru/user/${this.props.match.params.id}`, this.state)
      .then(res =>
        this.props.history.push({
          pathname: `/show/${this.state._id}`,
          params: { data: this.state, doctor_id: this.state.doctor_id },
        }),
      ) // redirect back to the show page
      .catch(err => console.log(err));
  };

  render() {
    const steps = [
      {
        name: 'General Patient Info',
        component: (
          <Step1
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            email={this.state.email}
            password={this.state.password}
            user_photo={this.state.user_photo}
            onChange={this.onChange}
          />
        ),
      },
      {
        name: 'Patient Statistics',
        component: (
          <Step2
            pathName={this.props.match.path}
            sex={this.state.sex}
            heightFoot={this.state.heightFoot}
            heightInch={this.state.heightInch}
            weight={this.state.weight}
            waist={this.state.waist}
            onChange={this.onChange}
          />
        ),
      },
      {
        name: 'Patient Health Factors',
        component: (
          <Step3
            bp_systolic={this.state.bp_systolic}
            bp_diastolic={this.state.bp_diastolic}
            risk_factor={this.state.risk_factor}
            diet_recommendation={this.state.diet_recommendation}
            diet_restriction={this.state.diet_restriction}
            onChange={this.onChange}
          />
        ),
      },
      {
        name: 'Confirm & Save',
        component: (
          <Step4
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            email={this.state.email}
            password={this.state.password}
            user_photo={this.state.user_photo}
            dob={this.state.dob}
            sex={this.state.sex}
            heightFoot={this.state.heightFoot}
            heightInch={this.state.heightInch}
            weight={this.state.weight}
            waist={this.state.waist}
            bp_systolic={this.state.bp_systolic}
            bp_diastolic={this.state.bp_diastolic}
            risk_factor={this.state.risk_factor}
            diet_recommendation={this.state.diet_recommendation}
            diet_restriction={this.state.diet_restriction}
          />
        ),
      },
    ];

    return (
      <div className="container">
        <Card className="edit-patient">
          <div className="App">
            <div className="step-progress">
              <StepZilla
                steps={steps}
                showNavigation={true}
                showSteps={true}
                stepsNavigation={true}
                preventEnterSubmission={true}
                nextTextOnFinalActionStep={'Review'}
                hocValidationAppliedTo={[3]}
                startAtStep={0}
                prevBtnOnLastStep={true}
                onStepChange={step =>
                  window.sessionStorage.setItem('step', step)
                }
              />
              <Button
                className="btn-lg submit"
                onClick={this.onSubmit}
                color="primary"
              >
                Submit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default EditUser;
