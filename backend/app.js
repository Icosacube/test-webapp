const express = require("express");
const Quote = require('inspirational-quotes');
const dotenv = require('dotenv').config()

const app = express();

app.get("/", function(req, res) {
    res.send(Quote.getQuote());
});

let port = process.env.PORT;
console.log(port);
if(port == null || port == "") {
    port = 5000;
}

app.listen(port, function() {
    console.log("Server started successfully on port", port);
});