const http =  require("http");
const products = require ("./data/products.json");
const PORT = 3001;
const server = http.createServer((req, res) => {
    if(req.url == "/api/products") {
        res.writeHead(200, {'content-Type':'application.json'});
        res.write(JSON.stringify(products))
        res.end()
    }else{
        res.writeHead(404, {'content-Type': 'application.json'});
        res.write(JSON.stringify({
            message: "route not found"
        }))
        res.end()
    }

})

server.listen(PORT);
console.log(`run server on port ${PORT} http://localhost${PORT}`)