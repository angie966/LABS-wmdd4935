let mymodule = require('./mymodule');

let directory = process.argv[2]  

let ext = process.argv[3];

mymodule(directory, ext, function(err, files) {

    if (err) {

        return console.error('error:', err);
    }
    
    files.forEach(function(file) {

        console.log(file);

    });
});