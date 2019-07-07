import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardBody, Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Step1 from '../formComponents/StepOne';
import Step2 from '../formComponents/StepTwo';
import Step3 from '../formComponents/StepThree';
import Step4 from '../formComponents/StepFour';
import StepZilla from 'react-stepzilla';
import '../formComponents/Dropdown.css';
import './CreateUser.css';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctor_id: this.props.match.params.id,
      user_id: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      user_photo: '',
      dob: '',
      sex: '',
      heightFoot: '',
      heightInch: '',
      weight: '',
      waist: '',
      bp_systolic: '',
      bp_diastolic: '',
      risk_factor: '',
      diet_recommendation: '',
      diet_restriction: '',
      isValid: true,
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.user_photo === '' && this.state.sex === 'Male') {
      this.setState({
        user_photo:
          'http://www.92tangle.com/wp-content/uploads/2017/09/generic-headshot-male.png',
      });
    } else if (this.state.user_photo === '' && this.state.sex === 'Female') {
      this.setState({
        user_photo: 'http://www.uttyler.edu/images/headshot-fem.png',
      });
    }
    if (this.state.first_name && this.state.password) {
      this.setState({
        isValid: true,
      });
      axios
        .post(`/api/abttru/doctor/${this.props.match.params.id}`, this.state)
        .then(res =>
          this.props.history.push(`/doctor/${this.props.match.params.id}`),
        ) // redirect to admin page
        .catch(err => console.log(err));
    } else {
      this.setState({
        isValid: false,
      });
    }
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
            dob={this.state.dob}
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
        <Card className="add-panel">
          <Card>
            <h3 className="add-patient">
              <strong>Add Patient</strong>
            </h3>
          </Card>
          <CardBody>
            <div>
              <h5 className="list">
                <Link
                  to={{ pathname: `/doctor/${this.props.match.params.id}` }}
                  id="doc-home"
                >
                  <FontAwesomeIcon icon="list" /> Doctor Home
                </Link>
              </h5>

              <div className="App">
                <div className="step-progress">
                  <StepZilla
                    steps={steps}
                    showNavigation={true}
                    showSteps={true}
                    stepsNavigation={true}
                    preventEnterSubmission={true}
                    nextTextOnFinalActionStep={'Review Data'}
                    hocValidationAppliedTo={[3]}
                    startAtStep={0}
                    prevBtnOnLastStep={true}
                    onStepChange={step =>
                      window.sessionStorage.setItem('step', step)
                    }
                  />
                </div>
              </div>
              <Button
                className="btn-lg submit"
                onClick={this.onSubmit}
                color="primary"
              >
                Submit
              </Button>
            </div>
          </CardBody>
        </Card>
        <br />
        {!this.state.isValid && (
          <Alert color="danger">Please fill the required form fields.</Alert>
        )}
      </div>
    );
  }
}

export default Create;
