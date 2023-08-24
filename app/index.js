const fs = require("fs")
const http = require("http")
const path = require('path')
const url = require("url")

const replaceTemplet = require('./module/replaceTemplets'); 

// Read File Sync
// data.json
const data = fs.readFileSync(`${__dirname}/apidata/data.json`, "utf-8")
const dataObj = JSON.parse(data)
// Read Templet 
    // Overveiw 
    const tempOverveiw = fs.readFileSync(`${__dirname}/templetes/templet-overview.html`)
    // Card
    const tempCard = fs.readFileSync(`${__dirname}/templetes/templet-card.html`)
    
const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true)
    console.log(req.url)
    if(pathname === "/" || pathname === "overview") {
        res.writeHead(200, {"Content-type": "text/html"});
        const card = dataObj.map(el => replaceTemplet(tempCard, el)).join('')
        //const output = tempOverveiw.replace("{%DOCKER_CARDS}", card)

        res.end(card)
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-owne-header': 'Error-404'
        })
        res.end('page not found!')
    }
}) 

server.listen(8000, '127.0.0.1', () => {
 console.log('Server is Lisining to request on port 8000')
})