const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mysql = require('mysql')
const pgsql = require('pg')
const fs = require('fs')

const app = express()

app.use(morgan('combined'))

var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "6EVgi8atYp",
    password: "6oD8mnzpSj",
    database: "6EVgi8atYp",
    PORT: "3306"
})

var pgconnection = pgsql.createConnection(
    host: "",
)

con.connect(function (err) {
    let date_ob = new Date();
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO users (id, username, first_name, middle_name, last_name, hash_id, password, created_on) VALUES (1, 'viveksinghmehta', 'vivek', 'singh', 'mehta', '123456Seven', '123456Seven!', '8 December 2019')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    })
})

// create application/json parser
var jsonParser = bodyParser.json()


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(jsonParser)
app.use(urlencodedParser)

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
})

app.get("/", function (request, response) {
  fs.readFile("./HTML/index.html", function (err, data) {
      response.writeHead(200, { 'Content-Type': 'text/html'})
      response.write(data)
      response.end()
  })  
})

const httpServer = http.createServer(app)

httpServer.listen(process.env.PORT || 1526)
console.log(process.env.PORT || 1526)
console.log('server is up and running')
