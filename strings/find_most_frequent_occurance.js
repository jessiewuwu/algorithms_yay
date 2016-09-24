/*
Given a string, return the character that appears the most.

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
  var hash = {};
  var result = [];

  for(var i = 0; i < str.length; i++) {
    if(hash[str[i]]) {
      hash[str[i]]++;
    } else {
      hash[str[i]] = 1;
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

console.log(mostFreqOccurance("kisseeeees"));