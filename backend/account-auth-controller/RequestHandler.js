import { checkPassword } from "./PasswordChecker";

const fs = require('fs');
const http = require('http');

function startHandler() {
    const server = http.createServer((req, res) => {
        if (req.url === "/login") {

            switch (req.method) {
                case 'GET': {
                    const login = checkPassword(req.auth.username, req.auth.password);
                    res.writeHead(
                        (login === '400' ? 400 : 200),
                        {"Content-Type": "text/plain"}
                    );
                    res.end(login);
                }
            }
        }
    });
}

function validate(username, password) {
    if (checkPassword(username, password) === '400') {
        return false;
    } else {
        return true;
    }
}