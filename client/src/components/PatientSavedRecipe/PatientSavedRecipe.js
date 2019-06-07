import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import RecipeCard from "./SavedRecipeCard";
import UserJumbotron from '../UserJumbotron/'
import "./PatientSavedRecipe.css"
import PiePlot from "../Graphs/PiePlot";
import { MoonLoader } from 'react-spinners';
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
        // console.log(res.data);
        this.setState(res.data);
        this.setState({
          loading: false,
          showResults: true
        });
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
    // console.log(allUri);
    let length = allUri.length;
    // console.log(length);
    if (length === 0) {
      this.setState({
        recipe_index: 0,
        showResults: true,
        loading: false
      });
    } else {
      let randomRecipe = Math.floor(Math.random() * length);
      // console.log(randomRecipe);
      this.setState({
        recipe_index: randomRecipe,
        showResults: true,
        loading: false
      });
      // console.log(this.state.recipe_index);
    }

    let recipeUri = allUri[this.state.recipe_index];
    // console.log(recipeUri);
    let edemamUri = recipeUri.replace(/[#]/gi, '%23', /[:]/gi, '%3A', /[/]/, '%2F');
    // console.log(edemamUri);
    axios.get(`https://api.edamam.com/search?r=${edemamUri}&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99`)
      .then((recipe) => {
        // console.log(recipe.data);
        this.setState({ recipe_data: recipe.data })
        // console.log(this.state.recipe_data[0]);
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
        const pos = this.state.recipes.map(function (e) { return e.recipe_uri; }).indexOf(id);
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
          notes={recipe.notes.map(note => <div key={note._id} className="notes">{note.body}<Button className="delete" id={note._id} onClick={this.deleteNote}>x</Button></div>)}
          note_text={this.state.note_text}
          onChange={this.onChange}
        />
      </div>
    ))
    return savedCard[this.state.recipe_index];
  }

  flipCard = (e) => {
    console.log(e.target);
    const card = document.querySelector("#cardDiv");
    const target = e.target.id;
    console.log(target);
    const isFlipped = e.target.getAttribute("isflipped");
    // card.classList.remove("hover");
    if (isFlipped === "false") {
      document.getElementById(target).setAttribute("ispicked", "true");
      card.classList.toggle("hover");
      return;
    } else if (isFlipped === "true") {
      card.classList.toggle("hover");
      return;
    }
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
      <li id={recipe.recipe_uri} key={recipe._id}>
        <div className="pic">
          <a href={recipe.recipe_link} title={recipe.recipe_name} target="_blank">
            <img className="img-responsive" src={recipe.recipe_img} alt="alt"></img>
          </a>
        </div>
        <div className="info">
          <h6>{recipe.recipe_name}</h6>
          <div className="button" id={recipe.recipe_uri} onClick={this.changeRecipe}>GET RECIPE CARD</div>
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
              <div>
                <div className="row">
                  <div className="col-xs-0 col-sm-0 col-md-4 cold-lg-4"></div>
                  <div className="col-xs-12 col-sm-12 col-md-4 cold-lg-4 sweet-loader">
                    <MoonLoader
                      loading={this.state.loading}
                      size={250}
                      color={'#197278'}
                    />
                  </div>
                  <div className="col-xs-0 col-sm-0 col-md-4 cold-lg-4"></div>
                </div>
              </div>
              {this.state.showResults ? (
                <div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                      <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                          RECIPE BOX
                        </button>
                        <ul className="dropdown-menu scrollable-menu" role="menu">
                          {savedSelect}
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
                  </div>
                  <div className="row">
                    <div className="col-xs-0 col-sm-0 col-md-2 cold-lg-2"></div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 display">
                      <div className="card-holder">
                        {this.makeCard()}
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 display">
                      {piePlot}
                    </div>
                    <div className="col-xs-0 col-sm-0 col-md-2 cold-lg-2"></div>
                  </div>
                </div>)
                : null}
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default PatientSavedRecipe;

