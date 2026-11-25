// ------------ Questions 01 ------------

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success!');
//     }, 2000);
// });

// p1.then((success) => {
//     console.log(success);
// });

// let p2 = new Promise((resolve, reject) => {
//     resolve(5);
// });

// p2.then((value) => {
//     return value;
// })
// .then((result) => {
//     return result * 10;
// })
// .then((result) => {
//     console.log(result);
// });


// // ------------ Questions 02 ------------

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Failed!');
//     }, 1000);
// });

// p3.then((success) => {
//     console.log(success);
// })
// .catch((error) => {
//     console.log(error.toUpperCase());
// })
// .finally(() => {
//     console.log('Operation completed.');
// });


// // ------------ Questions 03 ------------

// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let user = {
//                 id: 1,
//                 name: 'Anas'
//             };

//             resolve(user);
//         }, 1500);
//     });
// }

// async function showUser() {
//     let data = await getUser();
//     console.log(data);
// }

// showUser();


// // ------------ Questions 04 ------------

// function checkAge(age) {
//     try {
//         if(age < 18) {
//             throw 'Access denied';
//         }

//         console.log('Access granted');
//     }
//     catch(error) {
//         console.log(error);
//     }
//     finally {
//         console.log('Cleaning up...');
//     }
// }

// checkAge(16);


// // ------------ Questions 05 ------------

// function divide(a, b) {
//     return new Promise((resolve, reject) => {
//         if(b == 0) {
//             reject('Cannot divide by zero');
//         }
//         else {
//             resolve(a / b);
//         }
//     });
// }

// divide(10, 2)
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// // ------------ Questions 06 ------------

// let p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2);
//     }, 500);
// });

// p4.then((value) => {
//     console.log(value);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value * 2);
//         }, 500);
//     });
// })
// .then((value) => {
//     console.log(value);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value * 2);
//         }, 500);
//     });
// })
// .then((value) => {
//     console.log(value);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value * 2);
//         }, 500);
//     });
// })
// .then((value) => {
//     console.log(value);
// });


// // ------------ Questions 07 ------------

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('Network error');
//         }, 1000);
//     });
// }

// async function showData() {
//     try {
//         let data = await fetchData();
//         console.log(data);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// showData();


// // ------------ Questions 08 ------------

// function firstTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('First task completed');
//         }, 1000);
//     });
// }

// function secondTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Second task completed');
//         }, 1000);
//     });
// }

// async function runTasks() {
//     let result1 = await firstTask();
//     console.log(result1);

//     let result2 = await secondTask();
//     console.log(result2);
// }

// runTasks();


// // ------------ Questions 09 ------------

// function calculator(a, b) {
//     return new Promise((resolve, reject) => {
//         resolve(a + b);
//     });
// }

// calculator(10, 5)
// .then((result) => {
//     console.log(result);
//     return result * 2;
// })
// .then((result) => {
//     console.log(result);
// });


// // ------------ Questions 10 ------------

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         let users = [
//             { id: 1, name: 'Alice' },
//             { id: 2, name: 'Bob' },
//             { id: 3, name: 'Charlie' }
//         ];

//         if(users) {
//             resolve(users);
//         }
//         else {
//             reject('Users not found');
//         }
//     });
// }

// getUsers()
// .then((success) => {
//     console.log('Success:', success);
// })
// .catch((error) => {
//     console.log('Error:', error);
// });