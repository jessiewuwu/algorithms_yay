/*
REVERSE STRING
Given an input string, reverse the string letter by letter. A word is defined as a sequence of non-space characters.

NOTE: Javascript strings are immutable, meaning you can't change the value of the string, you need to create a new string.
Your code should work if you call it with an actual array of characters instead of a string.

=================
in-place
=================
Outside in
1. Convert the string into an array
2. Instantiate two pointers: 1 that starts at index 0, the other at the end of the array
3. Iterate through the array until you are at the midpoint
4. Switch values during each iteration and increment p1, decrement p2
5. Return the array joined
*/


var reverseInPlace = function(str) {
  var strArray = str.split("");
  var p1 = 0;
  var p2 = strArray.length - 1;

  while( p1 < p2) {
    var temp = strArray[p2];
    strArray[p2] = strArray[p1];
    strArray[p1] = temp;
    p1++;
    p2--;
  }

  return strArray.join(""); 

}

console.log(reverseInPlace("heod"));
