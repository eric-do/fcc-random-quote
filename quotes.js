console.log("CONNECTED");

$(document).ready(function(){
        // Pull random quote here
    $("#btn-generate").on("click", function() {
        //$.getJSON("https://crossorigin.me/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json){
        $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/", function(json){
            var html = "";
            var index = Math.floor(Math.random() * json.length);
            var keys = Object.keys(json[index]);
            
           
            keys.forEach(function(key) {
                console.log(key, json[index][key]); 
                html += "<strong>" + key + ": </strong>" + "<em>" + json[index][key] + "</em><br>";
            });
            
            $(".quote-display").html(html); 
           
        });
    });
});

