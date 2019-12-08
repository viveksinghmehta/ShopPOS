/*
 * Filename: /Users/apple/Documents/Vivek/ShopPOS/Starting.js
 * Path: /Users/apple/Documents/Vivek/ShopPOS
 * Created Date: Thursday, December 5th 2019, 10:49:19 pm
 * Author: Vivek Singh Mehta
 * 
 * Copyright (c) 2019 Vivek Singh Mehta
 */
// import http from 'http';
// import express from 'express';
// import bodyParser from 'body-parser';
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


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
console.log(process.env.PORT)
console.log('server is up and running');
