const db = require("../models");

module.exports = function (app) {

    app.get("/home", function (req, res) {
        res.render(path.join(__dirname, "../views/home-page.handlebars"));
    });

    app.post("/profile", function (req, res) {
        console.log(req.body);
        var userName = req.body.User_name;
        var userPassWord = req.body.password;

        db.User.findAll({
            where: {
                User_name: userName,
                password: userPassWord
            },
        }).then(User => {
            console.log(User);
            if (User.length == 0) {
                res.redirect('/');
            }
            else {
                req.session.user_name = userName;
                res.redirect('/profile');
            }
        });
    });

    app.get("/profile", function (req, res) {
        console.log("--------------------------");
        // console.log(req);

        db.User.belongsTo(db.healthStats, { foreignKey: 'id', constraints: false });
        db.User.belongsTo(db.Recipe, { foreignKey: 'id', constraints: false });
        db.User.findAll({
            where: { User_name: req.session.user_name },
            include: [{ model: db.healthStats }, { model: db.Recipe }], // load all healthStats

        }).then(User => {
                // console.log(User);
                let hbsUser = { Users: User.map(x => x.dataValues), recipes: [], faveRecipe: [] };
                
            db.Recipe.findAll({
                where: { User_id: User.map(x => x.dataValues.id).toString() },
            }).then(Recipe => { 
                console.log(Recipe);
                hbsUser.recipes = Recipe.map(x => x.dataValues);
                
                let recipeName = Recipe.map(x => x.dataValues.recipe_name);
                // console.log(recipeName);
                let recipeImg = Recipe.map(x => x.dataValues.recipe_img);
                // console.log(recipeImg);
                let recipeUrl = Recipe.map(x => x.dataValues.recipe);
                // console.log(recipeUrl);
                let recipeUri = Recipe.map(x => x.dataValues.recipe_uri);
                // console.log(recipeUri);
                // console.log(recipeUri[0].replace(/[#]/gi, '%23'));

                //NEED TO REPLACE # with %23!!//
                // axios.get('https://api.edamam.com/search?r=' + recipeUri[0].replace(/[#]/gi, '%23') + '&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99')
                //     .then(response => {
                //         faveRecipe = response.data;
                //         // console.log(faveRecipe);
                //         // console.log(response.data.explanation);
                //     }).catch(error => {
                //         console.log(error);
                // });
            }).then(() => {
                console.log(hbsUser);
                res.render("User-page", hbsUser);});
            
        }).catch(function (error) {
            console.log(error);
        });
    });

    app.post("/profile/save", function (req, res) {
        console.log(req.body);
        // Save a recipe with the data available to us in req.body
        db.Recipe.create({
            User_id: req.body.id,
            recipe_name: req.body.recipe_name,
            recipe_img: req.body.recipe_img,
            recipe: req.body.recipe,
            recipe_uri: req.body.recipe_uri,   
        }).then(function (savedRecipe) {
            res.send(savedRecipe);
        });
    });

    app.put("/profile/fave", function (req, res) {
        // Save a recipe with the data available to us in req.body
        console.log(req.body);
        console.log(req.body.id);
        console.log("------------------------");

        db.Recipe.update({
            favorite: false
        }, { where: {
                favorite: true,
                User_id: req.body.id
            }
        }).then(function (Recipe) {
            db.Recipe.update({
                favorite: req.body.favorite
                }, { where: {
                        User_id: req.body.id,
                        recipe: req.body.recipe
                }
            }).then(function (savedRecipe) {
                    console.log(savedRecipe);
            });
        });
    });
}