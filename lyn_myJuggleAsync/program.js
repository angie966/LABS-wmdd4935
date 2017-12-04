let http = require('http');

let urlData = [];

let urls = process.argv.splice(2);

let count = urls.length;

for(let i = 0; i < urls.length; i++) {
    httpGet(urls[i], i);
}

function httpGet(url, index) {

    http.get(url, function(response){        

        let stringData = '';

        response.setEncoding('utf8');

        response.on('error', function(error){

            console.log(error);

        });
        
        response.on('data', function(data) {

            stringData += data;

        });

        response.on('end', function(){

            urlData[index] = stringData;

            count--;

            if(count === 0) {

               printUrls();
            }
        });
    });
}

function printUrls() {

    urlData.forEach(function(item) {

        console.log(item);
    });
}