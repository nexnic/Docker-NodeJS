const fs = require("fs")
const http = require("http")
const url = require("url")


const data = fs.readFileSync(`${__dirname}/apidata/data.json`, "utf-8")
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true)

    if(pathname === "/" || pathname === "overview") {
        res.writeHead(200, {"Content-type": "text/html"});
        const card = dataObj.map(el => replaceTemplet(tempCard, el)).join("")
        const output = tempOverview.replace("{%PRODUCT_CARDS}", card)

        res.end(output)
    } 
}) 