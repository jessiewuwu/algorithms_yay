/*
Given two sorted arrays, return one sorted array.


1. Instantiate a result array and two pointers
2. Base case: if the pointers reach the end of the array, add the rest of the other array to the result array
3. If array1's pointer is less than array2's pointer, then push it to result array and increment pointer1
4. Else, push array2 value into result and increment pointer2
5. Keep doing this until you hit base case
6. Return result array

Input: [1,3,5], [2,4,6]
Output: [1,2,3,4,5,6]
*/

var mergeSortedArrays = function(arr1, arr2) {
  var result = [];
  var p1 = 0;
  var p2 = 0;

  if(p1 === arr1.length - 1) {
    result = result.concat(arr2.slice(p2));
  } else if (p2 === arr2.length - 1) {
    result = result.concat(arr1.slice(p1));
  }

  for( var i = p1; i < arr1.length; i++) {
    for( var j = p2; j < arr2.length; j++) {
      if(arr1[p1] <= arr2[p2]) {
        result.push(arr1[p1]);
        p1++;
      } else {
        result.push(arr2[p2]);
        p2++;
      }
    }
  }

  return result;
}

console.log(mergeSortedArrays([1,3,5], [2,4,6]));