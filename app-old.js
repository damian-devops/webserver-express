const http = require('http');


http.createServer((req, res) => {

    res.writeHead(200, { 'Content': 'application/json' });

    let salida = {
        nombre: 'damian',
        edad: 31,
        url: req.url
    }

    res.write(JSON.stringify(salida));

    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');