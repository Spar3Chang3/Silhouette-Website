import { checkPassword } from "./PasswordChecker.js";
import http from 'http';

function startHandler() {
    const server = http.createServer((req, res) => {
        if (req.url === "/login") {
            switch (req.method) {
                case 'GET': {
                    let credentials = decode(req.headers.authorization);
                    let login = checkPassword(credentials[0], credentials[1]).then(login => {
                        res.writeHead(
                            (login === 400 ? 400 : 200),
                            {'Authorization': 'Basic' + btoa(login + "")}
                        );
                        res.end();
                        break;
                    });
                }
                case 'PUT': {
                    //TODO: add account creation
                    break;
                }
            }
        }
    });
}

function decode(headerAuthorizationInput) {
    let decodedHeader = atob(headerAuthorizationInput);
    return decodedHeader.split(':'); //username, password
}