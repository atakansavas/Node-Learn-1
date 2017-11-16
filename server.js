var http = require('http');
var utility = require('./modules/utility');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    var queryString = url.parse(req.url, true).query;
    res.write("<br />");◘
    res.write("<br />");◘
    
    //Calling a method from extended class.
    //res.write("The date and time are currently: " + utility.myDateTime());
    
    res.end();
}).listen(8080);