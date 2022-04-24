const net = require('net');
const port = process.argv[2];

const padWithZero = (number) => {
    if (number < 10) {
        return '0' + number
    }
    return number
}

const server = net.createServer(socket => {
    let dateTime = new Date();

    let year = dateTime.getFullYear(),
        month = padWithZero(dateTime.getMonth() + 1),
        day = padWithZero(dateTime.getDate()),
        hours = padWithZero(dateTime.getHours()),
        minutes = padWithZero(dateTime.getMinutes());

    socket.end(`${year}-${month}-${day} ${hours}:${minutes}\n`)
})

server.listen(port);

/*
offical solution

const net = require('net')
    
function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}
    
function now () {
    const d = new Date()
    return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}
    
const server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})
    
server.listen(Number(process.argv[2]))
*/