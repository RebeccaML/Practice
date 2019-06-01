// alert("Hello");

// document.querySelector("h1").innerHTML = "Goodbye";

var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Goodbye";
heading.style.color = "red";

document.querySelector("input").click(); //makes checkbox clicked

document.getElementsByClassName("item")[2].innerHTML = "Rebecca"; //change third item in list
document.getElementsByTagName("li")[2].style.color = "purple"; //target the same element a different way and turn it purple

document.getElementsByTagName("li"); //gets an array of all the <li> items
document.getElementsByTagName("li").length; //returns how many <li> items there are
//will always return an array even if only one item

document.getElementById("title"); //returns a single item since ids should only be used once

document.querySelector(".btn") //can take element, class or id
//query selector will return the first element that matches if multiples
document.querySelector("li.item"); //list item with a class of item
document.querySelectorAll("li.item"); //returns array of all list items with class item

document.querySelector("li a").style.color = "green";// change links inside list items to green
document.querySelector("button").style.backgroundColor = "yellow";
document.querySelector("h1").classList.add("huge");