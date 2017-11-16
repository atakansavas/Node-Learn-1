var http = require('http');
//Include external class.
//Utility is name of instance.
var utility = require('./modules/utility');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    //Calling a method from external class.
    res.write("The date and time are currently: " + utility.myDateTime());
    res.end();
}).listen(8282);