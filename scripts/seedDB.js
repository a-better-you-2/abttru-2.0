const mongoose = require("mongoose");
const db = require("../models");
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
mongoose.Promise = global.Promise;
let doctorPassword;
// This file empties the Books collection and inserts the books below

mongoose.connect(
    // process.env.MONGODB_URI || "mongodb://localhost/aBetterYou",
    process.env.MONGODB_URI || "mongodb://heroku_fpgs53h1:rglas4qvbobd74prkoskulikdt@ds035735.mlab.com:35735/heroku_fpgs53h1",
    {
        useMongoClient: true
    }
);



bcrypt.hash('marshmallow', SALT_WORK_FACTOR, function (err, hash) {
    if (err) throw err;
    console.log(hash);
    let doctorPassword = hash;
    let doctorSeed = [
        {
            name: "Randy K Mellow",
            email: "rsmellow@gmail.com",
            password: doctorPassword,
            doctor_photo: "https://media.licdn.com/dms/image/C5603AQHZBYSHdmoC_A/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=7je87Nmx20hdTyNCPB6zRKC1DMKWvO0A4a9a5SVLayk",
            facility_name: "UNC at Chapel Hill",
            specialty: "Head of JavaScript Development",
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




