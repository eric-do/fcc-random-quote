console.log("CONNECTED");

$(document).ready(function(){
        // Pull random quote here
    $("#new-quote").on("click", function() {
        //$.getJSON("https://crossorigin.me/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json){
        $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/", function(json){
            var quote = "";
            var author = "";
            var index = Math.floor(Math.random() * json.length);
            var keys = Object.keys(json[index]);
            
            $("#text").html(json[index].quote); 
            $("#author").html(json[index].author);

            /*
            keys.forEach(function(key) {
                console.log(key, json[index][key]);                
                quote += "<strong>" + key + ": </strong>" + "<em>" + json[index][key] + "</em><br>";
            });*/
        });
    });
});