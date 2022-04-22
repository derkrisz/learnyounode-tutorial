const fs = require('fs')

const file = fs.readFileSync(process.argv[2], 'utf-8');

console.log(file.split('\n').length - 1);

/*
official solution

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)
*/