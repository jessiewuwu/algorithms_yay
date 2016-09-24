/*

Find out if this string has all unique letters. 

Are there any duplicates in the string?
Are all the characters unique in a string?

1. Instantiate a result hash to store all the characters and the # of times they appear
2. Iterate through the letters
3. If the key doesn't exist, add it to the hash and set value to 1
4. Else the key already exists, return false. 
*/

var uniq_characters = function(str) {
  var storage = {};

  for(var i = 0; i < str.length; i++) {
    if(storage[str[i]] !== undefined) {
      return false;
    } else {
      storage[str[i]] = 1;
    }
  }
  return true;
}

console.log(uniq_characters("helloyessss"));
console.log(uniq_characters("hi"));