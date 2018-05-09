import React from "react";
import { Link } from "react-router-dom";
import { Button, Table, FormGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import RecipeCard from "./SavedRecipeCard"
import "./PatientSavedRecipe.css"
import PiePlot from "../Graphs/PiePlot";



class PatientSavedRecipe extends React.Component {

  state = {
    data: [],
    user_id: "",
    recipe_id: "",
    name: "",
    password: "",
    risk_factor: "",
    diet_recommendation: "",
    diet_restriction: "",
    recipes: [],
    recipe_data: [],
    recipe_index: 2,
    notes: [],
    note_text: "",
    msg: "I'm setting the state here!",
    propsObjectArr: []
  };



  componentDidMount() {
    // console.log(this.props.location.params.userId)
    axios.get(`/api/abttru/user/${this.props.location.params.userId}`)
      .then(res => {
        // console.log(res.data);
        // console.log(res.data.recipes.length);
        this.setState(res.data);
      })
      .then(() =>{
        let allUri= this.state.recipes.map(recipe => (recipe.recipe_uri));
        let recipeUri = allUri[this.state.recipe_index];
        let edemamUri = recipeUri.replace(/[#]/gi, '%23', /[:]/gi, '%3A', /[/]/, '%2F')
        axios.get(`https://api.edamam.com/search?r=${edemamUri}&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99`)
          .then((recipe) => {
          // console.log(recipe.data);
          this.setState({recipe_data: recipe.data});
        })
        this.makeCard();
        
      });
      
  }

  makeCard = () => {
    const savedCard = this.state.recipes.map(recipe => (
      <div key={recipe._id}>
        <RecipeCard
          saveNote={this.saveNote}
          deleteRecipe={this.deleteRecipe}
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
    // console.log(savedCard[this.state.recipe_index])
    return savedCard[this.state.recipe_index];
    // this.makeDrop();
  }

  makeDrop = () => {
    var str = "";
    for (var i = 0; i < 9; i++) {
        str = str + i;
    }
      console.log(str);
    // expected output: "012345678"

    // let recipes=this.state.recipes.length;
    // console.log(recipes);
    // for(let i=0; i<recipes; i++) {
    //   console.log(i);
    //   console.log(this.state.recipes[i]);
    //   console.log(this.state.recipes[i].recipe_name);
    //   const savedSelect = 
    //     <li id={this.state.recipes[i].recipe_uri} key={this.state.recipes[i]._id}>
    //       <a href={this.state.recipes[i].recipe_link} title={this.state.recipes[i].recipe_name}>
    //         <img src={this.state.recipes[i].recipe_img}></img>
    //       </a>
    //       <h4>{this.state.recipes[i].recipe_name}</h4>
    //     </li>
    //   return savedSelect;
      
    // }
    // const savedSelect = this.state.recipes.map(recipe => (
    //   <li id={recipe.recipe_uri} key={recipe._id}>
    //     <a href={recipe.recipe_link} title={recipe.recipe_name}>
    //       <img src={recipe.recipe_img}></img>
    //     </a>
    //     <h4>{recipe.recipe_name}</h4>
    //   </li>
    // ))

    // return savedSelect;
  }

  onChange = (e) => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  saveNote = (event) => {
    const id = event.target.id;
    const noteObj = {
      recipe_id: id,
      body: this.state.note_text
    }
    console.log(noteObj);
    axios.post(`/api/abttru/recipes/notes/${id}`, noteObj)
      .then(res => {
        console.log(res);
        this.setState({ note_text: "" });
      })
      .then(() => {
        axios.get(`/api/abttru/user/${this.props.location.params.userId}`)
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
      .then(() => {
        axios.get(`/api/abttru/user/${this.props.location.params.userId}`)
          .then(res => {
            console.log(res.data);
            this.setState(res.data);
          })
      })
      .catch(err => console.log(err));
  }

  deleteRecipe = (event) => {
    const id = event.target.id;
    console.log(id);
    axios.delete(`/api/abttru/recipes/${id}`)
      .then(res => {
        console.log(res);
      })
      .then(() => {
        axios.get(`/api/abttru/user/${this.props.location.params.userId}`)
          .then(res => {
            console.log(res.data);
            this.setState(res.data);
          })
      })
      .catch(err => console.log(err));
  }

  render() {
    const id = this.props.location.params.userId
    // const savedCard = this.state.recipes.map(recipe => (
    //   <div key={recipe._id}>
    //     <RecipeCard
    //       saveNote={this.saveNote}
    //       deleteRecipe={this.deleteRecipe}
    //       key={recipe._id}
    //       recipe_img={recipe.recipe_img}
    //       recipe_name={recipe.recipe_name}
    //       recipe_id={recipe._id}
    //       notes={recipe.notes.map(note => <div key={note._id} className="notes">{note.body}<Button className="delete" id={note._id} onClick={this.deleteNote}>x</Button></div>)}
    //       note_text={this.state.note_text}
    //       onChange={this.onChange}
    //     />
    //   </div>
    // ))

    // const savedSelect = this.state.recipes.map(recipe => (
    //   <li id={recipe.recipe_uri} key={recipe._id}>
    //     <a href={recipe.recipe_link} title={recipe.recipe_name}>
    //       <img src={recipe.recipe_img}></img>
    //     </a>
    //     <h4>{recipe.recipe_name}</h4>
    //     {/* <div>{recipe.notes.map(note => <div key={note._id} className="notes">{note.body}<Button className="delete" id={note._id} onClick={this.deleteNote}>x</Button></div>)}</div> */}
    //     {/* <FormGroup> */}
    //       {/* <FormControl type="text" name="note_text" id={recipe.recipe_id} value={this.state.note_text} onChange={this.onChange} placeholder="Type note here" /> */}
    //     {/* </FormGroup> */}
    //     {/* <a><i className="fa fa-plus"><Button className="btn save btn-success" id={recipe._id} onClick={this.saveNote}>ADD NOTES</Button></i></a> */}
    //     {/* <a><Button className="delete_recipe" id={recipe._id} onClick={this.deleteRecipe}>DELETE RECIPE</Button></a> */}
    //   </li>
    // ))

    const piePlot = this.state.recipe_data.map(recipe => (
      <div key={recipe.uri}>
        <PiePlot
          digestData={recipe.digest}
          yieldData={recipe.yield}
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
          <Link to={{ pathname: `/user/${id}` }}>
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
              <tr key={this.state._id}>
                <td className="id"><Link to={`/user`}>{this.state._id}</Link></td>
                <td className="name"><FontAwesomeIcon icon="user-circle" />{this.state.name}</td>
                <td className="risk_factor"><FontAwesomeIcon icon="heartbeat" /> {this.state.risk_factor}</td>
                <td className="diet_recommendation"><FontAwesomeIcon icon="utensils" /> {this.state.diet_recommendation}</td>
                <td className="diet_restriction"><FontAwesomeIcon icon="allergies" />{this.state.diet_restriction}</td>
              </tr>
            </tbody>
          </Table>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                  Select a Recipe
                </button>
                <ul className="dropdown-menu scrollable-menu" role="menu">
                {this.makeDrop()}
                  {/* {savedSelect} */}
                </ul>
              </div>
            </div>
            <div className="row">
            
            <div className="col-md-4">
              <div className="card-holder">
                {this.makeCard()}
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              {piePlot}
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default PatientSavedRecipe;

