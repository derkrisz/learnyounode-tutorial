"use strict";

const http = require('http');
const { URL } = require('url');
const port = process.argv[2];

const getISOFormat = date => {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

const getUnixTime = date => {
    return {
        unixtime: date.getTime()   
    };
}

const httpServer = http.createServer((request, response) => {
    const urlObject = new URL(request.url, `http://localhost:${port}`);
    const path = urlObject.pathname;
    const date = new Date(urlObject.searchParams.get('iso'));
    let result;
    
    if (path === '/api/parsetime') {
        result = getISOFormat(date);
    } else if (path === '/api/unixtime') {
        result = getUnixTime(date);
    }

    if (result) {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(result));
    } else {
        response.writeHead(404);
        response.write('404 Not Found');
        response.end();
    }

    

});

httpServer.listen(port)

/*
official solution

const http = require('http')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    const server = http.createServer(function (req, res) {
      const parsedUrl = new URL(req.url, 'http://example.com')
      const time = new Date(parsedUrl.searchParams.get('iso'))
      let result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/