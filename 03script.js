// ------------ Questions 01 ------------

// const numbers1 = [1, 2, 3, 4];

// const result1 = numbers1.map(function(num) {
// return num + 10;
// });

// console.log(result1);

// ------------ Questions 02 ------------

// const arr = ['a', 'b', 'c', 'd'];

// arr.forEach(function(value, index) {
// console.log(value, index);
// });

// ------------ Questions 03 ------------

// const numbers3 = [10, 20, 30, 40, 50, 60];

// const result3 = numbers3.slice(1, 4);

// console.log(result3);

// ------------ Questions 04 ------------

// let animals = ['cat', 'dog', 'rabbit'];

// animals.push('lion');
// animals.pop();

// console.log(animals);

// ------------ Questions 05 ------------

// let str = 'JavaScript Is FUN';

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// ------------ Questions 06 ------------

// let str6 = 'hello';
// let reverse = '';

// for(let i = str6.length - 1; i >= 0; i--) {
// reverse = reverse + str6[i];
// }

// console.log(reverse);

// ------------ Questions 07 ------------

// const fruits = ['apple', 'mango', 'banana'];

// const result7 = fruits.map(function(value) {
// return value.toUpperCase();
// });

// console.log(result7);

// ------------ Questions 08 ------------

// const student = {
// name: 'Sara',
// grade: 'A',
// city: 'Pune'
// };

// student.city = 'Delhi';
// student.age = 20;

// console.log(student);

// ------------ Questions 09 ------------

// const employees = [
// { name: 'John', salary: 25000 },
// { name: 'Riya', salary: 30000 },
// { name: 'Sam', salary: 40000 }
// ];

// employees.forEach(function(value) {
// console.log(value.name, value.salary);
// });

// ------------ Questions 10 ------------

// const users = [
// { name: 'Alice', score: 45 },
// { name: 'Bob', score: 70 },
// { name: 'Charlie', score: 55 }
// ];

// const result10 = users.map(function(value) {
// return {
// name: value.name,
// score: value.score,
// passed: value.score >= 50
// };
// });

// console.log(result10);

// ------------ Questions 11 ------------

// function sum(a, b) {
// return a + b;
// }

// console.log(sum(10, 20));

// ------------ Questions 12 ------------

// function makeMultiplier(multiplier) {
// return function(num) {
// return num * multiplier;
// };
// }

// const double = makeMultiplier(2);

// console.log(double(5));

// ------------ Questions 13 ------------

// function add(a, b) {
// return a + b;
// }

// function subtract(a, b) {
// return a - b;
// }

// function performOperation(a, b, operationCallback) {
// return operationCallback(a, b);
// }

// console.log(performOperation(10, 5, add));
// console.log(performOperation(10, 5, subtract));

// ------------ Questions 14 ------------

// function applyTwice(arr, fn) {
// return arr.map(function(value) {
// return fn(fn(value));
// });
// }

// function doubleNum(num) {
// return num * 2;
// }

// console.log(applyTwice([1, 2, 3], doubleNum));

// ------------ Questions 15 ------------

// setTimeout(function() {
// console.log('3 seconds passed');
// }, 3000);

// ------------ Questions 16 ------------

// function getUserData(callback) {
// setTimeout(function() {
// callback('User data loaded');
// }, 2000);
// }

// getUserData(function(data) {
// console.log(data);
// });

// ------------ Questions 17 ------------

// setTimeout(function() {
// console.log('Boil water');

// setTimeout(function() {
//     console.log('Add tea leaves');

//     setTimeout(function() {
//         console.log('Add milk');

//         setTimeout(function() {
//             console.log('Tea is ready');
//         }, 1000);

//     }, 1000);

// }, 1000);
// }, 1000);

// ------------ Questions 19 ------------

// function calculate(a, b, callback) {
// let result = a + b;

// callback(result, 'Operation complete');
// }

// calculate(10, 20, function(result, message) {
// console.log(result);
// console.log(message);
// });

// ------------ Questions 20 ------------

// const nums = [1, 2, 3, 4, 5];

// const doubled = nums.map(function(value) {
// return value * 2;
// });

// doubled.forEach(function(value) {
// console.log(value);
// });