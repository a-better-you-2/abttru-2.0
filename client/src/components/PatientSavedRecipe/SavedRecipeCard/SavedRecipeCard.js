import React from "react";
import {FormGroup, FormControl, Button} from "react-bootstrap";
import "./SavedRecipeCard.css";


const SavedRecipeCard = props => (
 <div className="image-flip" key={props.recipe_id} onClick={props.flipCard} id="cardDiv">
    <div className="mainflip">
        <div className="frontside">
            <div className="card">
                <div className="card text-center">
                    <img className=" img-fluid" src={props.recipe_img} id="card" isflipped="false" alt="card"></img>
                    {/* <h4 className="card-title">{props.recipe_name}</h4> */}
                </div>

            </div>
        </div>
        <div className="backside">
            <div className="card">
                <div className="card text-center" id="card" isflipped="false">
                <h3 className="card-title"><a href={props.recipe_link} target="_blank">{props.recipe_name}</a></h3>
                    <div>{props.notes}</div>
                    <FormGroup>
                        <FormControl type="text" name="note_text" id={props.recipe_id} value={props.note_text} onChange={props.onChange} placeholder="Type note here" />
                    </FormGroup>
                    <a><i className="fa fa-plus"><Button className="save" id={props.recipe_id} onClick={props.saveNote}>ADD NOTES</Button></i></a>
                    <a><Button className="delete_recipe" id={props.recipe_id} onClick={props.deleteRecipe}>DELETE RECIPE</Button></a>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default SavedRecipeCard;