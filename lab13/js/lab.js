/**/
//Author: Akilah Bussey
//Created: 11.15.2021
//
//Licence: Public Domain.

//Create a "FizzBuzz" function similar to how we did in class
function outputToPage(str) {
  new1 = document.createElement("p");
  newEl.innerHTML = str;
  outputEl.appendChild(newEl);

}
function mod(){

  for(i=1;i <= 200;i++){
    var outputStr = "";
    if(i % 3 == 0 && i%5 == 0){
      console.log("fizzbuzz");
    }
    else if(i%15 == 0){
      console.log("fizzbuzz");
      outputToPage("fizzbuzzboom" + outputStr);
    }
    else if(i%7 == 0){
      console.log("fizzbuzzboom");
      outputToPage("boom" + outputStr);

    }
    else if(i%5 == 0){
      console.log("buzz");
      outputToPage("boom" + outputStr);

    }
    else if(i%3 ==0){
      console.log("fizz");
      outputToPage("fizz" + outputStr);
    }
  } 
