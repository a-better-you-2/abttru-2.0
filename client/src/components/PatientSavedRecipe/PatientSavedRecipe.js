import React from "react";
import axios from "axios";
import RecipeCard from "./SavedRecipeCard";
import UserJumbotron from '../UserJumbotron/'
import "./PatientSavedRecipe.css"
import PiePlot from "../Graphs/PiePlot";
import { RingLoader } from 'react-spinners';
// import { css } from 'emotion';


class PatientSavedRecipe extends React.Component {

  state = {
    data: [],
    initial_user_id: this.props.match.params.id,
    user_id: this.props.match.params.id,
    recipe_id: "",
    name: "",
    password: "",
    user_photo: "",
    risk_factor: "",
    diet_recommendation: "",
    diet_restriction: "",
    recipes: [],
    recipe_data: [],
    recipe_index: 0,
    notes: [],
    note_text: "",
    isUserPage: false,
    showResults: true,
    loading: false

  };

  componentDidMount() {
    this.setState({
      loading: true,
      showResults: false
    })
    axios.get(`/api/abttru/user/${this.state.initial_user_id}`)
      .then(res => {
        this.setState(res.data);
        this.setState({
          loading: false,
          showResults: true
        }, () => console.log(this.state));
        if (res.data.recipes.length < 1) {
          return;
        } else {
          this.getData();
        }
      })
  }

  getData = () => {
    this.setState({ showResults: false, loading: true });
    let allUri = this.state.recipes.map(recipe => (recipe.recipe_uri));
    let length = allUri.length;
    if (length === 0) {
      this.setState({
        recipe_index: 0,
        showResults: true,
        loading: false
      });
    } else {
      let randomRecipe = Math.floor(Math.random() * length);
      this.setState({
        recipe_index: randomRecipe,
        showResults: true,
        loading: false
      });
    }

    let recipeUri = allUri[this.state.recipe_index];
    let edemamUri = recipeUri.replace(/[#]/gi, '%23', /[:]/gi, '%3A', /[/]/, '%2F');
    axios.get(`https://api.edamam.com/search?r=${edemamUri}&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99`)
      .then((recipe) => {
        this.setState({ recipe_data: recipe.data })
      })
  }

  changeRecipe = (e) => {
    this.setState({ loading: true, showResults: false })
    console.log(e.target.id);
    const id = e.target.id;
    const uri = id.replace(/[#]/gi, '%23', /[:]/gi, '%3A', /[/]/, '%2F');
    axios.get(`https://api.edamam.com/search?r=${uri}&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99`)
      .then((recipe) => {
        console.log(recipe.data);
        const pos = this.state.recipes.map(e => e.recipe_uri.indexOf(id));
        console.log(pos)
        this.setState({ recipe_data: recipe.data, recipe_index: pos, loading: false, showResults: true });
      })
  }

  makeCard = () => {
    const savedCard = this.state.recipes.map(recipe => (
      <div key={recipe._id}>
        <RecipeCard
          saveNote={this.saveNote}
          deleteRecipe={this.deleteRecipe}
          flipCard={this.flipCard}
          key={recipe._id}
          recipe_img={recipe.recipe_img}
          recipe_name={recipe.recipe_name}
          recipe_link={recipe.recipe_link}
          recipe_id={recipe._id}
          notes={recipe.notes.map(note => <div key={note._id} className="notes">{note.body}<button className="delete-note" id={note._id} onClick={this.deleteNote}>x</button></div>)}
          note_text={this.state.note_text}
          onChange={this.onChange}
        />
      </div>
    ))
    return savedCard[this.state.recipe_index];
  }

  flipCard = () => {
    const card = document.querySelector("#card");
    const cardDiv = document.querySelector(".image-flip");
    const isFlipped = JSON.parse(card.getAttribute("isflipped"));
    if (!isFlipped) { card.setAttribute("ispicked", "true");}
      cardDiv.classList.toggle("flip");
      return;
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  saveNote = (event) => {
    event.preventDefault();
    const id = event.target.id;
    const noteObj = { recipe_id: id, body: this.state.note_text }
    axios.post(`/api/abttru/recipes/notes/${id}`, noteObj)
      .then(res => {
        this.setState({ note_text: "" });
      })
      .then(() => {
        axios.get(`/api/abttru/user/${this.props.match.params.id}`)
          .then(res => {
            this.setState(res.data);
          })
      })
      .catch(err => console.log(err));
  }

  deleteNote = (event) => {
    const id = event.target.id;
    axios.delete(`/api/abttru/recipes/notes/${id}`)
      .then(res => { console.log(res); })
      .then(() => {
        axios.get(`/api/abttru/user/${this.props.match.params.id}`)
          .then(res => {
            this.setState(res.data);
          })
      })
      .catch(err => console.log(err));
  }

  deleteRecipe = (event) => {
    const id = event.target.id;
    axios.delete(`/api/abttru/recipes/${id}`)
      .then(res => { console.log(res); })
      .then(() => {
        axios.get(`/api/abttru/user/${this.props.match.params.id}`)
          .then(res => {
            this.setState(res.data);
            this.getData();
          })
      })
      .catch(err => console.log(err));
  }

  render() {
    // const id = this.state.user_id;
    const savedSelect = this.state.recipes.map(recipe => (
      <li className="recipe" id={recipe.recipe_uri} key={recipe._id}>
          <a href={recipe.recipe_link} title={recipe.recipe_name} target="_blank" rel="noopener noreferrer">
            <img className="img-responsive pic" src={recipe.recipe_img} alt="alt"></img>
          </a>
        <div className="recipe-info">
          <h6 className="recipe_name">{recipe.recipe_name}</h6><br />
          <button className="recipe-card-button" id={recipe.recipe_uri} onClick={this.changeRecipe}>GET RECIPE CARD</button>
        </div>
      </li>
    ))

    const piePlot = this.state.recipe_data.map(recipe => (
      <div key={recipe.uri}>
        <PiePlot
          digestData={recipe.digest}
          yieldData={recipe.yield}
        />
      </div>
    ))

    return (
      <div>
        <div className="savedPage">
          <div>
            <div>
              <UserJumbotron
                className={"col-md-12"}
                userId={this.state.initial_user_id}
                risk_factor={this.state.risk_factor}
                diet_label={this.state.diet_recommendation}
                health_label={this.state.diet_restriction}
                isUserPage={this.state.isUserPage}
                user_photo={this.state.user_photo}
              />
              <div className="">
                <div className="row">
                  <div className="col-3 col-sm-3 col-md-5 cold-lg-5"></div>
                  <div className="col-6 col-sm-6 col-md-2 cold-lg-2 sweet-loader">
                    <RingLoader
                      loading={this.state.loading}
                      size={200}
                      color={'#EC0B43'}
                    />
                  </div>
                  <div className="col-3 col-sm-3 col-md-5 cold-lg-5"></div>
                </div>

              {this.state.showResults ? (
                <div>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          RECIPE BOX
                        </button>
                        <ul className="dropdown-menu scrollable-menu" role="menu">
                          {savedSelect}
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
                  </div>
                  <div className="row">
                    <div className="col-0 col-sm-0 col-md-1 cold-lg-1"></div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 display">
                      <div className="card-holder">
                        {this.makeCard()}
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 display">
                      {piePlot}
                    </div>
                    <div className="col-0 col-sm-0 col-md-1 col-lg-1"></div>
                  </div>
                </div>)
                : null}
                </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default PatientSavedRecipe;

