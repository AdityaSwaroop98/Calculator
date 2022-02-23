const Pooli = require('./connection.js')
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.post("/calci", async(req, res) => {
    try {


    } catch {
        console.error(err.message);
    }
})
app.listen(7000, () => {
    console.log("DOne!");
});