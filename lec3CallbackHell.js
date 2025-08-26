// Read content form a.txt b.txt and c.txt then combine all content into a result.txt async read the files
const fs = require('fs');


// using synchronous
fs.writeFileSync('CallBackHella.txt', 'This is a.txt file');
fs.writeFileSync('CallBackHellb.txt', 'This is b.txt file');
fs.writeFileSync('CallBackHellc.txt', 'This is c.txt file');

const dataA = fs.readFileSync('CallBackHella.txt', 'utf-8');
const dataB = fs.readFileSync('CallBackHellb.txt', 'utf-8');
const dataC = fs.readFileSync('CallBackHellc.txt', 'utf-8');

fs.writeFileSync('CallBackHellResultSYNC.txt', `This is the result form SYNC:\n${dataA}\n${dataB}\n${dataC}`);

fs.readFile('CallBackHella.txt',"utf-8",(error,data) => {
    if (error) throw error;
    fs.readFile('CallBackHellb.txt',"utf-8",(error,data1) => {
        if (error) throw error;
        fs.readFile('CallBackHellc.txt',"utf-8",(error,data2) => {
            if (error) throw error;
                fs.writeFile('CallBackHellResultASYNC.txt', `This is the result form ASYNC:\n${data}\n${data1}\n${data2}`, (error) => {
                    if (error) throw error;
                    else console.log('Successfully written to result.txt');
                });
        })
    })
})