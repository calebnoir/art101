// index.js - Lab 6 - Arrays and Objects
// Author: Caleb Black
// Date: 5/1/23

// define variables
myTransport = ["Honda Civic", "Scooter", "Bus", "Bike"];

// create Objects aka my car attributes
myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "Black",
  year: 2017,
  age: function() {
      return 2023 - this.year;
  }
}

// output
document.writeln("The ways I get around Santa Cruz: " + myTransport, "</br>");
// write object in document
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
