const mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    doctor_id: String,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    dob: Date,
    sex: String,
    heightFoot: Number,
    heightInch: Number,
    weight: Number,
    waist: Number,
    bp_systolic: String,
    bp_diastolic: String,
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