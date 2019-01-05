const path = require('path');

module.exports = app => {
    //Survey page
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //Routes to Home page
    app.use( (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}