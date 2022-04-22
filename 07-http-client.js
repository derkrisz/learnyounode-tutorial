const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf-8');
    response.on('data', chunk => {
        console.log(chunk);
    })
    response.on('error', (error) => console.error(error));
}).on('error', (error) => console.error(error));