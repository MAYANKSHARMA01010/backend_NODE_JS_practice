const fs = require('fs'); // fs (file system) is imported => inbuild module

// Creating a new file
fs.writeFileSync('fsFile.txt', 'Hello, this is a new file created using fs.writeFileSync');
console.log('File created successfully.');

// OverWriting the file
fs.writeFileSync('fsFile.txt', 'This content has replaced the previous content in the file.');
console.log('File overwritten successfully.');

// We can't add numbers in the file 
// fs.writeFileSync('fsFile.txt', 1242);
// It give error -----> TypeError: The "data" argument must be of type string or an instance of Buffer or ArrayBuffer. Received type number


// Reading the content of the file
const data = fs.readFileSync('fsFile.txt');
console.log('Reading the file without encoding');
console.log(data);

const data1 = fs.readFileSync('fsFile.txt', 'utf8');
console.log('Reading the file with utf8 encoding');
console.log(data1);


// Appending content to the file
// \n ---> is used to add new data in new line
// if the file is not created appendFileSync also create newfile
fs.appendFileSync('fsFile.txt', '\nThis content has been appended to the file.');
console.log('Content appended successfully.');


// Delete file
fs.unlinkSync('fsFile.txt');
console.log('File deleted successfully.');