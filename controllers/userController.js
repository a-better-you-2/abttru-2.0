const db = require("../models");

module.exports = {
    findOne: function (req, res) {
        console.log(req.body)
        db.User
            .findOne({})
            .where('name').equals(req.body.name)
            .where('password').equals(req.body.password)
            .then(dbModel => {
                res.json(dbModel)
                console.log(req.body)
            })
            .catch(err => res.status(422).json(err))
    }
}