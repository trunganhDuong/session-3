// VARIABLE SWAP
// Simple
// let a = 1, b = 2;
// console.log(a, b);
// let temp = a; // temporary variable
// a = b;
// b = temp;
// console.log(a, b);

// Pro
// Array destructing
// syntax: let [var1, var2, ... varN] = <array> n <= array length
// let a = 1, b = 2;
// console.log("Before: ", a, b);
// let arr = [b, a];
// [a, b] = arr; // array destructing
// console.log("After: ", a, b);

// STRING SPLIT
// const s = 'Hello beauty there';
// console.log("Before: ", s);
// let arr = s.split(' ');
// console.log("After: ", arr);
//Result: [“Hello”, “beauty”, “there”]


// SPREAD OPERATOR
// const a = [4, 5, 7, -8, -100, 5, 4, 20, 46, -25];
// console.log(a);
// console.log(...a); // <=> console.log(a[0], a[1], a[2], a[3]);

// Find Min
// Simple: Using Loop
// let min = 9999; // great enough
// for (let i = 0; i < a.length; i++) {
//     if (a[i] < min) {
//         min = a[i];
//     }
// }

// Pro: Using library + spread operator
// Math.min(var1, var, var3, ...., varn)
// min = Math.min(...a);
// console.log("Min is: ", min);


// Question 4
// let items = ['Jeans', 'Jacket', 'Shorts'];
// const availableCommands = ['c', 'r', 'u', 'd'];
// let command = prompt("Enter command (C, R, U, D)");
// if (command !== '') {
//     command = command.toLowerCase();
// }

// while (command != '') {
//     command = command.toLowerCase();
//     // check wrong input
//     while (!availableCommands.includes(command)) {
//         alert("Command is not supported");
//         command = prompt("Enter command (C, R, U, D)");

//     }

//     // switch case
//     switch (command) {
//         case 'c':
//             let newItem = prompt("Enter new Item");
//             while (newItem == '') {
//                 alert("Value should not be empty");
//                 newItem = prompt("Enter new Item");
//             }
//             items.push(newItem);
//             break;
//         case 'r':
//             console.log("Current items include: ");
//             for (let i = 0; i < items.length; i++) {
//                 console.log((i + 1).toString() + ". ", items[i]);
//             }
//             break;
//         case 'u':
//             let index, updateValue;
//             do { // You can use WHILE LOOP, but nice to use do-while. Please research for more info
//                 index = prompt("Which index do you want to update?");
//                 index = Number(index);// assume input is in correct format, you can validate if you want

//                 let isIndexInvalid = index <= 1 || index > items.length;
//                 if(isIndexInvalid){
//                     alert("Entered index is out of range. Current items length: " + items.length);
//                 }
//             }while ( index < 1 || index > items.length);

//             updateValue = prompt("Enter new value");
//             while (updateValue == '') {
//                 alert("Value should not be empty");
//                 updateValue = prompt("Enter new value");
//             }
//             items[index - 1] = updateValue;
//             break;
//         case 'd':
//             let indexDelete;
//             do { // You can use WHILE LOOP, but nice to use do-while. Please research for more info
//                 indexDelete = prompt("Which index do you want to update?");
//                 indexDelete = Number(indexDelete);// assume input is in correct format, you can validate if you want

//                 let isIndexInvalid = indexDelete <= 1 || indexDelete > items.length;
//                 if (isIndexInvalid) {
//                     alert("Entered index is out of range. Current items length: " + items.length);
//                 }
//             } while (indexDelete < 1 || indexDelete > items.length);

//             items.splice(indexDelete - 1, 1);
//             break;

//     }

//     alert('Done');
//     command = prompt("Enter command (C, R, U, D)");
// }

//Question 5 
// let userInput = prompt('Enter a sequence of number, separated by (,):');
// while (userInput == '') {
//     alert("Value should not be empty");
//     userInput = prompt('Enter a sequence of number, separated by (,):');
// }
// let arr = userInput.split(',');

// Simple: Using Loop
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]); // assum all character is in number format, you can further validate them if you want
// }
// console.log("Sum of " + userInput + " is:", sum);

// Pro: Using ARRAY REDUCE FUNCTION
// This is a little advance, you can reference if you want. Using loop is good enough
// sum = 0;
// sum = arr.reduce(function (result, value){
//     let num = Number(value);  // Loop through the array, with each item, sum it up
//     return result + num;
// }, 0); // initialize value of sum variable to 0
// console.log("Sum of " + userInput + " is:", sum);


// Question 6:
// Find Min
// let userInput = prompt('Enter a sequence of number, separated by (,):');
// while (userInput == '') {
//     alert("Value should not be empty");
//     userInput = prompt('Enter a sequence of number, separated by (,):');
// }

// let arr = userInput.split(',');
// // Simple: Using Loop
// let min = 9999; // great enough
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// Pro: Using library + spread operator
// Math.min(var1, var, var3, ...., varn)
// min = Math.min(...arr);
// console.log("Min is: ", min);


// Question 7:
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let userInput = Number(prompt(('Enter a nunber:')))
// // Simple: Using loop
// let isNumberFound = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == userInput) {
//         console.log(userInput + " is found in the array at index = " + i);
//         isNumberFound = true;
//         break;
//     }
// }
// if (!isNumberFound) {
//     console.log(userInput + " is not found in the array");
// }

// Question 8
// let flock = [5, 7, 300, 90, 24, 50, 75];

// // 8.1
// console.log("Hello my name is: ... and here are my sheeps sizes: ");
// console.log(flock);

// // 8.2
// // Find the item with highest value
// let max = -9999;
// let indexOfHighestValue = -1;
// for (let i = 0; i < flock.length; i++) {
//     if (flock[i] > max) {
//         max = flock[i];
//         indexOfHighestValue = i;
//     }
// }

// // Advanded solution
// max = Math.max(...flock);
// indexOfHighestValue = flock.indexOf(max);

// console.log("Biggest sheep size is: " + max + " at index: " + indexOfHighestValue);

// // 8.3
// flock[indexOfHighestValue] = 8;
// console.log("After shaving, here are my flock size:");
// console.log(flock);

// // 8.4
// for (let i = 0; i < flock.length; i++) {
//     flock[i] += 50;
// }
// console.log("Flock size after one month:");
// console.log(flock);

// // Advanced solution
// // flock = flock.map(function(item){
// //     return item + 50;
// // });
// // console.log("Flock size after one month:");
// // console.log(flock);

// // 8.5
// const numberOfLoop = 4;
// flock = [5, 7, 300, 90, 24, 50, 75];
// for (let i = 0; i < numberOfLoop; i++) {    
//     console.log("---LOOP NUMBER "+ (i+1)+ "---");
//     // 8.1
//     console.log("Hello my name is: ... and here are my sheeps sizes: ");
//     console.log(flock);

//     // 8.2
//     // Find the item with highest value
//     let max = -9999;
//     let indexOfHighestValue = -1;
//     for (let i = 0; i < flock.length; i++) {
//         if (flock[i] > max) {
//             max = flock[i];
//             indexOfHighestValue = i;
//         }
//     }

//     // Advanded solution
//     max = Math.max(...flock);
//     indexOfHighestValue = flock.indexOf(max);

//     console.log("Biggest sheep size is: " + max + " at index: " + indexOfHighestValue);

//     // 8.3
//     flock[indexOfHighestValue] = 8;
//     console.log("After shaving, here are my flock size:");
//     console.log(flock);

//     // 8.4
//     for (let i = 0; i < flock.length; i++) {
//         flock[i] += 50;
//     }
//     console.log("Flock size after one month:");
//     console.log(flock);
// }

// // 8.6
// let totalSize = 0;
// for (let i = 0; i < flock.length; i++) {
//     totalSize += flock[i];
// }
// console.log("My total size is: " + totalSize);



// TURTLES
// https://www.rapidtables.com/convert/color/hex-to-rgb.html
// function colorSquares() {
//     const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
//     let initialSide = 30;
//     for (let i = 0; i < colors.length; i++) {
//         let color = colors[i];
//         switch (color) {
//             case 'red':
//                 colour(255, 0, 0, 1);
//                 break;
//             case 'gray':
//                 colour(128, 128, 128, 1);
//                 break;
//             case 'blue':
//                 colour(0, 0, 255, 1);
//                 break;
//             case 'purple':
//                 colour(128, 0, 128, 1);
//                 break;
//             case 'cyan':
//                 colour(0, 255, 255, 1);
//                 break;
//         }

//         square(initialSide);
//         initialSide += 30;
//     }
// }

// Question 10
// let userInput = prompt("Enter name separated with comma");
// let names = userInput.split(',');

// using loop
// for(let i=0;i<names.length;i++){
//     names[i] = '<' + names[i] + '>';
// }
// console.log(names);

// Advanced solution
// names = names.map(function(item){
//     return '<' + item + '>';
// });
// console.log(names);

// Question 11
let userInput = prompt("Enter numbers separated with comma");
let numbers = userInput.split(',');
let oddNumbers=[];
// using loop
// for(let i=0;i<numbers.length;i++){
//     let number = Number(numbers[i]);
//     if(number%2!=0){
//         oddNumbers.push(number);
//     }
// }
// console.log(oddNumbers);

// advanced solution: ARRAY FILTER FUNCTION
oddNumbers = numbers.filter(function(number){
    return Number(number) % 2 != 0;
});
console.log(oddNumbers);

