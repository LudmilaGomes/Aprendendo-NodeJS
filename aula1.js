// acompanhando vídeo e livro

const http = require('http'); // carrega o módulo 'http'

// createServer() é um método de 'http' que cria um novo servidor http e o retorna
http.createServer( (request, response) =>
{
    // envia um cabeçalho de resposta para a requisição
    response.writeHead(200, 
    {
        'Content-Type':'text/plain'
    }) 
    response.write('Olá, mundo!\nSeja bem-vindo ao node.js!!!\n');
    response.end(); // indica que mais nenhum dado vai ser escrito

} ).listen(1337);

/* EXPLICANDO CADA INSTRUÇÃO

'require()': função que inclue módulos externos que existem em arquivos 
separados; basicamente, require() lê um arquivo .js, executa e retorna
o objeto de exportação. Sua maior diferença em relação ao 'import()' é
que require() pode ser chamada em qualquer lugar do código e import()
sempre está no começo do arquivo. Além disso, para usar require(), um
módulo deve ser salvo com a extensão .js, enquanto import() usa .mjs;

'createServer()': torna o computador um servidor HTTP; executa uma função
requestListener cada vez que uma requisição é feita. Sobre a requestListener:
manipula solicitações do usuário e também a resposta de volta ao usuário;

 function(request, response) {}

em que request representa a mensagem/requisição recebida (incomingMessage) 
e response representa a resposta do servidor, que possui métodos para lidar
com o fluxo de resposta de volta ao usuário.

'writeHead()': response.writeHead(statusCode[, statusMessage][, headers]);
statusCode é um número de 3 dígitos que representa um código de status HTTP;
statusMessage é opcional e aceita qualquer string;
headers são os cabeçalhos de resposta (response header);

*/