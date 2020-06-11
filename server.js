const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const sendmail = require('sendmail')({silent: true});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || "3001";

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post('/SubmitForm', (req, res) => {
    console.log(req.body);
    sendmail({
        from: req.body.email,
        to: "addis.wanted@gmail.com",
        subject: `Tips - ${req.body.name}`,
        html: req.body.message
    }, function(err, reply) {
    });
    res.send("OK");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});