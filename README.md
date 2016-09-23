# algorithms_yay

A place to keep all the algorithm exercises I've done. 

## helpful reminders :100:
- `array.unshift(somethang)` - adds to the beginning of the array
- `array.push(sumthing)` - adds to the end of the array
- `array.shift()` - removes and returns the first element
- `array.pop()` - removes and returns the last element
- `array.slice(fromThisIndex, rightBeforeThisIndex)` - returns a new array with values from start and end paramenters
- `array.splice(index, deleteCount, addThis)` - returns a new array with value at index and the # of elements deleted, and replacing it with addThis value

## stack
- first in, last out
- one way: `unshift()` and `shift()`
- another way: `push()` and `pop()`
- push() appends an item to the end of the array
- pop() removes and returns the last item in the array

``` stack.add = stack.push(somethang);
stack.remove = stack.pop();```

```var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]
alert(i);            // displays 5```

## queue
- first in, first out
- one way: `unshift()` and `pop()`
- another way: `push()` and `shift()`
- push() inserts the passed argument at the end of the array 
- shift() removes and returns the first item

```queue.add = queue.push;
queue.remove = queue.shift();```

```var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]
alert(i);              // displays 2```