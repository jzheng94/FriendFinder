//Attempting use of ES6 syntax

const express = require("express");
// const scoreTally = [];

const app = express();

const PORT = process.env.PORT || 8181;

//Data-parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Enables express to access the routes for displaying pages
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Listens for server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });