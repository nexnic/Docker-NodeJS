const fs = require("fs")
const http = require("http")
const path = require('path')
const url = require("url")

// Constants
const PORT = 8000;
// Import module 
const replaceTemplet = require('./module/replaceTemplets'); 

// Read File Sync
// data.json
const data = fs.readFileSync(`${__dirname}/apidata/data.json`, "utf-8")
const dataObj = JSON.parse(data)
// Read Templet 
    // Overveiw 
    const tempOverveiw = fs.readFileSync(`${__dirname}/templetes/templet-overview.html`, 'utf-8')
    // Card
    const tempCard = fs.readFileSync(`${__dirname}/templetes/templet-card.html`, 'utf-8')
    
    
const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true)
    if(pathname === "/" || pathname === "overview") {
        res.writeHead(200, {"Content-type": "text/html"});
        const cardHTML = dataObj.map(el => replaceTemplet(tempCard, el)).join('')
        const output = tempOverveiw.replace("{%DOCKER_CARDS}", cardHTML)

        res.end(output)
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-owne-header': 'Error-404'
        })
        res.end('page not found!')
    }
}) 

server.listen(PORT, () => {
 console.log(`Server is Listen on Port: ${PORT}`)
})