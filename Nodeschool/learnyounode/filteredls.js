 var fs = require('fs');
 
 const Content = fs.readdir(process.argv[2], 'utf-8', function callback (err,list) { 
	if (err) {
        console.log(err);
    }
	list.filter(function(item){return item.indexOf('.' + process.argv[3]) >= 0}).map(function(item){return console.log(item)});
	
	// list
    // .filter(item => item.indexOf('.' + process.argv[3]) >= 0)
    // .map(item => console.log(item));
 })