const express = require("express");
const app = express();

module.exports = {
doctorController: require("./doctorController"),
userController: require("./userController")
}