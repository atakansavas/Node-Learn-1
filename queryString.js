var http = require('http');
var url = require('url'); //For reading query string. Also req.url;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    //Parse query string.
    var queryString = url.parse(req.url, true).query;
    //Combine two query string.
    var result = queryString.year + " " + queryString.month;
    //Write result.
    res.end(result);

}).listen(8181);