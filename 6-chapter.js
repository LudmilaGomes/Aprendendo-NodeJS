// REQUEST AND RESPONSE OBJECTS

/*

Construindo um servidor web, a maior parte do que é feito começa com um
objeto request e termina com um objeto response.

Como funciona? Como o navagador faz a requisição para a página por um 
servidor e como a página é retornada?

'https://google.com/#q=express', 'http://localhost:3000/about?test=1#history'
divide-se em protocol, hostname, port, path, querystring e fragment;

Protocol: determina como a requisição será transmitida.
Host: identifica o servidor. Servidores no seu computador ou numa rede 
local podem ser uma palavra ou um endereço IP numérico. Na internet, o 
host terminará em um TLD (top level domain) como .com ou .net. Também há
subdomains, prefixos no hostname, opcionais. www é um subdomínio comum.
Port: cada servidor tem uma coleção de portas numeradas. Se você omite a
porta, a porta 80 é assumida para HTTP e 443, para HTTPS.
Path: é geralmente a primeira parte da UTL. O path deve ser usado unicamente
para identificar páginas ou outros recursos do seu aplicativo.
Querystring: é uma coleção opcional de pares nome/valor. É iniciado com
uma interrogação (?) e os pares nome/valor são separados por (&).
Fragment: não é passado para o servidor, é utilizado pelo navegador.

HTTP Request Methods

O protocolo http define a coleção de request methods (métodos de requisição)
que o cliente usa para se comunicar com o servidor. Os métodos mais comuns
são GET e POST. 
Quando você digita uma URL no navegador ou clica num link, o navegador 
emite uma requisição GET para o servidor. As informações mais importantes
passadas são o caminho da URL e a querystring. O método, path e querystring
são usados pelo app para determinar como responder.
POST requests são usadas para enviar informação de volta para o servidor.
Navegadores usarão exclusivamente os métodos GET e POST quando se comunicam
com seu servidor. Serviços de web, por outro lado, podem usar também outros
métodos HTTP, como DELETE, que é usado para deletar informações.

*/