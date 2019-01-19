const friends = require('../data/friends.js');

module.exports = app => {
    //Get Route
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        const Matches = {
            name: "",
            photo: "",
            difference: 0
        };
      
    
    //grabs parameters from client and saves them as friendData
    let friendData = req.body;
    let Scores = friendData.scores;
    let Difference = 0;
    // console.log(Scores);

    for (let i = 0; i < friends.length; i++){
        // console.log(friends[i]);
        Difference = 0;

        //Function for grabbing scores. Subtracting user scores from previous scores.
        for (let o = 0; o < friends[i].scores[o]; o ++) {
            Difference +=Math.abs(parseInt(Scores[o])- parseInt(friends[i].scores[o]));

            if (Difference <=Matches.difference) {
                Matches.name = friends[i].name;
                Matches.photo = friends[i].photo;
                Matches.difference = Difference;
            }
        }
    }

    //Pushing user score into json file.
    friends.push(friendData);

    res.json(Matches);

    });
};