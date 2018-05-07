const mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const doctorSchema = new mongoose.Schema({
    name:  String,
    email: String,
    password:  String,
    patients: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    created: Date
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;