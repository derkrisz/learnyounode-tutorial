const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    let fullData = '';
    response.setEncoding('utf-8');

    response.on('error', (error) => console.error(error));

    response.on('data', chunk => {
        fullData += chunk;
    })

    response.on('end', () => {
        console.log(fullData.length);
        console.log(fullData);
    });
    
}).on('error', (error) => console.error(error));

/*
official solution

 const http = require('http')
    const bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/