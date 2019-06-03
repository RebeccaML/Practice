//jQuery practice

//Necessary in case there's some reason the page might not be ready
//Usually not necessary since you should put scripts at the end of the page.
$(document).ready(function () {
    //$("h1").css("color", "red"); //change h1 color to red
});

//with .css, just the property will get the result of that property, the value will add that value
$("button"); //will select all the button elements

$("h1").addClass("big-title margin-50"); //apply the class .big-title and .margin-50
$("h1").removeClass("big-title"); //remove the class

$("h1").hasClass("margin-50"); //see if the selected element has the given class

$("h1").text("Bye"); //change the h1 text
$("button").html("<em>Hello</em"); //change the button inner HTML

$("a").attr("href"); //will return the href attribute of link
$("a").attr("href", "https://www.facebook.com"); //will change the link href

$("h1").attr("class"); //will return all classes added to the h1 element

$("h1").click(function() { //will add an event listener and call the callback function on click
    $("h1").css("color", "violet"); //changes the color of the h1 when clicked
});

$("button").click(function() { //add eventlisteners to all the buttons so they turn them all purple when one is clicked
    $("button").css("backgroundColor", "violet")
});

$("input").keydown(function(event) { //adds eventlistener to input box to output what key was pressed to console
    console.log(event.key);
});

$(document).keydown(function(event) { //listens to entire document for keypresses and changes h1 text accordingly
    $("h1").text(event.key);
});

$("h1").on("mouseover", function() { //turns the h1 purple when mouse goes over it
    $("h1").css("color", "purple");
});

$("h1").before("<button>New</button>"); //add a new button before the h1 element
$("button").after("<button>Also new</button>"); //add a new button after other buttons
//Interesting point - these new buttons did not get the background color event listenener, probably
//because they were made after that function was called.

$("h1").prepend("No more "); //add this inside the h1 element but before the current value
$("h1").append("s!"); //add this inside the h1 element but after the current value
//.hide() and .show(), .toggle() to go between them. Element removed from document flow.
//.fadeOut(), .fadeIn(), .fadeToggle()
//.slideUp(), .slideDown()
//.animate({opacity: value}); this has to be a property with a numeric value
//$("button").remove(); //gets rid of all buttons
//Makes the h1 slide up and down and change opacity when clicking a button
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});