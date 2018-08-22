import React from "react";
import { Button } from "reactstrap";
import Input from '../../Input/Input';
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
                        <div className="row">
                            <div className="col-xs-0 col-sm-0 col-md-2 cold-lg-2"></div>
                            <div className="col-xs-12 col-sm-12 col-md-8 cold-lg-8">
                                <form
                                    onSubmit={props.saveNote}
                                    id={props.recipe_id}>
                                    <Input
                                        name="note_text"
                                        value={props.note_text}
                                        onChange={props.onChange}
                                        placeholder="Add A Note..."

                                    />
                                    <br />
                                </form>
                            </div>
                            <div className="col-xs-0 col-sm-0 col-md-4 cold-lg-4"></div>
                        </div>
                        <a>
                            <Button
                                className="save-note"
                                id={props.recipe_id}
                                onClick={props.saveNote}>
                                ADD NOTES
                            </Button>
                        </a>
                        <a><Button className="delete_recipe note-btn btn btn-danger" id={props.recipe_id} onClick={props.deleteRecipe}>DELETE RECIPE</Button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default SavedRecipeCard;