// acompanhando site

// cria uma aplicação express. 
const express = require('express'); 
const app = express();

const port = 3000;

app.get("/", (request, response) => 
{
    response.send("Hello, World!!!");
} );

app.listen(port, () => 
{
    console.log(`Example app listening on port ${port}!`);
} );

/*

The first two lines require() (import) the express module and create
an Express application. This object, which is traditionally named app, 
has methods for routing HTTP requests, configuring middleware, rendering 
HTML views, registering a template engine, and modifying application 
settings that control how the application behaves.

The app.get() method specifies a callback function that will be invoked 
whenever there is an HTTP GET request with a path ('/') relative to the 
site root. The callback function takes a request and a response object 
as arguments, and calls send() on the response to return the string 
"Hello World!".

The final block starts up the server on a specified port ('3000') and 
prints a log comment to the console. With the server running, you could 
go to localhost:3000 in your browser to see the example response returned.

JavaScript code frequently uses asynchronous rather than synchronous 
APIs for operations that may take some time to complete. A synchronous 
API is one in which each operation must complete before the next 
operation can start. For example, the following log functions are 
synchronous, and will print the text to the console in order (First, 
Second):

 console.log("First");
 console.log("Second");

By contrast, an asynchronous API is one in which the API will start an 
operation and immediately return (before the operation is complete). 
Once the operation finishes, the API will use some mechanism to perform 
additional operations. For example, the code below will print out 
"Second, First" because even though setTimeout() method is called first, 
and returns immediately, the operation doesn't complete for several 
seconds.

 setTimeout(function () {
   console.log("First");
 }, 3000);
 console.log("Second");

 !!! Correto?
Algumas operações podem ser lentas e podem demorar muito até que terminem
de ser executadas. Quando temos essas operações funcionando de forma
síncrona, o conjunto todo (o código inteiro) pode demorar simplesmente
pelo tempo que essas operações levam. Então, usar 'non-blocking asynchronous APIs'
pode ajudar muito nessas casos, em que as operações ocorrem 'simultaneamente', ou
seja, de forma assíncrona.

*/