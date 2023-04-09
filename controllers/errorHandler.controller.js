const notFound = (res) => {
    res.writeHead(404, { "content-Type": "application.json" });
    res.write(
      JSON.stringify({
        message: "route not found",
      })
    );
    res.end();
    
}

const ErrorHandler = {
    notFound
}

module.exports = ErrorHandler;