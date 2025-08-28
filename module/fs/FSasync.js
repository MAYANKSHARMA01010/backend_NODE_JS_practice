const fs = require('fs'); // fs (file system) is imported => inbuild module
const fsp = require('fs').promises; // promise-based fs

console.log("START");   

const data = fs.readFileSync('async.txt', 'utf8'); // Reading file synchronously
console.log(data); // Output the content of the file

console.log("Medium");
// error handling is same of append read write delete using try catch

// without try catch readFile error can be handled
const notCreated = fs.readFile('notCreated.txt', 'utf8', (err) => {
    if (err) {
        console.log("File is Not Created"); 
    } 
    else {
        console.log(notCreated);
    }
});

// Writing file asynchronously
try {
    fs.writeFile('nonAsync.txt','async data file is Creating', (err) => {
        console.log('File created successfully.');
    });
}
catch(err) {
    console.log('You are Trying to write/append a unsupported data in file');
}

// Appending to file asynchronously with proper error handling
try {
    fs.appendFile('nonAsync.txt',1, (err) => {
        console.log('File created successfully.');
    });
}
catch(err) {
    console.log('You are Trying to write/append a unsupported data in file');
}

// reading file with proper error handling
fs.readFile('async.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("File is Not Created");
    } 
    else {
        console.log("Reading the data ---->",data);
    }
});

console.log("END");

// with fsp
// fsp.writeFile('nonAsync.txt', 'async data file is Creating')
//     .then(() => {
//         console.log('File created successfully.');
//     })
//     .catch(err => {
//         console.log('You are Trying to write/append a unsupported data in file');
// });
// fsp.appendFile('nonAsync.txt', 2)
//     .then(() => {
//         console.log('File appended successfully.');
//     })
//     .catch(err => {
//         console.log('You are Trying to write/append a unsupported data in file');
// });