const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "viveksinghmehta",
    password: "123456"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });


app.use(jsonParser);
app.use(urlencodedParser);

app.get("/test", function (request, response) {
    let newJson = {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "image":
        {
            "url": "images/0001.jpg",
            "width": 200,
            "height": 200
        },
        "thumbnail":
        {
            "url": "images/thumbnails/0001.jpg",
            "width": 32,
            "height": 32
        }
    }
    response.status(200);
    response.json(newJson);
});

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT || 1526);
console.log(process.env.PORT || 1526);
console.log('server is up and running');
