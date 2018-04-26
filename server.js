var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// parse application/json
app.use(bodyParser.json())

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

// Where we require routes for server
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

