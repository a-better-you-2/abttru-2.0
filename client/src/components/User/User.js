import React from 'react';
import axios from 'axios';
import './User.css';
import UserJumbotron from '../UserJumbotron/';
import ControlledCarousel from '../Carousel';

class User extends React.Component {
  state = {
    data: [],
    user_id: this.props.match.params.id,
    recipe_id: '',
    first_name: '',
    last_name: '',
    password: '',
    user_photo: '',
    risk_factor: '',
    diet_recommendation: '',
    diet_restriction: '',
    recipes: [],
    passwordHasBeenUpdated: '',
    tabKey: 1,
    isUserPage: true,
  };

  componentDidMount() {
    axios
      .get(`/api/abttru/user/${this.props.match.params.id}`)
      .then(res => {
        this.setState(res.data);
        if (res.data.diet_restriction === '') {
          this.setState({ diet_restriction: 'None' });
        }
      })
      .catch(err => console.log(err));
  }

  fontAwesomeColor = () =>
    this.state.risk_factor === 'high-cholesterol' ? 'red' : 'black';

  render() {
    return (
      <div className="jumbo-div">
        <UserJumbotron
          key={this.state.user_id}
          userId={this.props.match.params.id}
          user_photo={this.state.user_photo}
          risk_factor={this.state.risk_factor}
          diet_label={this.state.diet_recommendation}
          health_label={this.state.diet_restriction}
          isUserPage={this.state.isUserPage}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
        />

        <ControlledCarousel
          userId={this.state.user_id}
          captionText={''}
          diet_label={this.state.diet_recommendation}
          health_label={this.state.diet_restriction}
        />
      </div>
    );
  }
}

export default User;
