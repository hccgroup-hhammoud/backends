const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        return res.end('welcome to my home page')
    }
    if(req.url === '/about'){
        return res.end('here is my history')
    }
    res.end(`
        <h1>Ooops!</h1>
        <p> we can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
        `);
})

server.listen(5000);