// index.js - purpose and description here
// Author: Caleb Black
// Date: 5/3/23

// Constants

// Functions
function sortUserName()  {
    var userName = window.prompt("Hi!. Give me your name so I can fix it.");
    
    console.log("userName =", userName);

    return userName.toLowerCase().split("").sort().join("");

}


// output
document.writeln("Yo, I fixed your name, here you go, jk: ", 
    sortUserName(), "</br>");
    
    
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
  