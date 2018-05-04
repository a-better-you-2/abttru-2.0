// import React from 'react';
// import axios from "axios";
// import Coverflow from 'react-coverflow';
// import { StyleRoot } from 'radium';
// // import {Button} from "react-bootstrap";
// // import RecipeCard from "./RecipeCard"

// class Container extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//       user_id: "5adf6fc3c8493f472c1f9ed3",
//       recipe_id: "",
//       recipes: [],
//       notes: [],
//     };
//   }
    
//   componentDidMount() {
//     // axios.get(`/api/abttru/${this.props.match.params.id}`)
//     axios.get(`/api/abttru/${"5adf6fc3c8493f472c1f9ed3"}`)
//     .then(res => {
//         console.log(res.data);
//         this.setState(res.data);
//     })
//     .catch(err => console.log(err));
//   }

//   getRecipes () {
//     axios.get("https://api.edamam.com/search?q=tacos&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99&from=0&to=5&calories=591-722&Diet=&Health=")
//     .then(res => {
//       console.log(res);
//       console.log(res.data.hits);
//       for(var i=0;i<res.data.hits.length;i++) {
//         this.setState({data: res.data.hits})
//       }
//     })
//     .catch(err => console.log(err));
//   }

//   saveRecipe = (event) => {
//     const target= event.target;
//     const id = this.state.user_id;
//     const recipeObj = {
//       user_id:id,
//       recipe_name:target.getAttribute("name"),
//       recipe_img:target.getAttribute("img"),
//       recipe_link:target.getAttribute("link"),
//       recipe_uri:target.id
//     }
//     console.log(recipeObj);
//     axios.post(`/api/abttru/recipes/${id}`, recipeObj)
//       .then(res => {console.log(res);})
//       .catch(err => console.log(err));
//   }

//   saveNote = (event) => {
//     const id = event.target.id;
//     const noteObj = {
//       recipe_id:id,
//       body: this.state.note_text
//     }
//     console.log(noteObj);
//     axios.post(`/api/abttru/recipes/notes/${id}`, noteObj)
//       .then(res => {console.log(res);})
//       .catch(err => console.log(err));
//   }


//   render() {
//     // const savedCard = this.state.recipes.map(recipe =>
//     //     <img key={recipe._id} src={recipe.recipe_img} alt={recipe.recipe_name} />
//     // )
//     const savedCard = this.state.recipes.map(recipe => (
//       <div key={recipe._id}>
//       <RecipeCard 
//           saveNote={this.saveNote}
//           key={recipe._id}
//           recipe_img={recipe.recipe_img}
//           recipe_name={recipe.recipe_name}
//           recipe_id={recipe._id}
//           notes={recipe.notes.map(note => <div key={note._id} className="notes">{note.body}<Button className="delete" id={note._id} onClick={this.deleteNote}>x</Button></div>)}
//           note_text={this.state.note_text}
//           onChange={this.onChange}
//       />
//       </div>
//     ))
//     return (
//       <div >
//         <StyleRoot>
//             <Coverflow
//                 displayQuantityOfSide={3}
//                 navigation
//                 infiniteScroll
//                 enableHeading
//                 media={{
//                     '@media (max-width: 768px)': {
//                     width: '300px',
//                     height: '450px'
//                     },
//                     '@media (min-width: 768px)': {
//                     width: '960px',
//                     height: '600px'
//                     },    
//                     // '@media (max-width: 900px)': {
//                     //   width: '600px',
//                     //   height: '300px'
//                     // },
//                     // '@media (min-width: 900px)': {
//                     //   width: '960px',
//                     //   height: '600px'
//                     // }
//                 }}
//             >
//             {savedCard}
//             </Coverflow>
//         </StyleRoot>
//       </div>
//     );
//   }
// };


// export default Container;