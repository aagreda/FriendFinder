//require express, body-parse and path
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

//set up the express app
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

//Routes ===

//require html route file 
require("./routes/html-routes.js")(app);

//require api route file
require("./routes/api-routes.js")(app);

//Listen to the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


