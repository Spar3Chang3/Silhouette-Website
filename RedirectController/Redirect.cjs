const express = require('express');
const app = express();
const https = require('https');
const isMobile = require('is-mobile');

const hostname = "silhouette.band";

app.get('/', (req, res) => {
    isMobile(req.headers['user-agent']) ? res.redirect("https://mobile.silhouette.band/") : res.redirect("https://desktop.silhouette.band/");
});

https.createServer(app);

app.listen(3000, hostname, () => {
    console.log('server listening on port 3000 of: ', hostname);
});