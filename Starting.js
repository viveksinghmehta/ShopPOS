/*
 * Filename: /Users/apple/Documents/Vivek/ShopPOS/Starting.js
 * Path: /Users/apple/Documents/Vivek/ShopPOS
 * Created Date: Thursday, December 5th 2019, 10:49:19 pm
 * Author: Vivek Singh Mehta
 * 
 * Copyright (c) 2019 Vivek Singh Mehta
 */
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get("/test", function (request, response) {
    response.end("TEsting");
})

const app = express();

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT || 1526);
