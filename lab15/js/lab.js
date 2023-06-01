// index.js - purpose and description here
// Author: Caleb Black
// Date: 5/31/23
function getCatStuff() {
    console.log("Clicked");

    $.ajax({
        
        url: "https://catfact.ninja/fact",
        
        // Whether this is a POST or GET request
        type: "GET",
        data: {},
        // The type of data we expect back
    })

    .done(function(data) {
        console.log(data.fact);
        $("#output").html(data.fact);
    })

}
//Event listener + button 
$("#activate").click(getCatStuff)