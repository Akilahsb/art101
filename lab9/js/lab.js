/**/
//Author: Akilah Bussey
//Created: 10.25.2021
//
//
//Licence: Public Domain.

//creating a button
var buttonEl = document.getElementById ('my-button');
buttonEl.addEventListener('click', function() {
   alert("Hi! Your doing great, keep it up! :)");
buttonEl.style.backgroundcolor = "pink";
});
// has a button that when you click it tells you a message

var targetEl =
    document.getElementById("id=output");
var new1El =
    document.createElement("p");
       document.body.appendChild(new1El);
  new1El.innerHTML = ("Hello! did you click the button??^");
  new1El.style.fontFamily = "cursive"
  new1El.style.color = " #ff8797"
  new1El.style.marginLeft ="-1000px"
  //a new element that asked if you presed the button

var new2El=
    document.createElement("p");
        document.body.appendChild(new2El);
    new2El.innerHTML = ("The button won't disapoint!");
    new2El.style.fontFamily = "cursive"
    new2El.style.color = " #ff8797"
    new2El.style.marginLeft ="-1050px"
    //a second new element that says the button wont disapoint

var new3El=
    document.createElement("p");
        document.body.appendChild(new3El);
    new3El.innerHTML = ("If you did then you know whats up ;) have a good day!");
    new3El.style.fontFamily = "cursive"
    new3El.style.color = " #ff8797"
    new3El.style.marginLeft ="-850px"
    //third element adressing the people who clicked the button
