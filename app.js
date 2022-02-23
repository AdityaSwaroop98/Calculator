const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const client = require('./connection.js');
client.connect(function(err) {
    if (!err)
        console.log('DB Connected')
});

app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.get("/hs", (req, res) => {
    res.render("hs");
});
app.get('', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.get("/history", (req, res) => {
    client.query('select * from cal', (err, result) => {
        if (!err) {
            res.render("hs", { 'item': result.rows });
        } else {
            console.log(err.message);
            console.log('Server Stopped');
        }
    })
})
app.post("/", (req, res) => {

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    if (req.body.res == '+') {
        var output = n1 + n2;
        res.send('Result:' + output);
        client.connect((err) => {
            var pg = "insert into calci(myInput,myInput1,result,btn,time) values('" + req.body.num1 + "', '" + req.body.num2 + "','" + req.body.res + "','" + output + "',current_timestamp)"

        })
    } else if (req.body.res == '-') {
        var output = n1 - n2;
        res.send('Result:' + output);
        client.connect((err) => {
            var pg = "insert into calci(myInput,myInput1,result,btn,time) values('" + req.body.num1 + "', '" + req.body.num2 + "','" + req.body.res + "','" + output + "',current_timestamp)"

        })
    } else if (req.body.res == '*') {
        var output = n1 * n2;
        res.send('Result:' + output);
        client.connect((err) => {
            var pg = "insert into calci(myInput,myInput1,result,btn,time) values('" + req.body.num1 + "', '" + req.body.num2 + "','" + req.body.res + "','" + output + "',current_timestamp)"

        })
    } else if (req.body.res == '/') {
        var output = n1 / n2;
        res.send('Result:' + output);
        client.connect((err) => {
            var pg = "insert into calci(myInput,myInput1,result,btn,time) values('" + req.body.num1 + "', '" + req.body.num2 + "','" + req.body.res + "','" + output + "',current_timestamp)"

        })
    } else if (req.body.res == '%') {
        var output = n1 % n2;
        res.send('Result:' + output);
        client.connect((err) => {
            var pg = "insert into calci(myInput,myInput1,result,btn,time) values('" + req.body.num1 + "', '" + req.body.num2 + "','" + req.body.res + "','" + output + "',current_timestamp)"

        })
    } else if (req.body.res == 'C') {
        var output = " ";
        res.send(" ");
    } else {
        res.send(errorMessage);
    }
});


app.listen('7000', (res) => {
    console.log("Connected to port 7000")
})