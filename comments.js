// Create web server

var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var url = require('url');
var comments = [];
var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname === '/') {
        fs.readFile('./index.html', function(err, data) {
            if (err) {
                res.end('read file index.html error');
            } else {
                res.end(data);
            }
        });
    } else if (pathname === '/post') {
        var data = '';
        req.on('data', function(chunk) {
            data += chunk;
        });
        req.on('end', function() {
            var comment = qs.parse(data);
            comment.time = new Date();
            comments.push(comment);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    } else if (pathname === '/comment') {
        var comment = '';
        comments.forEach(function(item) {
            comment += item.name + ' : ' + item.message + ' : ' + item.time + '\n';
        });
        res.end(comment);
    } else {
        fs.readFile('.' + pathname, function(err, data) {
            if (err) {
                res.end('read file error');
            } else {
                res.end(data);
            }
        });
    }
});
server.listen(3000, function() {
    console.log('server is running at port 3000');
});
// Create web server end