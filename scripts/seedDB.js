const mongoose = require("mongoose");
const db = require("../models");
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
mongoose.Promise = global.Promise;
let doctorPassword;
// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/aBetterYou",
    {
        useMongoClient: true
    }
);



bcrypt.hash('marshmallow', SALT_WORK_FACTOR, function (err, hash) {
    if (err) throw err;
    let doctorPassword = hash;
    let doctorSeed = [{
        name: "Randy K Mellow",
        email: "rsmellow@gmail.com",
        password: doctorPassword,
        doctor_photo: "https://media.licdn.com/dms/image/C5603AQHZBYSHdmoC_A/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=Qzy7Ukri7hgu3AZPn3pr9sE0ghcFSNy-8qcyGO8jkhw",
        facility_name: "UNC at Chapel Hill",
        specialty: "Head of JavaScript Development",
        patients: [],
        created: Date(Date.now())
    },
    {
        name: "Doogie Houser, M.D.",
        email: "doogie@gmail.com",
        password: "password",
        doctor_photo: "http://mccurdywriting.com/wp-content/uploads/2010/09/Doogie_Howser_MD_290x400-290x300.jpg",
        facility_name: "Eastman Medical Center",
        specialty: "Child Genius Physician",
        patients: [],
        created: Date(Date.now())
    }];
    db.Doctor
        .remove({})
        .then(() => db.Doctor.collection.insertMany(doctorSeed))
        .then(data => {
            process.exit(0)
        })
        .catch(err => {
            res.send(err);
            process.exit(1);
        });

});




