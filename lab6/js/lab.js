/**
* Create a js that hold data our data on transportation
*
*@link URL
*@file this file defines the myclass class
*@author  Akilah Bussey &
*@since 10.20.21
*/

// define variables
myTransport = [ "Toyota Sienna LE", "Walking",   "Bus", "Carpooling",  "Driving"
  ];

// define variables
myMainRide = {
  make : "Toyota",
  model : "Sienna LE",
  color : "Silver",
  year : 2016,
  age : function() {
      return 2021 - age;
  }
}

// output
document.writeln ("Kinds of Transportation I Use: ", myTransport, "</br>");
document.writeln ("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
