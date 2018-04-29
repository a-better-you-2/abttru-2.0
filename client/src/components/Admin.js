import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./Admin.css";

class Admin extends React.Component {

  state = {
    users: []
  };

  componentDidMount() {
    axios.get("/api/abttru")
    .then(res => {
      this.setState( {
        users: res.data
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
        <div>
          <h4>User List</h4>
            <h5>
            <Link to="/">
                <FontAwesomeIcon icon="user-plus" /> Go Back Home
              </Link>
              <Link to="/create">
                <FontAwesomeIcon icon="user-plus" /> Add User
              </Link>
            </h5>
            <Table hover striped responsive>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  {/* <th>Password</th> */}
                  <th>Risk Factor</th>
                  <th>Diet Recommendation</th>
                  <th>Diet Restrictions</th>
                </tr>
              </thead>
              <tbody>
                { this.state.users.map(user =>
                  <tr key={user._id}>
                    <td className="id"><Link to={`/show/${user._id}`}>{user._id}</Link></td>
                    <td className="name"><FontAwesomeIcon icon="user-circle"/> {user.name}</td>
                    {/* <td className="password"><FontAwesomeIcon icon="user-circle"/> {user.password}</td> */}
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

export default Admin;
