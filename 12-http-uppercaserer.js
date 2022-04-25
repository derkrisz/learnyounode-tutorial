"use strict";

const http = require('http');
const { Transform } = require('stream');
const port = process.argv[2];

const httpServer = http.createServer((request, response) => {
    if (request.method === 'POST') {
        const transformStream = new Transform();
        transformStream._transform = (chunk, encoding, callback) => {
            transformStream.push(chunk.toString().toUpperCase());
            callback();
        }
        request.pipe(transformStream).pipe(response)
    }
});

httpServer.listen(port)

/*
official solution

 const http = require('http')
    const map = require('through2-map')
    
    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/