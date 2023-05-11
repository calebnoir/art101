// index.js - purpose and description here
// Author: Caleb Black
// Date: 5/10/23

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = 
    document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El =
    document.createElement("p");
// Change HTML attribute of new1El to something new
new1El.innerHTML = "Something New"; 

// Create another new element with document.createElement("p") and assign it to a new variable new2El
var new2El =
    document.createElement("p");
// Change HTML attribute of new2El to something new
new2El.innerHTML = "Something Even Newer";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// 2 CSS Attributes changed
document.getElementById("output").style.color = "green";
document.getElementById("how-are-you").style.color = "red";