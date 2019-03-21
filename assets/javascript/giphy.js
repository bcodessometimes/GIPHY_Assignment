//Global variables
var itemArray = ["cat", "dog", "mouse", "elephant"];
var apiKey = "rqcSo1qF6lKTtawP3hwe4gab9J4gh4RG"
var input;
var temp;
var a;
var animalImage;
var animalDiv;
var i;

//on load clear buttons and populate from itemArray
function onStart() {
    
    for(var i = 0; i < itemArray.length; i++) {
        a = $("<button>"); 
        a.text(itemArray[i]);
        a.addClass("static-btn");
        $("#buttonDiv").append(a);
    }

};


$("body").on("click", ".static-btn", function (){
    alert("working");
    $(".static-btn").val().append(temp);
    console.log(temp);
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
$("button").on("click", function(){
    $("#gifDiv").empty();
    var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=rqcSo1qF6lKTtawP3hwe4gab9J4gh4RG&q=` + input + `&limit=2&offset=0&rating=G&lang=en`

    $.ajax({
        url: queryURL,
        method: "GET"
      })

    .then(function(response){
        
       console.log(queryURL);
       console.log(response);
       results = response.data;

       for (i = 0; i < results.length; i++) {

        animalDiv = $("<div>");

        var p = $("<p>").text("Rating: " + results[i].rating);

        animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);

        animalDiv.append(p);
        animalDiv.append(animalImage);

        $("#gifDiv").prepend(animalDiv);
      }
   
      
    })
    
});

// $("body").on("click", "img", function(){
//     alert("works");
//     animalImage.attr("src", results[i].images.fixed_height_still.url); 
// })
// console.log(response);

//response dosent exist outside the function.. I dont know how to build this click event inside my function with my ajax call
//my thought process is to just change the attribute to the still image on click.

// $("body").on("click", "img", function(){
//     alert("works");
//     animalImage.attr("src", results[i].images.fixed_height_still.url); 
// })

onStart();