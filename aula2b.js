// vídeo

const http = require('http');
const url = require('url');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer( (request, response) =>
{
    response.writeHead(200, {'Content-Type':'text/html'});

    response.write(request.url);

    const param = url.parse(request.url, true).query;

    response.write('<br/>'+param.nome);
    
    response.write('<br/>'+param.curso);

    response.end();

} );

servidor.listen(porta, host, () => {console.log("Servidor rodando.")})

// http://localhost:3000/?nome=Ludmila&curso=Engenharia+de+Computacao