/* 

MERGESORT
Notes:
The kind of sort where you keep dividing the arrays in half until you get single element arrays. Then merge them back up by comparing indices and shove the smaller integer into a result array. 

Requires two functions: one where you divide them in half and another one where you merge them.

There is a recursive function because you have to keep splitting them until they are single elements. 
 
 1. Create mergeSort which divides the arrays into single element arrays
 2. Invoke a merge function that merges them back together. Returns the sorted array.
 mergeSort:
 3. If the array's only 1 element, return the input
 4. Else divide it in half until the length is 1.
 5. At one point, you want to merge both sides with merge function
 merge function:
 6. compare index 0 of both arrays
 7. if arr1 is less than arr2 then shove it into the result array and increment the p1 counter. vice versa. 
 8. if arr1 is done iterating and arr2 still has elements to be compared, add the rest of arr2 to the result array. vice versa
 9. return the result array. 


*/

var merge = function(arr1, arr2) {
  var result = [];
  var p1 = 0;
  var p2 = 0;
  var length1 = arr1.length;
  var length2 = arr2.length;


  while(p1 < length1 && p2 < length2) {
    if(arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    } else {
      result.push(arr2[p2]);
      p2++;
    }
  }

  if(p1 === length1) {
    result = result.concat(arr2.slice(p2));
  } else if(p2 === length2){
    result = result.concat(arr1.slice(p1));
  }

  return result;
}

var mergeSort = function(arr) {
  
  if(arr.length <= 1) {
    return arr;
  } else {
    var midpoint = Math.floor(arr.length/2);
    var left = arr.slice(0, midpoint);
    var right = arr.slice(midpoint);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
  }


}

console.log(mergeSort([5,2,19,4,1,6]));