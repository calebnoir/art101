// index.js - purpose and description here
// Author: Caleb Black
// Date: 5/3/23

//first function
function isEven(x){
    return(x % 2 == 0);
}

//  testing function
console.log("Is 1097 even? ", isEven(1097));
console.log("Is 108 even? ", isEven(108));

array = [800, 97, 102, 204, 87, 95]
console.log("My beautiful array", array);

var result = array.map(isEven);

console.log("Test of evenness:", result);

var result = array.map(function(x){
    return x * 3;
})

//This should return everything multiplied by 3
console.log("Everything in the array times 3:", result);