/*

A module is a JavaScript library/file that you can import into other 
code using Node's require() function. Express itself is a module, as 
are the middleware and database libraries that we use in our Express 
applications.

The code below shows how we import a module by name, using the Express 
framework as an example. First we invoke the require() function, 
specifying the name of the module as a string ('express'), and calling 
the returned object to create an Express application. We can then access 
the properties and functions of the application object.

*/

const express = require("express");
const app = express();


/*

You can also create your own modules that can be imported in the same 
way.You will want to create your own modules, because this allows you 
to organize your code into manageable parts — a monolithic single-file 
application is hard to understand and maintain.

For example, the square.js module below is a file that exports area() 
and perimeter() methods:

 exports.area = function (width) {
   return width * width;
 };
 exports.perimeter = function (width) {
   return 4 * width;
 };

We can import this module using require(), and then call the exported 
method(s) as shown:

 const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension

 console.log(`The area of a square with a width of 4 is ${square.area(4)}`);

If you want to export a complete object in one assignment instead of 
building it one property at a time, assign it to module.exports as shown 
below (you can also do this to make the root of the exports object a 
constructor or other function):

 module.exports = {
   area(width) {
     return width * width;
   },

   perimeter(width) {
     return 4 * width;
   },
 };

*/