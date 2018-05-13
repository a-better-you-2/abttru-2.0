import React from "react";
import { Button, Carousel, Row, Col } from "react-bootstrap";
import { MoonLoader } from 'react-spinners';
import PiePlot from "../Graphs/PiePlot";
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
      diet_restriction: this.props.health_label,
      loading: false
    }
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

  getRecipes(e) {
    e.preventDefault();
    this.setState({
      showCarousel: false,
      loading: true
    });
    console.log(this.props)
    let firstIndex = Math.floor(Math.random() * 20);
    console.log(firstIndex);
    axios.get(`https://api.edamam.com/search?q=${this.state.name}&app_id=6ee418a4&app_key=38910f6a58e3c348dd000cd7a9fc1139&calories=591-722&from=${firstIndex}&Diet=${this.props.diet_label}&Health=${this.props.health_label}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          data: res.data.hits,
          showCarousel: true,
          loading: false

        })
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



  render() {
    const { index, direction } = this.state;

    const searchedRecipeCard = this.state.data.map((data, index) =>
      <div>

        <Carousel.Item>
          <Row>
            <Col xs={0} sm={0} md={1} lg={1}></Col>
            <Col xs={12} sm={12} md={5} lg={5}>
              {/* <Carousel.Caption> */}
              <h2 id="recipe-title">{data.recipe.label}</h2>
              <img width={250} height={250} alt="recipeImage" id="pic" src={data.recipe.image} />
              <h2 id="recipe-link"><a href={data.recipe.url} target="_blank">Tap HERE for the recipe</a></h2>
              <Button className="save-button" id={data.recipe.uri} name={data.recipe.label} img={data.recipe.image} link={data.recipe.url} onClick={this.saveRecipe}>SAVE RECIPE</Button>
              {/* </Carousel.Caption> */}
            </Col>
            <Col xs={12} sm={12} md={5} lg={5}>
              <PiePlot
                className="pieTry"
                digestData={data.recipe.digest}
                yieldData={data.recipe.yield}
              />
            </Col>
            <Col xs={0} sm={0} md={1} lg={1}></Col>
          </Row>
        </Carousel.Item>

      </div>
    )


    return (
      <div className="">
        <div className="row">
          <div className="col-xs-0 col-sm-0 col-md-2 cold-lg-2"></div>
          <div className="col-xs-12 col-sm-12 col-md-8 cold-lg-8">
            <form onSubmit={this.getRecipes.bind(this)} >
              <Input
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                placeholder="Search ingredients(e.g. chicken)"

              />
              <br />
              <Button onClick={this.getRecipes.bind(this)} color="primary">Get Recipes</Button>
            </form>
          </div>
          <div className="col-xs-0 col-sm-0 col-md-4 cold-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-xs-0 col-sm-0 col-md-4 cold-lg-4"></div>
          <div className="col-md-8 sweet-loader">
            <MoonLoader
              loading={this.state.loading}
              size={300}
              color={'#915659'}
            />
          </div>
          <div className="col-xs-0 col-sm-0 col-md-4 cold-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-xs-0 col-sm-0 col-md-2 cold-lg-2"></div>
          <div className="col-xs-12 col-sm-12 col-md-8 cold-lg-8">
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
              </div>
            )
              : null}
          </div>
          <div className="col-xs-0 col-sm-0 col-md-2 cold-lg-2"></div>
        </div>


      </div>
    );

  }
}

export default ControlledCarousel;