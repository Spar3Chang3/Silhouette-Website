import { storeToken, deleteToken, locate, setPassword } from "./DataController";
const crypto = require('crypto');

function hash(toHash) {
    return (crypto.createHash('sha256').update(toHash).digest('hex'));
}

function createToken(account) {
    const time = new Date().getTime();
    const name = hash(account.name);
    const token = hash((name.substring(0, name.length/2) + time.toString() + name.substring(name.length/2)))
    handleToken(account, token);
    console.log("Made it past this point!");
    return token;
}

function handleToken(account, token) {
    storeToken(account, token);

    setTimeout(() => {
        console.log("Didn't work :(");
        deleteToken(account, token);
    }, 24 * 60 * 60 * 1000);
}

export function checkPassword(username, password) {
    password = hash(password);

    const account = locate(username);

    if(account !== null && account.password.equals(password)) {
        return createToken(account);
    } else {
        return "400";
    }
}

export function setPassword(username, newPassword) {
    setPassword(locate(username), newPassword);
}