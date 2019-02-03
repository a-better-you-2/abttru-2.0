import React from "react";
import { Button, Carousel, CarouselItem, CarouselControl } from "reactstrap";
import { RingLoader } from 'react-spinners';
import PiePlot from "../Graphs/PiePlot";
import Input from "../Input/Input";
import "./Carousel.css"
import axios from "axios";

class ControlledCarousel extends React.Component {
  constructor(props) {
    super(props);

    // this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      name: "",
      data: [],
      activeIndex: 0,
      showCarousel: false,
      loading: false
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    // console.log(this.props.pathName);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(this.state);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.data.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.data.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  getRecipes(e) {
    e.preventDefault();
    this.setState({
      showCarousel: false,
      loading: true
    });
    let firstIndex = Math.floor(Math.random() * 20);
    axios.get(`https://api.edamam.com/search?q=${this.state.name}&app_id=6ee418a4&app_key=38910f6a58e3c348dd000cd7a9fc1139&calories=591-722&from=${firstIndex}&Diet=${this.props.diet_label}&Health=${this.props.health_label}`)
      .then(res => {

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
    const id = this.props.userId;
    const recipeObj = {
      user_id: id,
      recipe_name: target.getAttribute("name"),
      recipe_img: target.getAttribute("img"),
      recipe_link: target.getAttribute("link"),
      recipe_uri: target.id
    }
    axios.post(`/api/abttru/recipes/${id}`, recipeObj)
      .then(res => { console.log(res); })
      .catch(err => console.log(err));
  }

  render() {
    const pathName = this.props.pathName;
    let searchedRecipeCard;
    if (pathName === "/guest") {
      searchedRecipeCard = this.state.data.map((data, index) =>{
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={data.recipe.url}
          >
            <img src={data.recipe.image} width={250} height={250} alt="recipeImage" id="pic" />
            <div id="recipe-info">
              <h4 id="label">{data.recipe.label}</h4>
              <Button className="get-recipe" href={data.recipe.url} target="_blank">GET RECIPE</Button>
            </div>

          </CarouselItem>
        )
      })
    }
    else {
      searchedRecipeCard = this.state.data.map((data, index) => {
         return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={data.recipe.url}
            >
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <img src={data.recipe.image} width={250} height={250} alt="recipeImage" id="pic" />
                {/* <CarouselCaption captionHeader={data.recipe.label} captionText=""/> */}
                <div id="recipe-info">
                  <h4 id="label">{data.recipe.label}</h4>
                  <Button className="get-recipe"href={data.recipe.url} target="_blank">GET RECIPE</Button>
                  <Button className="btn-primary save-recipe" id={data.recipe.uri} name={data.recipe.label} img={data.recipe.image} link={data.recipe.url} onClick={this.saveRecipe}>SAVE RECIPE</Button>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <PiePlot
                className="pieTry"
                digestData={data.recipe.digest}
                yieldData={data.recipe.yield}
              />
              </div>
            </div>
          </CarouselItem>
          // </div>
        );
      });
    }

    // const piePlot = this.state.data.map((data, index )=> (
    //   <div key={data.recipe.uri}>
    //     <PiePlot
    //       className="pieTry"
    //       digestData={data.recipe.digest}
    //       yieldData={data.recipe.yield}
    //     />
    //   </div>
    // ))

    return (
      <div className="main-content">
        <div className="row">
          <div className="col-1 col-sm-1 col-md-3 col-lg-2"></div>
          <div className="col-10 col-sm-10 col-md-6 col-lg-8 carousel-div">
            <form onSubmit={this.getRecipes.bind(this)} >
              <Input
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                placeholder="Search ingredients(e.g. chicken)"
              />
              <br />
              <Button onClick={this.getRecipes.bind(this)} color="primary" id="get">Get Recipes</Button>
            </form>
          </div>
          <div className="col-1 col-sm-1 col-md-3 col-lg-2"></div>
        </div>
        {/* START MAIN DISPLAY */}
        <div className="row">
          <div className="col-3 col-sm-3 col-md-5 col-lg-5"></div>
          <div className="col-6 col-sm-6 col-md-2 col-lg-2 sweet-loader">
            <RingLoader
              loading={this.state.loading}
              size={200}
              color={'#EC0B43'}
            />
          </div>
          <div className="col-3 col-sm-3 col-md-5 col-lg-5"></div>
        </div>
        <div className="row">
          <div className="col-0 col-sm-0 col-md-1 col-lg-2"></div>
          <div className="col-12 col-sm-12 col-md-10 col-lg-8 recipe-display">
            {this.state.showCarousel ? (
                  <Carousel
                    className={this.props.className}
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    {/* {searchedRecipeCard.map(c => { return <CarouselItem>{c}</CarouselItem> })} */}
                    {searchedRecipeCard}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                  </Carousel>
            )
              : null}
          </div>
          {/* <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            {piePlot}
          </div> */}
          <div className="col-0 col-sm-0 col-md-1 col-lg-2"></div>
        </div>
      </div>
    );
  }
}

export default ControlledCarousel;