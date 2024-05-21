const http = require('http')
const PORT = 4000
console.log(http)
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','app')
    res.end('Hello World')
})

server .listen(PORT,()=>{
    console.log('Server is running on port ${PORT}')
})