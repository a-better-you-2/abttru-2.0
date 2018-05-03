import React from "react";
import { Link } from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import axios from "axios";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import RecipeCard from "./RecipeCard"
import "./User.css"
// import Container from "./Container"
// 
class User extends React.Component {
    state = {
        data: [],
        user_id: "5adf6fc3c8493f472c1f9ed3",
        recipe_id: "",
        name: "",
        password: "",
        risk_factor: "",
        diet_recommendation: "",
        diet_restriction: "",
        recipes: [],
        notes: [],
        note_text: ""
      };
      
    componentDidMount() {
        // axios.get(`/api/abttru/${this.props.match.params.id}`)
        axios.get(`/api/abttru/${"5adf6fc3c8493f472c1f9ed3"}`)
        .then(res => {
            console.log(res.data);
            this.setState(res.data);
        })
        .catch(err => console.log(err));
    }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    getRecipes () {
        axios.get("https://api.edamam.com/search?q=tacos&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99&from=0&to=5&calories=591-722&Diet=&Health=")
        .then(res => {
          console.log(res);
          console.log(res.data.hits);
          for(var i=0;i<res.data.hits.length;i++) {
            this.setState({data: res.data.hits})
          }
        })
        .catch(err => console.log(err));
    }

    saveRecipe = (event) => {
      const target= event.target;
      const id = this.state.user_id;
      const recipeObj = {
        user_id:id,
        recipe_name:target.getAttribute("name"),
        recipe_img:target.getAttribute("img"),
        recipe_link:target.getAttribute("link"),
        recipe_uri:target.id
      }
      console.log(recipeObj);
      axios.post(`/api/abttru/recipes/${id}`, recipeObj)
        .then(res => {console.log(res);})
        .catch(err => console.log(err));
    }

    saveNote = (event) => {
      const id = event.target.id;
      const noteObj = {
        recipe_id:id,
        body: this.state.note_text
      }
      console.log(noteObj);
      axios.post(`/api/abttru/recipes/notes/${id}`, noteObj)
        .then(res => {
          console.log(res);
          this.setState({note_text: ""});
        })
        .then( () => {
          axios.get(`/api/abttru/${"5adf6fc3c8493f472c1f9ed3"}`)
          .then(res => {
              console.log(res.data);
              this.setState(res.data);
          })
        })
        .catch(err => console.log(err));
    }

    deleteNote = (event) => {
      const id = event.target.id;
      console.log(id);
      axios.delete(`/api/abttru/recipes/notes/${id}`)
      .then(res => {
        console.log(res);
      })
      .then( () => {
        axios.get(`/api/abttru/${"5adf6fc3c8493f472c1f9ed3"}`)
        .then(res => {
            console.log(res.data);
            this.setState(res.data);
        })
      })
      .catch(err => console.log(err));
    }
    

  render() {
    const recipeCard = this.state.data.map(data =>
      <div className="panel panel-primary" key={data.recipe.uri}>
        <div className="panel panel-primary"><h4>{data.recipe.label}</h4></div>
          <div className="panel-body">
            <img src={data.recipe.image} alt="recipe_image"></img>
            <br></br>
            <a href={data.recipe.url} target="_blank">Tap HERE for the recipe</a>
            <p>{data.notes}</p>
            <Button className="save" id={data.recipe.uri} name={data.recipe.label} img={data.recipe.image} link={data.recipe.url} onClick={this.saveRecipe}>SAVE RECIPE</Button>
          </div>
      </div>
    )
 
    const savedCard = this.state.recipes.map(recipe => (
      <div key={recipe._id}>
      <RecipeCard 
          saveNote={this.saveNote}
          key={recipe._id}
          recipe_img={recipe.recipe_img}
          recipe_name={recipe.recipe_name}
          recipe_id={recipe._id}
          notes={recipe.notes.map(note => <div key={note._id} className="notes">{note.body}<Button type="delete" className="delete" id={note._id} onClick={this.deleteNote}>x</Button></div>)}
          note_text={this.state.note_text}
          onChange={this.onChange}
      />
      </div>
    ))

    return (
        <div>
            <h4>User Home Page</h4>
            <h5>
              <Link to="/">
                <FontAwesomeIcon icon="home" /> Home
              </Link>
              <Link to="/recipes">
                <FontAwesomeIcon icon="utensils" /> Recipes
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
              <Button onClick={this.getRecipes.bind(this)} color="primary">Get Recipes</Button>
              <div className="row">
                { recipeCard }
                {savedCard}
              </div>  

        </div>
    )
  }
}

export default User;