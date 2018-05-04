import React from "react";
import {Button, Carousel} from "react-bootstrap";
import axios from "axios";

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        data: [],
        index: 0,
        direction: null
      };
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
  
    handleSelect(selectedIndex, e) {
      alert(`selected=${selectedIndex}, direction=${e.direction}`);
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction} = this.state;

      const searchedRecipeCard = this.state.data.map(data =>
        
        // <div key={data.recipe.uri}>
        //     <img width={350} height={350} alt="900x500" src={data.recipe.image} />
        //     <Carousel.Caption>
        //         <h3>{data.recipe.label}</h3>
        //         <a href={data.recipe.url} target="_blank">Tap HERE for the recipe</a>
        //     </Carousel.Caption>
        //     <Button className="save" id={data.recipe.uri} name={data.recipe.label} img={data.recipe.image} link={data.recipe.url} onClick={this.saveRecipe}>SAVE RECIPE</Button>
        // </div>
        
        <div className="col-md-4">
        <div className="panel panel-primary" key={data.recipe.uri}>
          <div className="panel panel-primary"><h4>{data.recipe.label}</h4></div>
            <div className="panel-body">
              <img src={data.recipe.image} alt="recipe_image"></img>
              <br></br>
              <a href={data.recipe.url} target="_blank">Tap HERE for the recipe</a>
              <Button className="save" id={data.recipe.uri} name={data.recipe.label} img={data.recipe.image} link={data.recipe.url} onClick={this.saveRecipe}>SAVE RECIPE</Button>
            </div>
        </div>
        </div>
          //   const firstSearchCard = searchedRecipeCard[0];
          //   firstSearchCard.classList.add("active");
      )

  
  
      return (
        <div className="container">
        <Button onClick={this.getRecipes.bind(this)} color="primary">Get Recipes</Button>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>{searchedRecipeCard[0]}</Carousel.Item>
          <Carousel.Item>{searchedRecipeCard[1]}</Carousel.Item>
          <Carousel.Item>{searchedRecipeCard[2]}</Carousel.Item>
          <Carousel.Item>{searchedRecipeCard[3]}</Carousel.Item>
          <Carousel.Item>{searchedRecipeCard[4]}</Carousel.Item>    
        </Carousel>
      </div>
      );
      
    }
  }
  
export default ControlledCarousel;