const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/aBetterYou",
    {
        useMongoClient: true
    }
);

const doctorSeed = [
    {
        name: "Randy K Mellow",
        email: "rsmellow@gmail.com",
        password: "marshmallow",
        doctor_photo: "https://media.licdn.com/dms/image/C5603AQHZBYSHdmoC_A/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=7je87Nmx20hdTyNCPB6zRKC1DMKWvO0A4a9a5SVLayk",
        facility_name: "UNC at Chapel Hill",
        specialty: "Head of JavaScript Development",
        patients: [],
        created: Date(Date.now())

    }
]

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

// const userSeed = [
//     {
//         name: "John Doe",
//         password: "default password",
//         risk_factor: "high-cholesterol",
//         diet_recommendation: "low-sodium",
//         diet_restriction: "vegan",
//         created: Date(Date.now())
//     },
//     {
//         name: "Jane Doe",
//         password: "default password",
//         risk_factor: "healthy",
//         diet_recommendation: "balanced",
//         diet_restriction: "vegetarian",
//         created: Date(Date.now())
//     }
// ]

// db.User
//     .remove({})
//     .then(() => db.User.collection.insertMany(userSeed))
//     .then(data => {
//         // console.log(data.userSeed.length + " users inserted");
//         process.exit(0)
//     })
//     .catch(err => {
//         console.log(err);
//         process.exit(1);
//     });