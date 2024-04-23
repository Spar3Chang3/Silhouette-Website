import * as dc from "./DataController.js";
import crypto from 'crypto';

function hash(toHash) {
    return (crypto.createHash('sha256').update(toHash).digest('hex'));
}

async function createToken(name) {
    const time = new Date().getTime();
    const token = hash((name.substring(0, name.length/2) + time.toString() + name.substring(name.length/2)))
    handleToken(token);
    return token;
}

function handleToken(token) {
    dc.addToken(token);
    setTimeout(() => {
        dc.deleteToken(token);
    }, 24 * 60 * 60 * 1000);
}

export async function checkPassword(username, password) {
    password = hash(password);
    return (
        dc.locate(username).then(data => {
            const account = JSON.parse(data);
            console.log(account);

            if (account !== null && account.password === password) {
                return createToken(account.name);
            } else {
                return 400;
            }
        })
    );
}

export function setPassword(username, newPassword) {
    dc.locate(username).then(data => {
       const account = JSON.parse(data);
       dc.setPassword(account, newPassword);
    });
}