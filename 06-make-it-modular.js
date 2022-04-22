const directoryFilter = require('./06-mymodule')

const [,,directory, extension] = process.argv;

directoryFilter(directory, extension, (error, files) => {
    if (error) console.error(error)
    files.forEach(file => console.log(file));
});

/*
official solution

const fs = require('fs')
    const path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }
*/
