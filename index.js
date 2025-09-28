// import React from "react";
const fs = require('fs') // fs (file system) is imported => inbuild module
const {
    Random,
    Add,
    Subtract,
    Multiply,
    Divide,
} = require('./module/other/localModules.js'); // local module imported
const figlet = require('figlet'); // figlet is a third-party module
const {
    process,
    processArgv,
} = require('./module/process/process.js'); // process is a local module

// fs.writeFileSync use create a file (fileName, data(optional))
fs.writeFileSync('node.txt','Hurray!!! We have learned how to import inBuild modules')
fs.writeFileSync("newNode.txt", "This is a new file created using fs.writeFileSync")

const res = Random();
const res2 = Add(20, 30);

console.log(res,res2);

console.log(
    figlet.text(
        "Randi!!!",
        {
            font: "Ghost",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: true,
        },
        function (err, data) {
            if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
            }
            console.log(data);
        }
    )
);

console.log(process);
console.log(processArgv);