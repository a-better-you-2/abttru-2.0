import React from "react";
import { Link } from "react-router-dom";
import {Button,Table, Card, CardBody, CardHeader} from "reactstrap";
import axios from "axios";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class User extends React.Component {
    state = {
        results: [],
        isbn: "",
        name: "",
        password: "",
        risk_factor: "",
        diet_recommendation: "",
        diet_restriction: ""
      };

    componentDidMount() {
        // axios.get(`/api/abttru/${this.props.match.params.id}`)
        axios.get(`/api/abttru/${"5adf6fc3c8493f472c1f9ed2"}`)
        .then(res => {
            this.setState(res.data);
        })
        .catch(err => console.log(err));
    }

    getRecipes () {
        axios.get("https://api.edamam.com/search?q=tacos&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99&from=0&to=5&calories=591-722&Diet=&Health=")
        .then(res => {
        console.log(res);
        for(var i=0;i<res.data.hits.length;i++) {
          console.log(res.data.hits[i].recipe.label);
          console.log(res.data.hits[i].recipe.image);
          console.log(res.data.hits[i].recipe.url);
          console.log(res.data.hits[i].recipe.uri);
            var recipe = {
              name: res.data.hits[i].recipe.label,
              img: res.data.hits[i].recipe.image,
              url: res.data.hits[i].recipe.url,
              uri: res.data.hits[i].recipe.uri
            }
            this.setState({results: recipe})
          }
        })
        .catch(err => console.log(err));
    }

    saverecipe = (event) => {
      const target= event.target.id;
      console.log(target);
      axios.put(`/api/abttru/${target}`)
        .then(res => {console.log(res);})
        .catch(err => console.log(err));
    }

  render() {
    let recipeCard = this.state.results.map(recipe =>
      <Card key={recipe._id}>
        <CardHeader><h4>{recipe.name}</h4></CardHeader>
        <CardBody>
        <img src={recipe.img}></img>
          <a href={recipe.link} target="_blank">Tap HERE for the recipe</a>
          <Button className="save" id={recipe._id} onClick={this.saveRecipe.bind(this)}>SAVE recipe</Button>
          <Button className="delete" color="danger" id={recipe._id} onClick={this.deleteRecipe.bind(this)}>DELETE ARTICLE</Button>
        </CardBody>
      </Card>
        )
    return (
        <div>
            <h4>User Home Page</h4>
            <h5>
              <Link to="/">
                <FontAwesomeIcon icon="user-plus" /> Home
              </Link>
              <Link to="/recipes">
                <FontAwesomeIcon icon="user-plus" /> Recipes
              </Link>
            </h5>
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
              <Button onClick={this.getRecipes} color="primary">Get Recipes</Button>
              { recipeCard }
        </div>
    )
  }
}

export default User;