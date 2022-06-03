const http = require('http');
http.createServer((req, res) => {

    res.writeHead(200, {'Context-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>Haha This site is HACKED </h1>');
})
.listen(8080, () => {

    console.log("8080 Fort waiting for serivce")
})