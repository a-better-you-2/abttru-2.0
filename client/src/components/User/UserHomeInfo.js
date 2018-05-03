import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import {Button, Table, FormGroup, FormControl} from "react-bootstrap";

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
      <td className="id"><Link to={`/user`}>{this.state._id}</Link></td>
      <td className="name"><FontAwesomeIcon icon="user-circle"/>{this.state.name}</td>
      <td className="risk_factor"><FontAwesomeIcon icon="heartbeat"/> {this.state.risk_factor}</td>
      <td className="diet_recommendation"><FontAwesomeIcon icon="utensils"/> {this.state.diet_recommendation}</td>
      <td className="diet_restriction"><FontAwesomeIcon icon="allergies"/>{this.state.diet_restriction}</td>
    </tr>  
</tbody>
</Table>