const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end("It works fine!");
  })
  .listen(process.env.PORT || 8080);
