var myStack = [];   //Create empty array
myStack.push(1);    //Add 1
myStack.push(2);    //Add 2
myStack.push(3);    //Add 3
console.log(myStack);   //Print

console.log(myStack.pop()); //Last element extracted
console.log(myStack);   //Resulting array

var myQueue = [];   //Create empty array
myQueue.push(1);    //Add 1
myQueue.push(2);    //Add 2
myQueue.push(3);    //Add 3
console.log(myQueue);   //Print

console.log(myQueue.shift());   //First element extracted
console.log(myQueue.shift());   //First element extracted
console.log(myQueue.shift());   //First element extracted

var myArray = [1,2,3];
myArray.unshift(0);         //The unshift method is used to insert a variable at the beginning of an array
console.log(myArray);       // will print out 0,1,2,3

var myArray = [0,1,2,3,4,5,6,7,8,9];
var myArray2 = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,5);   //At position 3 remove 5 elements
var slice = myArray2.slice(3,7);   //Elements at position 3 to (7-1)=6 elements

console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9

console.log(slice);        // will print out 3,4,5,6
