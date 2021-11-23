/**/
//Author: Akilah Bussey
//Created: 11.15.2021
//
//Licence: Public Domain.

//Create a "FizzBuzz" function similar to how we did in class


function fizzBuzzBoom(maxNums, factorObj) {

  for(var num=0; num<maxNums; num++)  {

    var outputStr = "";

    for (var factor in factorObj) {

      if (num % factor == 0) {

        outputStr += factorObj[factor];

      }
    }
    if (outputStr) {
       outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}
//have function report error
function reportError(str) {
      outputEl.innerHTML = "<div class= 'error'>" + str + "</div>;"
}
//add event listener
document.getElemenById("submit").addEventListener("click", function(){
  var max = document.getElemetById("max").value;
  console.log("max:", max);
  if (! max) {
      reportError("You must provide a maximum");
      return;
  }
  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (object.keys(factorObj).length === 0){
    reportError("You must provide at least one factor and text");
    return;

  }

  outputEl.innerHTML = "";
  fizzBuzzBoom(max, factorObj);
  outputEl.classList.add("cols");
})
