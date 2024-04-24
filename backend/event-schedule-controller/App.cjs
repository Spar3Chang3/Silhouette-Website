const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');

const filepath = "./event-schedule.json";
const hostname = "events.silhouette.band";

app.get('/event-schedule', (req, res) => {
    fs.readFile(filepath, (err, data) => {
        if (err) {
            res.status(500).send("Server encountered a file reading error");
        } else {
            res.set('Content-Type', 'application/json');
            res.set('Access-Control-Allow-Origin', '*');
            res.send(data);
        }
    });
});

https.createServer(app);
app.listen(3000, hostname, () => {
    console.log('Server listening on port 3000 of: ', hostname);
});