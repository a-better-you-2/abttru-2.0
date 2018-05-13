const mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const doctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    doctor_photo: {
        type: String,
        require: true
    },
    facility_name: String,
    specialty: String,
    patients: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    created: Date
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;