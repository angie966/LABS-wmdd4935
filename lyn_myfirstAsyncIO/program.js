let fs = require('fs');

let filePath = process.argv[2];

let fileContents = fs.readFile(filePath, 'utf8', function(err, data)

{
    console.log(data.split('\n').length-1);
});