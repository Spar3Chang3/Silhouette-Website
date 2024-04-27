const express = require('express');
const app = express();
const https = require('https');
const DeviceDetector = require('device-detector-js');

const hostname = "silhouette.band";

function isMobile (userAgent) {
    const detector = new DeviceDetector();
    const userDevice = detector.parse(userAgent);
    return userDevice.device.type === 'smartphone' || userDevice.device.type === 'tablet';
}

app.get('/', (req, res) => {
    isMobile(req.headers['user-agent']) ? res.redirect("https://mobile.silhouette.band/") : res.redirect("https://desktop.silhouette.band/");
});

https.createServer(app);

app.listen(3000, hostname, () => {
    console.log('server listening on port 3000 of: ', hostname);
});