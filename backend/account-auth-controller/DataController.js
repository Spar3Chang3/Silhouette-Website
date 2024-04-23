import fs from "fs";

const filepath = "../accounts/"

export async function locate(username) {
    try {
        return await fs.promises.readFile((`${filepath + username}.json`), "utf8");
    } catch (err) {
        console.log("FILE NOT FOUND!", err);
        return null;
    }

}

export async function getTokens() {
    try {
        return await fs.promises.readFile((`${filepath}tokens.json`), 'utf8');
    } catch (err) {
        console.log("Could not locate file for reading tokens...");
        throw err;
    }
}

export function addToken(token) {
    try {
        getTokens().then(async data => {
            let tokens = JSON.parse(data);
            tokens.push(token);
            await fs.promises.writeFile(`${filepath}tokens.json`, JSON.stringify(tokens));
        });
    } catch (err) {
        console.log("Could not locate file for adding token...");
        throw err;
    }
}

export function deleteToken(token) {
    try {
        getTokens().then(async data => {
            let tokens = JSON.parse(data);
            let indexToDelete = tokens.indexOf(token);
            if (indexToDelete !== -1) {
                tokens.splice(indexToDelete, 1);
                await fs.promises.writeFile(`${filepath}tokens.json`, JSON.stringify(tokens));
            } else {
                console.log("Token not found for: ", token);
            }
        });
    } catch (err) {
        console.log("Error deleting token: ");
        throw err;
    }
}


export function setName(account, name) {
    if (account !== null) {
        account.name = name;
        fs.writeFile((`${filepath + account.username}.json`), JSON.stringify(account), (err) => {
            if (err) console.error("Error writing file: ", err);
        });
    }
}

export async function setPassword(account, hashedPassword) {
    try {
        if (account !== null && account !== undefined) {
            account.password = hashedPassword;
            await fs.promises.writeFile(`${filepath + account.username}.json`, JSON.stringify(account));
        } else {
            console.log("Account undefined :(");
        }
    } catch (err) {
        console.error("Problem locating file: ", err);
    }
}