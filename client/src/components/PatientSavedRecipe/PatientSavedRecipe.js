import React from "react";
import { Link } from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import axios from "axios";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import RecipeCard from "./SavedRecipeCard"
import "./PatientSavedRecipe.css"


class PatientSavedRecipe extends React.Component {
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
    // .then(() =>{
      // let recipeUri="http://www.edamam.com/ontologies/edamam.owl#recipe_742c0d0fa853481f3c142885a9e30940"
      // let recipeUri=`http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_742c0d0fa853481f3c142885a9e30940`
      // let edemamUri = recipeUri.replace(/[#]/gi, '%23')
      //NEED TO REPLACE # with %23!!//
      // axios.get(`https://api.edamam.com/search?r=${recipeUri}&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99`)
    // })
    // .then(res => {
      // console.log(res);
      // this.setState(res.data);
    // })
    .catch(err => console.log(err));
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
    const patientSavedCard = this.state.recipes.map(recipe => (
      <div key={recipe._id}>
      <RecipeCard 
          saveNote={this.saveNote}
          key={recipe._id}
          recipe_img={recipe.recipe_img}
          recipe_name={recipe.recipe_name}
          recipe_id={recipe._id}
          notes={recipe.notes.map(note => <div key={note._id} className="notes">{note.body}<Button className="delete" id={note._id} onClick={this.deleteNote}>x</Button></div>)}
          note_text={this.state.note_text}
          onChange={this.onChange}
      />
      </div>
    ))
    return (
        <div className="container">
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
                </div>
                <div className="row">
                  {patientSavedCard}
                </div>
        </div>

    )
  }
}

export default PatientSavedRecipe;

 