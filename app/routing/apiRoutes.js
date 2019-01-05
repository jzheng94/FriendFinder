const path = require('path');

module.exports = app => {
    //Get Route
    app.get('/api/friends', (req, res) => {
        res.sendFile(path.join);
    });

    app.post('/api/friends', function (req, res) {
        res.sendFile('POST request to the homepage')
      })
}