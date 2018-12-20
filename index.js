var http = require("http");
var url = require("url");


var server = http.createServer(function(req,res){
    var parsedURL = url.parse(req.url, true);
    var path = parsedURL.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');

    var httpMethod = req.method.toLowerCase();
    var queryString = parsedURL.query;
    res.end(parsedURL+" || "+path+ " || " +trimmedPath + " \\\\ " + httpMethod + ' -- ' , queryString);
});

server.listen(3000,function(){
    console.log("listening on 3000");
})