//Global variables
var itemArray = ["cat", "dog", "mouse", "elephant"];
var apiKey = "rqcSo1qF6lKTtawP3hwe4gab9J4gh4RG"
var input;


//on load clear buttons and populate from itemArray
function onStart() {
    $("#buttonDiv").empty();
    for(var i = 0; i < itemArray.length; i++) {
        
        var a = $("<button>"); 
        a.text(itemArray[i]);
        a.attr("data-animal", itemArray[i])
        a.addClass("static-btn");
        $("#buttonDiv").append(a);
    }

};

$("body").on("click", ".static-btn", function (){
    
    input = $(this).data("animal");
    input2 = $(this).text();
    console.log(input);
    console.log(input2);
    //itemArray.push(input);
    console.log(itemArray);
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

       for (i = 0; i < results.length; i++) {

        var animalDiv = $("<div>");

        var p = $("<p>").text("Rating: " + results[i].rating);
        var live = results[i].images.fixed_height.url;
        var still = results[i].images.fixed_height_still.url;
        var animalImage = $("<img>");

        animalImage.attr("src", still);
        animalImage.attr("data-still", still);
        animalImage.attr("data-live", live);
        animalImage.attr("data-state", "still");
        animalImage.addClass("animalShit");
        
        animalDiv.append(p);
        animalDiv.append(animalImage);

        $("#gifDiv").prepend(animalDiv);
      }
      
    })
    
});


$("#button-addon2").on("click", function(){
    $("#buttonDiv").empty();
    input = $("#inputField").val();
    console.log(input);
    itemArray.push(input);
    console.log(itemArray);
    
    onStart();
});


//ajax call 

$("body").on("click", "img", function(){

    var state = $(this).attr("data-state");

    if(state == "still") {
        $(this).attr("src", $(this).data("live"));
        $(this).attr("data-state", "live"); 

    } else {
    $(this).attr("src", $(this).data("still"));
    $(this).attr("data-state", "still"); 
    }

})

onStart();