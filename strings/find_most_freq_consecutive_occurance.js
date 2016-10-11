/*
Find the character in a string with maximum number of consecutive repetitions.

# Instantiate a storage array, counter hash. 
# Iterate through the string and push the element into the storage array
# If the character matches the last element of the storage array
  # add it to the counter hash
  # if the key doesn't exist, add it and set the counter to 2
  # if the key does exist, increment it by 1
# Else the character doesn't match, iterate on

To find the max consecutive character
# Instantiate a result array
# Iterate through the counter hash
# If the result array is empty, push the first iteration k, v into the array
# Else compare the current k,v to result array. 
  # If the current v is greater than result array's, replace it
  # Else move on

# Return the first element of result array

*/

var mostFreqCons = function(str) {
  var storage = [];
  var counterHash = {};
  var result = [];

  for(var i = 0; i < str.length; i++){
    if(storage[storage.length - 1] === str[i]) {
      if(!counterHash[str[i]]) {
        counterHash[str[i]] = 2;
      } else {
        counterHash[str[i]] += 1;
      }
    }
    storage.push(str[i]);
  }

  if(Object.keys(counterHash).length === 0) {
    return "There are no consecutive occurances";
  } else {
    for(var key in counterHash) {
      if(result.length === 0 || counterHash[key] > result[1]) {
        result = [key, counterHash[key]]
      }
    }
    return result[0];
  }
}

console.log(mostFreqCons("hellloo"));
console.log(mostFreqCons("helo"));