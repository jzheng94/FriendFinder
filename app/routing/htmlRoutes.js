const path = require('path');

module.exports = app => {
    //Survey page
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //Defaults to homepage regardless of what is entered unless already specified above
    app.use( (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}