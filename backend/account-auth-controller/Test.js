import * as dc from "./DataController.js";
import * as pc from "./PasswordChecker.js";
import crypto from "crypto";

function hash(toHash) {
    return (crypto.createHash('sha256').update(toHash).digest('hex'));
}

pc.checkPassword("DBaker", "Daryk101").then(data => {
    console.log(data);
}).catch();