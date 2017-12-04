let net = require('net');

let server = net.createServer(function(socket){

let date = new Date();

let fullYear = date.getFullYear();

let month = date.getMonth() + 1;

let formattedMonth = month < 10 ? '0' + month : month;

let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();


socket.end([fullYear, formattedMonth, day].join('-') + ' ' + [hours, minutes].join(':') + '\n');
});

server.listen(process.argv[2]);