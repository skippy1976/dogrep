#dogrep
[![NPM](https://nodei.co/npm/dogrep.png?downloads=true&stars=true)](https://nodei.co/npm/dogrep/)

Node.js wrapper around grep command

Usage:

npm install dogrep

const grep = require('dogrep');

grep function takes:

- text or pattern to grep for
- path to file to grep
- callback function

Example:

const grep = require('dogrep');

const syntax = "Syntax: <test to grep> <file path>";

var txt = "";
var filepath = "";

if (process.argv.length < 3) {
        console.log("Missing message text\n" + syntax);
        process.exit();
}

if (process.argv.length < 4) {
        console.log("Missing file path\n" + syntax);
        process.exit();
}

for (counter = 2; counter < process.argv.length - 1; counter++) {
        txt += process.argv[counter] + " ";
}

// remove trailing space
txt = txt.substring(0, txt.length - 1);

filepath = process.argv[process.argv.length - 1];

console.log('Grepping file ' + filepath + ' for: "' + txt + '"');

grep(txt, filepath, function (err, result) {
        if (err) {
                console.log("Got error result: "+ err.code + " - " + err.error);
        } else {
                console.log(result);
        }
});


