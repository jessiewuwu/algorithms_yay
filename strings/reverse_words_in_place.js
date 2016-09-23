/*
REVERSE WORDS
Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

The input string does not contain leading or trailing spaces and the words are always separated by a single space.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Could you do it in-place without allocating extra space?

=================
not-in-place
=================
Approach 1:
1. Convert the string into an array
2. Create a string result variable
3. Iterate backwards and concat each element of the array into the string

Approach 2:
1. Create a stack
2. As you iterate through each word, enqueue it to the stack
3. At the end of iteration, dequeue the stack from top to bottom and concat to the result string

=================
in-place
=================
Start from the middle and exchange as you go outside
1. find the midpoint. 
if it is an odd total, let the midpoint stay the same and the 2 pointers be the mid
if it is even, have the 2 pointers point at the midpoint and midpoint - 1

2. Iterate through until p1 = start, p2 = end
Exchange with each other

3. return the input
*/


// not-in-place approach 1:
var backwards = function(str) {
  var strArray = str.split(" ");
  var result = "";
  
  for(var i = strArray.length - 1; i >= 0; i--){
    result = result.concat(strArray[i] + " ");
  }
  return result;
}

console.log(backwards("the sky is blue"));

