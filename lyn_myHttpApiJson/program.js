let http = require('http');

let url = require('url');

let server = http.createServer(function(req, res){

let parsedUrl = url.parse(req.url, true);

let queryString = parsedUrl.query;

let isoTime = queryString.iso;

    if(!isoTime)

    {
        return res.end('You must specify an ISO time as the iso parameter');
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });

    if(parsedUrl.pathname === '/api/parsetime')

    {
        return res.end(parseTime(isoTime));
    }

    if(parsedUrl.pathname === '/api/unixtime') 
    {
        return res.end(unixTime(isoTime));
    }
});

server.listen(process.argv[2]);

function parseTime(isoTime) 
{
    let date = new Date(isoTime);

    return JSON.stringify({
       
        hour: date.getHours(),
       
        minute: date.getMinutes(),
       
        second: date.getSeconds()
    });
}

function unixTime(isoTime) {
    let date = new Date(isoTime);
    
    return JSON.stringify({
       
        unixtime: date.getTime()
    });
}