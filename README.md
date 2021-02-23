#dogrep
[![NPM](https://nodei.co/npm/@skippy76/dogrep.png?downloads=true&stars=true)](https://nodei.co/npm/@skippy76/dogrep/)

Node.js wrapper around grep command

Usage:
------

'npm install dogrep'

grep function takes:

- text or pattern to grep for
- path to file to grep
- callback function

Example:
--------

The following example shows how to use the library to perform a grep from the command line.  To execute the example you must provide the text to grep for and the filename as command line parameters.

```
const grep = require('@skippy76/dogrep');

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
```

