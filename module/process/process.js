const process = require('process')
const processArgv = process.argv

console.log(processArgv);
// mayanksharma@Mayanks-MacBook-Pro-6 NODE JS % node process.js 1 2 3 4 5 
// [
//   '/Users/mayanksharma/.nvm/versions/node/v20.19.3/bin/node',
//   '/Users/mayanksharma/Downloads/Pratice/NODE JS/process.js',
//   '1',
//   '2',
//   '3',
//   '4',
//   '5'
// ]


module.exports = {
    process,
    processArgv
}