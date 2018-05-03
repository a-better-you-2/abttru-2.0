const mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    password:  String,
    risk_factor: {
        type: String,
        require: true
    },
    diet_recommendation: {
        type: String,
        require: true
    },
    diet_restriction: {
        type: String,
        require: true
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipes"
    }],
    created: Date,
    updated: Date
});

module.exports = mongoose.model("User", userSchema);