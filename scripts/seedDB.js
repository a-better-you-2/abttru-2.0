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
        name: "Doogie Howser",
        user_name: "Doogie",
        password: "NPH",
        created: Date(Date.now())
    },
    {
        name: "James Smith",
        user_name: "Jimmy",
        password: "password",
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

const userSeed = [
    {
        name: "John Doe",
        password: "default password",
        risk_factor: "high-cholesterol",
        diet_recommendation: "low-sodium",
        diet_restriction: "vegan",
        created: Date(Date.now())
    },
    {
        name: "Jane Doe",
        password: "default password",
        risk_factor: "healthy",
        diet_recommendation: "balanced",
        diet_restriction: "vegetarian",
        created: Date(Date.now())
    }
]

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        // console.log(data.userSeed.length + " users inserted");
        process.exit(0)
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });