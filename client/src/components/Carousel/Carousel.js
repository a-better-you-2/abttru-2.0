import React from "react";
import { Button, Carousel, Row, Col } from "react-bootstrap";
import PiePlot from "../Graphs/PiePlot";
import PiePlotTwo from "../PatientSavedRecipe";
import Input from "../Input/Input";
import "./Carousel.css"
import axios from "axios";

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      data: [],
      index: 0,
      direction: null,
      user_id: this.props.userId,
      showCarousel: false,
      name: "",
      diet_recommendation: this.props.diet_label,
      diet_restriction: this.props.health_label
    };
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(this.state);
  }

  getRecipes() {
    this.setState({showCarousel: false})
    console.log(this.props)
    axios.get(`https://api.edamam.com/search?q=${this.state.name}&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99&calories=591-722&Diet=${this.props.diet_label}&Health=${this.props.health_label}`)
      .then(res => {
        console.log(res);
        console.log(res.data.hits);
        for (var i = 0; i < res.data.hits.length; i++) {
          this.setState({
            data: res.data.hits,
            showCarousel: true,
            name: ""
          })
        }
      })
      .catch(err => console.log(err));
  }

  saveRecipe = (event) => {
    const target = event.target;
    const id = this.state.user_id;
    console.log(id);
    const recipeObj = {
      user_id: id,
      recipe_name: target.getAttribute("name"),
      recipe_img: target.getAttribute("img"),
      recipe_link: target.getAttribute("link"),
      recipe_uri: target.id
    }
    // console.log(recipeObj);
    axios.post(`/api/abttru/recipes/${id}`, recipeObj)
      .then(res => { console.log(res); })
      .catch(err => console.log(err));
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  makePlot = () => {
    const piePlot = this.state.data.map((data) => {
      <div>
      <PiePlotTwo
        digestData={data.digest}
        yieldData={data.yield}
      />
    </div>
    })
    return piePlot[this.state.index]
  }


  render() {
    const { index, direction } = this.state;

    const searchedRecipeCard = this.state.data.map((data, index) =>
      <div>
        <Carousel.Item>
          <Row>
            <Col md={1}></Col>
            <Col xs={12} md={4}>
              <img width={400} height={400} alt="recipeImage" src={data.recipe.image} />
            </Col>
            <Col md={1}></Col>
            <br /><br />
            <Col xs={12} md={6}>
              <PiePlot
                className="pieTry"
                digestData={this.state.data[index].recipe.digest}
                yieldData={this.state.data[index].recipe.yield}
              />
            </Col>
          </Row>
          <br /><br />
          <Carousel.Caption>
            <h1 id="recipe-title">{data.recipe.label}</h1>
            <h1 id="recipe-link"><a href={data.recipe.url} target="_blank">Tap HERE for the recipe</a></h1>
            <Button className="save-button" id={data.recipe.uri} name={data.recipe.label} img={data.recipe.image} link={data.recipe.url} onClick={this.saveRecipe}>SAVE RECIPE</Button>
          </Carousel.Caption>
        </Carousel.Item>

      </div>
    )

 

    return (
      <div className="container">
        <Input
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Search ingredients(e.g. chicken)"
        /><br />
        <Button onClick={this.getRecipes.bind(this)} color="primary">Get Recipes</Button>
        {this.makePlot()}
        {this.state.showCarousel ? (
          <div>

            <Carousel className="Carousel"
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
            >
              {searchedRecipeCard.map(c => {
                return <Carousel.Item>{c}</Carousel.Item>
              })}
            </Carousel>
          </div>)
          : null}

          
      </div>
    );

  }
}

export default ControlledCarousel;