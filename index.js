//reading and writing files synchronously
//Reading method
const fs = require('fs')
const http = require('http')
const url = require('url')
////////////////////////////////////////
///////For Files
// const readEncryptedMessage = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(readEncryptedMessage)

// //writing method
// const ForwardMessage = `This is the result for your request ${readEncryptedMessage}\nCreated on ${new Date ()}`
// fs.writeFileSync('./txt/output1.txt', ForwardMessage)
// console.log("Done")

// //reading and writing files asynchronously
// fs.readFile('./txt/startt.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('ERROR!')
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2)
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3)

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log("it has been uploaded")
//             })
//         })
//     })
// })
// console.log("I will get here before you")
///////////////////////////////////////////////////////////
///For server

const server = http.createServer(function(req, res){
    const pathName = req.url;
    if (pathName ==='/' || pathName === '/overview'){
        res.end('this is the OVERVIEW PAGE')
    }else if(pathName === '/product'){
        res.end('this is the PRODUCT PAGE')
    }else{
        res.writeHead(404, {
            'Content-type':'text/html'
        })
        res.end(<h1>'Page not found!'</h1>)
    }
})

server.listen(8000, '127.0.0.1', function(){
    console.log('listening to requests on port 8000')
})