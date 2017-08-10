 var fs = require('fs');
 
 const Content = fs.readFile(process.argv[2], 'utf-8', function callback (err, data) { 
	if (err) {
        console.log(err);
    }
	console.log(data.toString().split('\n').length - 1);

 })