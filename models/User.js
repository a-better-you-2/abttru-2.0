const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

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
    user_photo: {
        type: String,
        require: true,
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipes"
    }],
    created: Date,
    updated: Date
});

userSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};



module.exports = mongoose.model("User", userSchema);