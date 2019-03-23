var userDetails = {
    username: "taf",
    password: "password"
};

var database = [userDetails,
    {
        username: "sean",
        password: "password"
    },
    {
        username: "chris",
        password: "password"
    },
    {
        username: "sam",
        password: "password"
    }
];

var newsFeed = [{
        username: "mac",
        timeline: "Not the McDonalds guy"
    },
    {
        username: "admin",
        timeline: "Not my problem"
    },
    {
        username: "tester",
        timeline: "Everything is broken!"
    }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(userName, password) {
    if (isUserValid(userName, password)) {
        console.log(newsFeed);
    } else {
        alert("sorry, wrong username/password");
    }
}

signIn(userNamePrompt, passwordPrompt);