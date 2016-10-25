// Find out if the string is a palidrome -- XO Group
// Hey Jessie :)
// input: string
// output: boolean if palidrome

// cat -> false
// dad -> true

// //pseudocode:
// compare from outside to inside
// iterate through the string, 
// if they match, continue on
// if they don't match, return false and return out
// // racecar

var isPalindrome = function(str) {
  var endMarker = str.length - 1; //6
  for(var i = 0; i <= endMarker; i++){
    if( str[i] !== str[endMarker]) {
      return false;
    } else {
      console.log("startIndex: ", i)
      console.log(str[i], str[endMarker]);
      console.log("-------");
      endMarker--;
    }
  }
  return true;

}

console.log(isPalindrome("racecar"));
//console.log(isPalindrome("dade"));
//console.log(isPalindrome("caac"));