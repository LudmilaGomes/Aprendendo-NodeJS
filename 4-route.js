/*

In our Hello World Express example (see above), we defined a (callback) 
route handler function for HTTP GET requests to the site root ('/').

 app.get("/", function (req, res) {
   res.send("Hello World!");
 });

The callback function takes a request and a response object as arguments. 
In this case, the method calls send() on the response to return the 
string "Hello World!" There are a number of other response methods for 
ending the request/response cycle, for example, you could call res.json() 
to send a JSON response or res.sendFile() to send a file.

You can use any argument names you like in the callback functions; when 
the callback is invoked the first argument will always be the request and 
the second will always be the response.

The Express application object also provides methods to define route 
handlers for all the other HTTP verbs, which are mostly used in exactly 
the same way:
checkout(), copy(), delete(), get(), head(), lock(), merge(), mkactivity(), 
mkcol(), move(), m-search(), notify(), options(), patch(), post(), purge(), 
put(), report(), search(), subscribe(), trace(), unlock(), unsubscribe().

Routes allow you to match particular patterns of characters in a URL, and 
extract some values from the URL and pass them as parameters to the route 
handler (as attributes of the request object passed as a parameter).

Often it is useful to group route handlers for a particular part of a 
site together and access them using a common route-prefix (e.g. a site 
with a Wiki might have all wiki-related routes in one file and have 
them accessed with a route prefix of /wiki/). In Express this is 
achieved by using the express.Router object. For example, we can create 
our wiki route in a module named wiki.js, and then export the Router 
object, as shown below:

*/

// wiki.js - Wiki route module

const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;

/*

To use the router in our main app file we would then require() the route module (wiki.js), then call use() on the Express application to add the Router to the middleware handling path. The two routes will then be accessible from /wiki/ and /wiki/about/.

 const wiki = require("./wiki.js");
 // …
 app.use("/wiki", wiki);

*/