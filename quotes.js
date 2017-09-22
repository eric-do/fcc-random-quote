console.log("CONNECTED");

setQuote();

$(document).ready(function(){
        // Pull random quote here
    $("#new-quote").on("click", function() {
            setQuote();
        });
    });

function setQuote() {
        $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/", function(json){
            var index = Math.floor(Math.random() * json.length);
            var keys = Object.keys(json[index]);
            var quote = json[index].quote;
            var author = json[index].author;
            
            $("#text").html(quote); 
            $("#author").html(author);
            $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?text="' + quote + '"%20' + author);
        });
}