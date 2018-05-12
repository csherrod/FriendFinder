var friends = require("../data/friends"); //Double check this later

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.send("Welcome to the Friends Page!");
        res.json(friends.friendz);
    });

    app.post("/api/friends", function(req, res) {
        var friendMatch = req.body;
        res.json(friends.match(friendMatch));
        // match will return a json of a value
        

        // if (friends.length < 10) {
        //     friends.push(req.body);
        //     res.json(true);
        // }
        // else {console.log(res);
        // }
    
    });
};