const fs = require('fs')

// const [,,directory, extension] = process.argv;
const directory = process.argv[2]
const extension = '.' + process.argv[3]

fs.readdir(directory, 'utf-8', (err, files) => {
    if (err) throw err;
    const filteredFiles = files.filter(file => file.endsWith(extension));
    filteredFiles.forEach(file => console.log(file));
    // console.log(...filteredFiles)
});

/*
official solution

const fs = require('fs')
const path = require('path')
    
const folder = process.argv[2]
const ext = '.' + process.argv[3]
    
fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
    if (path.extname(file) === ext) {
        console.log(file)
    }
    })
})
*/