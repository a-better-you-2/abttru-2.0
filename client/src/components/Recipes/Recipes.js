import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Container from "../User/Coverflow";


class Recipe extends React.Component {
      
  // componentDidMount() {
  //   // axios.get(`/api/abttru/${this.props.match.params.id}`)
  //   axios.get(`/api/abttru/${"5adf6fc3c8493f472c1f9ed3"}`)
  //   .then(res => {
  //       console.log(res.data);
  //       this.setState(res.data);
  //   })
  //   .catch(err => console.log(err));
  // }
  render() {
    return (
        <div>
            <h4>Recipe Page</h4>
            <h5>
              <Link to="/">
                <FontAwesomeIcon icon="user-plus" /> Go Back Home
              </Link>
              <Link to="/user">
                <FontAwesomeIcon icon="user-plus" /> Go Back To User
              </Link>
            </h5>
                <div>
                    <Container />
                </div>
        </div>

    )
  }
}

export default Recipe;

 