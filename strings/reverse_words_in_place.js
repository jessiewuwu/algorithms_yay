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
Approach 1: 
Start from the middle and exchange as you go outside.
1. find the midpoint. 
if it is an odd total, let the midpoint stay the same and the 2 pointers be the mid
if it is even, have the 2 pointers point at the midpoint and midpoint - 1

2. Iterate through until p1 = start, p2 = end
Exchange with each other

3. return the input

OR Start from outside in until start pointer is greater than or equal to end pointer.


APPROACH 2: W/ RECURSION
- the key is to reverse all the characters first and then reverse the words back. the reason why is related to space and time O(n) where if you just swap the words, there's a problem with shifting words of different lengths. The naive solution of reversing the words one at a time had a worst-case O(n^2)runtime. That's because swapping words with different lengths required "scooting over" all the other characters to make room.
- By reversing the characters instead of words, it gives us the right word order but with each word backwards

reverseWords function
1. Split the message into an array
2. reverse all the characters by calling reverseCharacters function with paramenters: the messageArray, start point of 0, and end point of length - 1. 
3. After getting reversed characters, we will make the words forward by reversing each word's character by creating a new counter called currentWordStartIndex = 0;
4. Loop through the messageArray
5. Base case is if you're at the end of the messageArray or there is a space (denoting its  the end of a word):
6. You call reverseCharacters recursive function on the messageArray, currentWordStartIndex, and i - 1;
7. Update currentWordStartIndex with i + 1 (in order to move on to the next word)
8. Return the messageArray joined as a string


reverseCharacters(messageArray, startIndex, endIndex) function
should return the characters backwards

1. going from outside to inside, while startIndex is less than endIndex, you want to swap the front and end character
2. Store the beginning character as temp
3. Replace the beginning character with end character
4. Replace the end character with temp
5. Increment startIndex, decrement endIndex. 

*/


// in-place recursion
var reverseWord = function(message) {
  var messageArray = message.split('');

  reverseCharacters(messageArray, 0, messageArray.length - 1); // returns reversed characters

  var currentWordStartIndex = 0;
  for(var i = 0; i <= messageArray.length; i++) { // we want to set the words forward by reversing reversed characters
    if( i === messageArray.length || messageArray[i] === " ") {

      reverseCharacters(messageArray, currentWordStartIndex, i - 1 );
      currentWordStartIndex = i + 1; // move on to the new word
    }

  }

  return messageArray.join('')
}

var reverseCharacters = function(messageArray, startIndex, endIndex) {
  while( startIndex < endIndex) {
    var temp = messageArray[startIndex];
    messageArray[startIndex] = messageArray[endIndex];
    messageArray[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
}


console.log(reverseWord("the sky is red"))



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

