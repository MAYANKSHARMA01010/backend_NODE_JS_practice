const fs = require('fs').promises;

async function readFile(filePath) {
    const data = await fs.readFile("./test.txt", 'utf8');
    console.log(data);
}
readFile("./test.txt");