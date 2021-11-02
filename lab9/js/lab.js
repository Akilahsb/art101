/**/
//Author: Akilah Bussey
//Created: 10.25.2021
//
//
//Licence: Public Domain.

//^^^ Put a comment block (Links to an external site.) at the top of your program

//Use getElementById() to find your output <div> and assign it to a variable outputEl
//find the element!
var outputEl = document.getElementById("output");

//create a new element
var new1El = document.createElement("p");

//Change the html attribute of new1El to say something else.
new1El.innerHTML = ("Hello! did you click the button??^");

//Create another new element and assign it to a variable new2El
var new2El =  document.createElement("p");

//Change the html attribute of new2El to say something else.
new2El.innerHTML = ("The button won't disapoint!");

//adding a third element for fun.
var new3El = document.createElement("p");

//change the attribute
 new3El.innerHTML = ("If you did then you know whats up ;) have a good day!");

//Append both new elements one at a time using appendChild() to your output <div>
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);
 outputEl.appendChild(new3El);
//Change the css attributes of at least two elements of your page
new1El.style.fontFamily = "cursive"
new1El.style.color = " #ffffff"
new1El.style.marginLeft ="-1000px"

//changing the style of new2El
new2El.style.fontFamily = "cursive"
new2El.style.color = " #ffffff"
new2El.style.marginLeft ="-1050px"

//changing the style of new3El
new3El.style.fontFamily = "cursive"
new3El.style.color = " #ffffff"
new3El.style.marginLeft ="-850px"

//creating a button
var buttonEl = document.getElementById ('my-button');
buttonEl.addEventListener('click', function() {
   alert("Hi! Your doing great, keep it up! :)");
buttonEl.style.backgroundcolor = "pink";
});
// has a button that when you click it tells you a message
