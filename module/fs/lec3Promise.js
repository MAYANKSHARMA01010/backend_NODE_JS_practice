const fs = require('fs');

function promiseFn(num) {
    return new Promise((res,rej) => {
        if (num > 20) {
            res("Promise Resolved")
        }
        else {
            rej("Promise Rejected")
        }
    })
}

promiseFn(40).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

fs.writeFile('Promisea.txt', 'This is a.txt file', (err) => { if (err) throw err; });
fs.writeFile('Promiseb.txt', 'This is b.txt file', (err) => { if (err) throw err; });
fs.writeFile('Promisec.txt', 'This is c.txt file', (err) => { if (err) throw err; });

function readFileWithPromise(filePath) {
    return new Promise((res,rej) => {
        fs.readFile(filePath,'utf-8',(error,data) => {
            if (data) {
                res(data)
            }
            else {
                rej(error)
            }
        })
    })
}

let result = ""; // ✅ added missing initialization

readFileWithPromise('Promisea.txt').then((data)=>{
            result = result + data
            readFileWithPromise('Promiseb.txt').then((data1)=>{
                 result = result + data1
                   readFileWithPromise('Promisec.txt').then((data2)=>{
                       result = result + data2
                       fs.writeFile('PromiseResult.txt', `This is the result form ASYNC:\n${result}`, (error) => {
                           if (error) throw error;
                           else console.log('Successfully written to result.txt');
                       });
                  }) 
            }) 
}).catch((error)=>{
    console.log(error)
})

fs.writeFile('PromiseASYNCa.txt', 'This is a.txt file', (err) => { if (err) throw err; });
fs.writeFile('PromiseASYNCb.txt', 'This is b.txt file', (err) => { if (err) throw err; });
fs.writeFile('PromiseASYNCc.txt', 'This is c.txt file', (err) => { if (err) throw err; });

async function fetchData() {
    const data = await readFileWithPromise('PromiseASYNCa.txt')
    const data1 = await readFileWithPromise('PromiseASYNCb.txt')
    const data2 = await readFileWithPromise('PromiseASYNCc.txt')
    fs.writeFile('PromiseASYNCResult.txt', `This is the result form ASYNC:\n${data}\n${data1}\n${data2}`, (error) => {
        if (error) throw error;
        else console.log('Successfully written to result.txt');
    });
}
