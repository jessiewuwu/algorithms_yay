/*
Given a string, return the character that appears the most.

Time:
Space: 

1. Instantiate a hash variable. 
2. Iterate through the string
3. If the character exists in the hash, increment the value;
4. If the character doesn't exist in the hash, set the character as key and the value as 1;
5. Instantiate a result array
6. Iterate through the hash comparing the values
7. Set the first key and value in the result array and replace it every time there's a greater value
8. Return the character from the result array 
*/

var mostFreqOccurance = function(str) {
  var cleanStr = str.toLowerCase();
  var hash = {};
  var result = [];

  for(var i = 0; i < cleanStr.length; i++) {
    if(hash[cleanStr[i]]) {
      hash[cleanStr[i]]++;
    } else {
      hash[cleanStr[i]] = 1;
    }
  }

  for (var key in hash) {
    if(!result.length) {
      result = [key, hash[key]]
    } else {
      if(hash[key] > result[1]) {
        result = [key, hash[key]];
      }
    }
  }

  return result[0];
}

console.log(mostFreqOccurance("kissEEEees"));
console.log("HI".toLowerCase())