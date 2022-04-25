"use strict";

const { createReadStream } = require('fs');
const http = require('http')
const [,, port, fileLocation] = process.argv;

const staticServe = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    createReadStream(fileLocation).pipe(response);
}

const httpServer = http.createServer(staticServe);

httpServer.listen(port)

/*
official solution

  const http = require('http')
    const fs = require('fs')
    
    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/