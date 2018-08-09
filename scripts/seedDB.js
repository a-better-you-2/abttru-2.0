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
    console.log(hash);
    let doctorPassword = hash;
    let doctorSeed = [
        {
            name: "Randy K Mellow",
            email: "rsmellow@gmail.com",
            password: doctorPassword,
            doctor_photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwibqtDBrODcAhWDu1MKHdTuC1AQjRx6BAgBEAU&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frsmellow&psig=AOvVaw0dEit4IplwfXBwuh8WSAOZ&ust=1533917067783032",
            facility_name: "UNC at Chapel Hill",
            specialty: "Head of JavaScript Development",
            patients: [],
            created: Date(Date.now())

        },
        {
            name: "Doogie Houser, M.D.",
            email: "doogie@gmail.com",
            password: doctorPassword,
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




