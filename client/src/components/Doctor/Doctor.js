import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./Doctor.css";

class Doctor extends React.Component {

  state = {
    name: "",
    _id: "",
    patients: []
  };

  componentDidMount() {
    axios.get("/api/abttru/doctor/5af0a4c58588f838ccd27f82")
    .then(res => {
      console.log(res.data);
      this.setState(res.data);
    })
    .catch(err => console.log(err));
  }

  render() {
    // const patients = this.state.patients.map((user) =>
    
    // )
    return (
        <div className="container">
          <h4>User List</h4>
            <h5>
            <Link to="/">
                <FontAwesomeIcon icon="home" /> Go Back Home
              </Link>
              <Link to="/create">
                <FontAwesomeIcon icon="user-plus" /> Add Patient
              </Link>
            </h5>
            <h1>{this.state.name}</h1>
            <h2>{this.state._id}</h2>
            <Table hover striped responsive>
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Name</th>
                  <th>Risk Factor</th>
                  <th>Diet Recommendation</th>
                  <th>Diet Restrictions</th>
                </tr>
              </thead>
              <tbody>
                { this.state.patients.map(user =>
                  <tr key={user._id}>
                    <td className="id"><Link to={`/show/${user._id}`}>{user._id}</Link></td>
                    <td className="name"><FontAwesomeIcon icon="user-circle"/> {user.first_name} {user.last_name}</td>
                    <td className="risk_factor"><FontAwesomeIcon icon="heartbeat"/> {user.risk_factor}</td>
                    <td className="diet_recommendation"><FontAwesomeIcon icon="utensils"/> {user.diet_recommendation}</td>
                    <td className="diet_restriction"><FontAwesomeIcon icon="allergies"/> {user.diet_restriction}</td>
                  </tr>
                  )
                }
              </tbody>
            </Table>
          </div>
    )
  }
}

export default Doctor;
