/**/
//Author: Akilah Bussey
//Created: 10.25.2021
//
//Licence: Public Domain.

//adding and appending buttons to challenges, problems and results
//giving them lables
$("#first").append("<button id='button1'>click me!</button>");
$("#second").append("<button id='button2'>click me!</button>");
$("#third").append("<button id='button3'>click me!</button>");

//adding click fuunction
$("#button1").click (function(){
//adding a toggle class
  $("#first").toggleClass("red")
})

//adding a click function
$("#button2").click (function(){
//adding a toggle class
  $("#second").toggleClass("orange")
})

//addding a click function
$("#button3").click (function(){
  //adding a toggle class
  $("#third").toggleClass("yellow")
})
