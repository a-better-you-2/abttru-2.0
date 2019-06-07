import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import {Button, Table, FormGroup, FormControl} from "react-bootstrap";


const UserStatsTable = props => (
<Table hover striped responsive>
<thead>
  <tr>
    <th>User ID</th>
    <th>Name</th>
    <th>Risk Factor</th>
    <th>Diet Recommendation</th>
    <th>Diet Restrictions</th>
  </tr>
</thead>
<tbody>
    <tr>
      <td className="id"><Link to={`/user`}>{props._id}</Link></td>
      <td className="name"><FontAwesomeIcon icon="user-circle"/>{props.name}</td>
      <td className="risk_factor"><FontAwesomeIcon icon="heartbeat"/> {props.risk_factor}</td>
      <td className="diet_recommendation"><FontAwesomeIcon icon="utensils"/> {props.diet_recommendation}</td>
      <td className="diet_restriction"><FontAwesomeIcon icon="allergies"/>{props.diet_restriction}</td>
    </tr>  
</tbody>
</Table>
)

export default UserStatsTable;