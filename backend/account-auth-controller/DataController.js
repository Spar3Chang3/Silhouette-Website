const fs = require('fs');
const filepath = "../accounts/"

export function locate(username) {
   return ( fs.readFile((`${filepath + username}.json`), (err, data) => {
        if (err) {
            console.log("Could not locate file...");
            return null;
        } else {
            return (data);
        }
    })
   );
}

function getTokens() {
    return (
        fs.readFile((`${filepath}tokens.json`), (err, data) => {
            if (err) {
                console.log("Could not locate file...");
                return null;
            } else {
                return (data);
            }
        })
    );
}

//TODO: finish getTokens return method and implement storeToken for tokens.json

export function storeToken(account, token) {
    if (account !== null) {
        account.tokens.push(token);
        fs.writeFile((`${filepath + account.username}.json`), JSON.stringify(account), (err) => {
            if (err) console.error("Error writing file: ", err);
        });
    }
}

export function storeToken(token) {

}

export function deleteToken(account, token) {
    if (account !== null) {
        account.tokens[account.tokens.findIndex(token)] = "";
        fs.writeFile((`${filepath + account.username}.json`), JSON.stringify(account), (err) => {
            if (err) console.error("Error writing file: ", err);
        });
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

export function setPassword(account, hashedPassword) {
    if (account !== null) {
        account.password = hashedPassword;
        fs.writeFile((`${filepath + account.username}.json`), JSON.stringify(account), (err) => {
            if (err) console.error("Error writing file: ", err);
        });
    }
}
