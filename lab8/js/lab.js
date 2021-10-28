/**/
//Author: Akilah Bussey
//Created: 10.25.2021
//
//
//Licence: Public Domain.
//

function timesTwo(x) {
    return (x * 2)
}
//multiply the function by two
console.log("six timesTwo =", timesTwo(6));

a = [ 22, 44, 66, 88, 110]
console.log("my array", a);

var result = a.map(timesTwo);
//should return [44, 88, 132, 176, 220]
console.log("the array timesTwo =", result);

var results = a.map(function(x){
    return x * 2;
})
//should return [484, 1936, 4356, 7744, 12100]
console.log("the array timesTwo", result);
