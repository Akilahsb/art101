/**/
//Author: Akilah Bussey
//Created: 10.25.2021
//
//Licence: Public Domain.

//^^Put a comment block (Links to an external site.) at the top of your program
//get users name
var field = document.getElementById("user-name");

//assign the name to a field value
//var name = field.value;
//adding a button element
var buttonEl = document.getElementById ('my-button');

//Borrow the nameSort() function from Lab 7.
function sortUserName(){
  var field = document.getElementById("user-name");
  var userName = field.value;
  //console.log("username =", userName);

    //split string into arry
    var nameArray= userName.split('');
    console.log("nameArray =", nameArray);

    //sort array
    var nameArraySort= nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    //join array to string
    var nameSorted= nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    //assign the output div
    var outputEl = document.getElementById("output");

    var new1El = document.createElement('p');
    new1El.innerHTML= nameSorted;
    outputEl.appendChild(new1El);

    //return results
    return nameSorted;
}

//Attach an event listener to your button.
buttonEl.addEventListener("click", sortUserName);
