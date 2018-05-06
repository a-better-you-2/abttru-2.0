const db = require("../models");

module.exports = {
    login: function (req, res) {
        console.log(req.body)
        db.User
            .findOne({})
            .where('name').equals(req.body.name)
            .where('password').equals(req.body.password)
            .then(user => {
                req.session.user = user;
                res.json(user);
                console.log(req.body);
                console.log(req.session);
            })
            .catch(err => res.status(422).json(err))
    }
}