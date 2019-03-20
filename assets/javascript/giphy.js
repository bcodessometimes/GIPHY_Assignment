//Global variables
var itemArray = ["cat", "dog", "mouse", "elephant"];
var apiKey = "rqcSo1qF6lKTtawP3hwe4gab9J4gh4RG"
var input = "";

//on load clear buttons and populate from itemArray
function onStart() {
    
    for(var i = 0; i < itemArray.length; i++) {
        var a = $("<button>"); 
        a.text(itemArray[i]);
        $("#buttonDiv").append(a);
    }

};

$("#button-addon2").on("click", function(){
    $("#buttonDiv").empty();
    input = $("#inputField").val();
    console.log(input);
    itemArray.push(input);
    console.log(itemArray);
    
    onStart();
});

//ajax call
$("button").on("click", function(){
    $("#gifDiv").empty();
    var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=rqcSo1qF6lKTtawP3hwe4gab9J4gh4RG&q=` + input + `&limit=10&offset=0&rating=G&lang=en`

    $.ajax({
        url: queryURL,
        method: "GET"
      })

    .then(function(response){
        
       console.log(queryURL);
       console.log(response);
       var results = response.data;

       for (var i = 0; i < results.length; i++) {

        var animalDiv = $("<div>");

        var p = $("<p>").text("Rating: " + results[i].rating);

        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);

        animalDiv.append(p);
        animalDiv.append(animalImage);

        $("#gifDiv").prepend(animalDiv);
      }
    })

});

onStart();