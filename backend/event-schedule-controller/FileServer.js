const fs = require('fs');
const http = require('http');

const hostname = "localhost";
const port = 3000
const filepath = "../events/event-schedule.json";

function startServer() {
    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            switch (req.method) {
                case 'GET': {
                    fs.readFile(filepath, (err, data) => {
                        if (err) {
                            res.writeHead(500, {"Content-Type": "text/plain"});
                            res.end("Server encountered a file reading error");
                        } else {
                            res.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
                            res.end(data);
                        }
                    });
                    break;
                }
                case 'PUT': {
                    //TODO: add all variables for events and create json that stores all valid tokens

                    let file;
                    try {
                        file = fs.readFileSync(filepath);
                    } catch {
                        res.writeHead(500, {"Content-Type": "text/plain"});
                        res.end("Server encountered a file reading error");
                    }
                }
            }

        } else {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.end("Not Found");
        }
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

startServer();
