const fs = require('fs')

const readMessage = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(readMessage)

const replymessage = `This is the information we could find about avocade: ${readMessage}\nCreated on ${new Date()}`
fs.writeFileSync('./txt/ouput.txt', replymessage)
console.log("Job Done")
