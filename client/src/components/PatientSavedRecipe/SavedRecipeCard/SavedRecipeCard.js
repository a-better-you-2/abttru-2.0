import React from "react";
import {FormGroup, FormControl, Button} from "react-bootstrap";
import "./SavedRecipeCard.css";


const SavedRecipeCard = props => (
 <div className="image-flip" key={props.recipe_id} >
    <div className="mainflip">
        <div className="frontside">
            <div className="card">
                <div className="card text-center">
                    <img className=" img-fluid" src={props.recipe_img} alt="card"></img>
                    <p className="card-title">{props.recipe_name}</p>
                </div>

            </div>
        </div>
        <div className="backside">
            <div className="card">
                <div className="card text-center">
                    <p className="card-title">NOTES for {props.recipe_name}</p>
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