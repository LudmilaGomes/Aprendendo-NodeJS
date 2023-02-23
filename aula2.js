/* EXEMPLO - VÍDEO

const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer( (request, response) =>
{
    response.writeHead(200, {'Content-Type':'text/html'});

    if(request.url == '/')
    {
        response.write('<h1>Seja bem-vindo</h1>');
    }
    else if(request.url == '/canal')
    {
        response.write('<h1>CFB Cursos</h1>');
    }
    else if(request.url == '/curso')
    {
        response.write('<h1>Curso de NodeJS</h1>');
    }
    response.end();

} );

servidor.listen(porta, host, () => {console.log("Servidor rodando.")}) // usar arrow function/function?

*/

/* EVENT-DRIVEN PROGRAMMING

Basicamente, está relacionado ao clique do usuário em algo e na resposta
ao clique; logicamente, para lugares diferentes em que o usuário clicou,
são necessárias respostas diferentes

*/

/* ROUTING

Se refere ao mecanismo de servir ao o conteúdo solicitado. No caso, o
conteúdo desejado é indicado pela URL.

*/

const http = require('http');

http.createServer( (request, response) =>
{
    // remove querystring (string de consulta*)
    var path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch(path)
    {
        case '':
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Homepage.');
            break;
        case '/about':
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('About.');
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('Not found.');
            break;
    }
} ).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');

/*

home page:          http://localhost:3000
about page:         http://localhost:3000/about
qualquer outr URL:  Not found

querystring serão ignoradas

*querystring: Uma string de consulta é um conjunto de caracteres 
inseridos no final de uma URL. A string de consulta começa após o 
ponto de interrogação (?) e pode incluir um ou mais parâmetros. 
Cada parâmetro é representado por um par chave-valor exclusivo ou 
um conjunto de dois itens de dados vinculados. Um sinal de igual (=) 
separa cada chave e valor.

*/