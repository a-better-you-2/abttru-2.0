const mongoose = require("mongoose");
const db = require("../models");
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
mongoose.Promise = global.Promise;
let doctorPassword;
// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/aBetterYou", {
        useMongoClient: true
        // useNewUrlParser: true
    }
);



bcrypt.hash('marshmallow', SALT_WORK_FACTOR, function (err, hash) {
    if (err) throw err;
    console.log(hash);
    let doctorPassword = hash;
    let doctorSeed = [{
            name: "Randy K Mellow",
            email: "rsmellow@gmail.com",
            password: doctorPassword,
            doctor_photo: "data:image/jpeg;base64,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",
            facility_name: "UNC at Chapel Hill",
            specialty: "Head of JavaScript Development",
            patients: [],
            created: Date(Date.now())
        },
        {
            name: "Doogie Houser, M.D.",
            email: "doogie@gmail.com",
            password: "password",
            doctor_photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiCza_VrODcAhUDvlMKHTeOBBwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0096569%2Fmediaviewer%2Frm1115670528&psig=AOvVaw26f3x2kYx2UQYa4oUtUXvR&ust=1533917100224489",
            facility_name: "Eastman Medical Center",
            specialty: "Genius Child Physician",
            patients: [],
            created: Date(Date.now())
        }

    ];
    db.Doctor
        .remove({})
        .then(() => db.Doctor.collection.insertMany(doctorSeed))
        .then(data => {
            // console.log(data.doctorSeed.length + " doctors inserted");
            process.exit(0)
        })
        .catch(err => {
            console.log(err);
            process.exit(1);
        });

});
