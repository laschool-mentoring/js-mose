const http = require('http');
http.createServer((req, res) => {

    res.writeHead(200, {'Context-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>502 Bad Gateway</h1><p>nginx/1.14.0 (Ubuntu)</p>');
    
})
.listen(8080, () => {

    console.log("8080 Fort waiting for serivce")
})