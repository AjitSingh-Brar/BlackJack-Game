console.log("Hello");

// alert("hello Ajit");

// How to write a comment inline

// variables

var b = "smoothie";
console.log(b);

// var sumNumber = 30;
// console.log(sumNumber);

// var age = prompt("What is your age?");

// document.getElementById("someText").innerHTML = age;

//Numbers in Javascript

var num1 = 10;
num1--;

num1++;
console.log(num1);

//Increment / decrement by any number

num1 += 10;
console.log(num1);

/* Functions
 1. Create a function.
 2. Call the function.

*/

function fun() {
  console.log("This is a function");
}

//Call
fun();

/*Let create a function that takes a name and returns 
hello followed by your name */

// var name = prompt("What is your name?");

// function greeting(yourName) {
//   // string concatenation.
//   var result = "Hello " + yourName;

//   console.log(result);
// }

// greeting(name);

//Function with arguments

function sumNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}

sumNumbers(10, 10);

/*While Loops*/

// var num = 0;

// while (num < 10) {
//   num += 1;
//   console.log(num);
// }

/*For loop*/
// for (let num = 0; num < 100; num++) {
//   console.log(num);
// }

/*Data Types*/
let yourAge = 18; // number
let yourName = "Bob"; //string

let name = { first: "Jane", last: "Doe" }; //object
let truth = false; //boolean

let groceries = ["Apple", "Banana", "Oranges"]; //Array

let random; // undefined
let nothing = null; // value null

//Strings in Javascripts (common activities)

let fruit = "banana,apple,oranges";
let moreFruits = "banana\napple"; // new line

console.log(fruit.length);
console.log(fruit.indexOf("q"));
console.log(fruit.slice(2, 5));
console.log(fruit.replace("ban", "113"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(",")); // split by comma

console.log(fruit.split("")); // split by chacraters

let fruits = ["banana", "apple", "orange", "pineapple"];
fruits = new Array("banana", "apple", "orange", "pineapple");

console.log(fruits[1]);

fruits[0] = "mango";

console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/*Array common methods*/

console.log(fruits.toString());

console.log(fruits.join("*"));

console.log(fruits.pop(), fruits);
console.log(fruits.push("blackberries"), fruits);
fruits[fruits.length] = "new fruit";
console.log(fruits);

fruits.shift(); // removes first element from a array
console.log(fruits);
fruits.unshift("kiwi");
console.log(fruits);

let vegetables = ["asparagus", "tomato", "broccoli"];

let allGroceries = fruits.concat(vegetables);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334];
console.log(allGroceries.sort());
console.log(
  someNumbers.sort(function (a, b) {
    return a - b;
  })
); // ascending order sorting
console.log(
  someNumbers.sort(function (a, b) {
    return b - a;
  })
); // descending order sorting

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);

/*Objects*/

let student = {
  first: "Ajit",
  last: "Singh",
  age: 20,
  height: 170,
  studentInfo: function () {
    return this.first + "\n" + this.last + "\n" + this.age;
  },
};

// console.log(student.first);
// console.log(student.last);

// student.first = "notAjit"; //changes value
// console.log(student.first);
console.log(student.studentInfo());

/*if else and switch statement*/
// var age = prompt("What is your age?");
// if (age >= 18 && age <= 35) {
//   status = "target demo";
//   console.log(status);
// } else {
//   status = "not my audience";
//   console.log(status);
// }

/* Switch Statements*/
var day = prompt("What is the day number?");

switch (5) {
  case 0:
    console.log("Sunday");
    break;
  case 5:
    console.log("Weekend");
    break;
  case 6:
    console.log("Weekdend");
    break;

  default:
    console.log("Weekday");
}

/* JSON */
