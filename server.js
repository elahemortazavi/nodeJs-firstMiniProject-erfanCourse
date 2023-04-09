const http =  require("http");
const products = require ("./data/products.json");
const ProductsController = require("./controllers/product.controllers");
const ErrorHandler = require("./controllers/errorHandler.controller");
const PORT = 3001;
const server = http.createServer((req, res) => {
    if(req.url == "/api/products") {
        ProductsController.get(req, res)
        
    }else if(req.url.match(/\/api\/products\/[0-9]+/)){

    }else{
        ErrorHandler.notFound(res);
    }

})

server.listen(PORT);
console.log(`run server on port ${PORT} http://localhost${PORT}`)