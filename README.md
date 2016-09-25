# algorithms_yay

A place to keep all the algorithm exercises I've done. 

## helpful reminders :100:
- `array.unshift(somethang)` - adds to the beginning of the array
- `array.push(sumthing)` - adds to the end of the array
- `array.shift()` - removes and returns the first element
- `array.pop()` - removes and returns the last element
- Use `slice` instead of `delete` to delete an item from an array. Using `delete` replaces the item with `undefined` instead of removing it from the array
- `array.slice(fromThisIndex, rightBeforeThisIndex)` - returns a new array with values from start and end paramenters
- `array.splice(index, deleteCount, addThis)` - returns a new array with value at index and the # of elements deleted, and replacing it with addThis value
- Careful: "In-place" does not mean "without creating any additional variables"! Rather, it means "without creating a new copy of the input." In general, an in-place function will only create additional variables that are O(1) space
- `Array.prototype.push.apply(array1, array2)` - to combine two arrays. array1 now has array2 appended to it. Calling the method returns the length tho
- `Number.isInteger(35)` returns true if the arugment is an integer
- `Array.isArray([35])` returns true if the argument is an array
- Get the max or the min of an array of numbers
```javascript
var numbers = [5, 458, -215];
var maxInNumbers = Math.max.apply(Math, numbers);
var minInNumbers = Max.min.apply(Math, numbers);
```
- Get the max or the min of two numbers: `Math.min(25,2)`, `Math.max(25,2)`

## stack
- first in, last out
- one way: `unshift()` and `shift()`
- another way: `push()` and `pop()`
- `push()` appends an item to the end of the array
- `pop()` removes and returns the last item in the array

```javascript
stack.add = stack.push(somethang);
stack.remove = stack.pop();
```

```javascript
var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]
alert(i);            // displays 5
```

## queue
- first in, first out
- one way: `unshift()` and `pop()`
- another way: `push()` and `shift()`
- `push()` inserts the passed argument at the end of the array 
- `shift()` removes and returns the first item

```javascript
queue.add = queue.push;
queue.remove = queue.shift();
```

```javascript
var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]
alert(i);              // displays 2
```