const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {

let dataString="";

response.setEncoding('utf8');

response.on('data', (data)=> {

		dataString += data;
	});

response.on('error', (error) => {

		return console.error(error)

	})

response.on('end', () => {

		console.log(dataString.length);

		console.log(dataString);

	})

	
});