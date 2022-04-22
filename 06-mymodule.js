const fs = require('fs')

module.exports = (directory, extension, callback) => {
    extension = '.' + extension
    fs.readdir(directory, 'utf-8', (err, files) => {
        if (err) return callback(err)
        const filteredFiles = files.filter(file => file.endsWith(extension))
        return callback(null, filteredFiles)
    });
};

/*
official solution

 const filterFn = require('./solution_filter.js')
    const dir = process.argv[2]
    const filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }
    
      list.forEach(function (file) {
        console.log(file)
      })
    })
*/
