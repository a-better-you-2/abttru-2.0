const mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
    user_id: String,
    recipe_name: String,
    recipe_img: String,
    recipe_link: String,
    recipe_uri: String,
    recipe_data: Object,
    favorite: {
        type: Boolean,
        default: false
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }],
    created: Date,
    updated: Date
});

module.exports = mongoose.model("Recipes", recipeSchema);