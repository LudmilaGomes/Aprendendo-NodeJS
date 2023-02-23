console.log("First");
console.log("Second");

console.log();

setTimeout(function () 
{
    console.log("First");
}, 3000);

console.log("Second");

/*

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

Using non-blocking asynchronous APIs is even more important on Node than 
in the browser because Node is a single-threaded event-driven execution 
environment. "Single threaded" means that all requests to the server are 
run on the same thread (rather than being spawned off into separate 
processes). This model is extremely efficient in terms of speed and 
server resources, but it does mean that if any of your functions call 
synchronous methods that take a long time to complete, they will block 
not just the current request, but every other request being handled by 
your web application.

There are a number of ways for an asynchronous API to notify your 
application that it has completed. The most common way is to register 
a callback function when you invoke the asynchronous API, that will be 
called back when the operation completes. This is the approach used above.

*/