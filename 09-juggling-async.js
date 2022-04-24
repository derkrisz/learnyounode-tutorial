const http = require('http');
const urls = process.argv.slice(2);
const results = [];
let count = 0;

const printResults = (results) => {
    results.forEach(result => {
        console.log(result);
    })
}

const getData = (url, index) => {
    http.get(url, (response) => {
        let fullData = '';
        response.setEncoding('utf-8');
    
        response.on('error', (error) => {console.error(error)});
    
        response.on('data', chunk => {
            fullData += chunk;
        })
    
        response.on('end', () => {
            results[index] = fullData;
            count++;
            
            if (count === urls.length) {
                printResults(results);
            }    
        });
        
    }).on('error', (error) => {console.error(error)});
}

for (let i = 0; i < urls.length; i++) {
    getData(urls[i], i);
}

/*
official solution

 const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0
    
    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }
*/




