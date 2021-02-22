//Import Node HTTP Core module 
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);
    // process.exit();
    const url = req.url;
    const method = req.method;

    if ( url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My text</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if ( url === '/message' && method === 'POST'){

        const body = [];
        req.on('data', (chunck) => {
            body.push(chunck);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];    
            fs.writeFileSync('/tmp/message.txt', message);
        });

        // redirect code
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My text</title></head>')
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();
    
});

server.listen(3000);

