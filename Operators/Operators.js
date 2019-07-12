var a = 1;
var b = 2;
var c = a + b;     // c is now equal to 3

var name = "John";
console.log("Hello " + name + "!");
console.log("The meaning of life is " + 42);
console.log(42 + " is the meaning of life");

console.log(1 + "1");   // outputs "11"

console.log(3 - 5);     // outputs -2
console.log(3 * 5);     // outputs 15
console.log(3 / 5);     // outputs 0.6

console.log(5 % 3);     // outputs 2

//JavaScript also has a Math module which contains more advanced functions:

//    Math.abs calculates the absolute value of a number
//    Math.exp calculates e to the power of a number
//    Math.pow(x,y) calculates the result of x to the power of y
//    Math.floor removes the fraction part from a number
//    Math.random() will give a random number x where 0<=x<1

var firstName = "John";
var lastName = "Smith";
var myNumber = 21;

// TODO: change the following code
var fullName = firstName + " " + lastName;
var meaningOfLife = myNumber*2;

console.log("The name is " + fullName);
console.log("The meaning of life is " + meaningOfLife);
