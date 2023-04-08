const http =  require("http");
const products = require ("./data/products.json");
const ProductsController = require("./controllers/product.controllers")
const PORT = 3001;
const server = http.createServer((req, res) => {
    if(req.url == "/api/products") {
        ProductsController.get(req, res)
        
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