const http = require('http');

let helloworld = '';
for (let i = 0; i < 1024 * 10; i++) {
    helloworld += "中";
}

helloworld = Buffer.from(helloworld, 'utf-8');

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8',
    });
    
    res.end(helloworld);
}).listen(8001);