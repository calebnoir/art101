// index.js - purpose and description here
// Author: Caleb Black
// Date: 5/12/23


// nameSort function for later use
function nameSort(str) {
    return str.split('').sort().join('');
  }
  


  // Event listener for button
  document.getElementById("my-button").addEventListener("click", function(event){
    // Prevents from submitting
  event.preventDefault(); 
    // gets username
  var input = document.getElementById("user-name").value; 
    // Sorts user input with nameSort function
  var output = nameSort(input); 
    // Updates text in results section
  document.getElementById("output").innerHTML = output; 
  });