var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Friends (DATA)
//==============================================================
var friends = [
    {
        name: "",
        photo: "???",
        scores: []
    }
]

// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });