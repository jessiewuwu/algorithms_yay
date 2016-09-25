/*

Given a nested array, flatten the array.
Input: a nested array
Output: flattened array

Easy:
[[1, 2],[3, 4, 5], [6, 7, 8, 9]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]

Hard:
[
[2], 
[1,3,[4,5]],
5,
[5,6,[7,8,9,[10, 11]]]
]

approach 1 w/o built-in functions
1. Create a result array
2. Loop through the array
3. At that subarray, loop through that item
4. Push each item into result array
5. Return result array

approach 2 w/ built-in functions concat and apply
var result = [].concat.apply([], inputArray)

approach 3 w/ built-in function reduce
var result = myArray.reduce(function(prev, current){ 
  return prev.concat(current);
});

advanced: approach 4 w/ recursion
main function: 
1. iterate through the input array
2. if it is an integer, push it to result array
3. else if it's an array,
4. iterate through the array
5. call itself
*/

//approach 1:
function easyFlatten(array) {
  var result = [];

  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++){
      result.push(array[i][j]);
    }
  }
  return result;
}
// console.log(easyFlatten([[1, 2],[3, 4, 5], [6, 7, 8, 9]]));

/*
advanced: approach 4 w/ recursion
main function: 
1. iterate through the input array
2. if it is an integer, push it to result array
3. else if it's an array,
4. iterate through the array
5. call itself
*/

function recursionFlatten(array, result) {
  var result = result || [];

  for(var i = 0; i < array.length; i++) {
    if(Number.isInteger(array[i])) {
      result.push(array[i]);
    } else if(Array.isArray(array[i])) {
      recursionFlatten(array[i], result)
    }
  }

  return result;
}

console.log(recursionFlatten([[2],[1,3,[4,5]],5,[5,6,[7,8,9,[10, 11]]]]));
console.log(recursionFlatten([[1,2],[3,4]]))
