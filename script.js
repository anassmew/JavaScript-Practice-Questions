
// // ----------------------------- Question 01 -----------------------------
// {
//     let a = 10;
//     let b = 25;
//     let c = 15;

//     if (a > b && a > c) {
//         console.log(a);
//     }
//     else if (b > a && b > c) {
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }


// // ----------------------------- Question 02 -----------------------------
// {
//     let a = 20;
//     let b = 10;
//     let op = "+";

//     switch (op) {
//         case "+":
//             console.log(a + b);
//             break;

//         case "-":
//             console.log(a - b);
//             break;

//         case "*":
//             console.log(a * b);
//             break;

//         case "/":
//             if (b != 0) {
//                 console.log(a / b);
//             }
//             else {
//                 console.log("Cannot divide by zero");
//             }
//             break;

//         default:
//             console.log("Invalid Operator");
//     }
// }


// // ----------------------------- Question 03 -----------------------------
// {
//     let year = 2024;

//     if (year % 400 == 0) {
//         console.log("Leap Year");
//     }
//     else if (year % 100 == 0) {
//         console.log("Not Leap Year");
//     }
//     else if (year % 4 == 0) {
//         console.log("Leap Year");
//     }
//     else {
//         console.log("Not Leap Year");
//     }
// }


// // ----------------------------- Question 04 -----------------------------
// {
//     let marks = 85;

//     if (marks >= 90) {
//         console.log("Grade A");
//     }
//     else if (marks >= 80) {
//         console.log("Grade B");
//     }
//     else if (marks >= 70) {
//         console.log("Grade C");
//     }
//     else if (marks >= 60) {
//         console.log("Grade D");
//     }
//     else {
//         console.log("Grade F");
//     }
// }


// // ----------------------------- Question 05 -----------------------------
// {
//     let month = 2;

//     if (month == 1 || month == 3 || month == 5 ||
//         month == 7 || month == 8 || month == 10 ||
//         month == 12) {
//         console.log("31 Days");
//     }
//     else if (month == 4 || month == 6 ||
//         month == 9 || month == 11) {
//         console.log("30 Days");
//     }
//     else if (month == 2) {
//         console.log("28 Days");
//     }
//     else {
//         console.log("Invalid Month");
//     }
// }


// // ----------------------------- Question 06 -----------------------------
// {
//     let ch = "A";

//     if (ch == "a" || ch == "e" || ch == "i" ||
//         ch == "o" || ch == "u" ||
//         ch == "A" || ch == "E" || ch == "I" ||
//         ch == "O" || ch == "U") {
//         console.log("Vowel");
//     }
//     else if (ch >= "0" && ch <= "9") {
//         console.log("Numeric Digit");
//     }
//     else if ((ch >= "a" && ch <= "z") ||
//         (ch >= "A" && ch <= "Z")) {
//         console.log("Consonant");
//     }
//     else {
//         console.log("Special Character");
//     }
// }


// // ----------------------------- Question 07 -----------------------------
// {
//     let n = 5;

//     for (let i = 1; i <= 10; i++) {
//         console.log(n + " x " + i + " = " + (n * i));
//     }
// }


// // ----------------------------- Question 08 -----------------------------
// {
//     let n = 5;
//     let fact = 1;
//     let i = 1;

//     while (i <= n) {
//         fact = fact * i;
//         i++;
//     }

//     console.log("Factorial =", fact);
// }


// // ----------------------------- Question 09 -----------------------------
// {
//     let n = 10;
//     let a = 0;
//     let b = 1;

//     for (let i = 1; i <= n; i++) {
//         console.log(a);

//         let c = a + b;
//         a = b;
//         b = c;
//     }
// }


// // ----------------------------- Question 10 -----------------------------
// {
//     let n = 1234;
//     let sum = 0;

//     while (n > 0) {
//         let digit = n % 10;
//         sum = sum + digit;
//         n = Math.floor(n / 10);
//     }

//     console.log("Sum =", sum);
// }


// // ----------------------------- Question 11 -----------------------------
// {
//     let n = 7;
//     let count = 0;

//     for (let i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             count++;
//         }
//     }

//     if (n > 1 && count == 2) {
//         console.log("Prime Number");
//     }
//     else {
//         console.log("Not Prime Number");
//     }
// }


// // ----------------------------- Question 12 -----------------------------
// {
//     for (let i = 1; i <= 4; i++) {
//         let star = "";

//         for (let j = 1; j <= i; j++) {
//             star = star + "*";
//         }

//         console.log(star);
//     }
// }


// // ----------------------------- Question 13 -----------------------------
// {
//     let arr = [10, 25, 30, 15, 20];

//     let largest = -Infinity;
//     let second = -Infinity;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > largest) {
//             second = largest;
//             largest = arr[i];
//         }
//         else if (arr[i] > second && arr[i] != largest) {
//             second = arr[i];
//         }
//     }

//     console.log("Second Largest =", second);
// }


// // ----------------------------- Question 14 -----------------------------
// {
//     let arr = [10, 20, 30, 40, 50];

//     let start = 0;
//     let end = arr.length - 1;

//     while (start < end) {
//         let temp = arr[start];

//         arr[start] = arr[end];
//         arr[end] = temp;

//         start++;
//         end--;
//     }

//     console.log(arr);
// }


// // ----------------------------- Question 15 -----------------------------
// {
//     let arr = [10, 20, 10, 30, 20, 10];

//     for (let i = 0; i < arr.length; i++) {

//         let count = 0;
//         let already = false;

//         for (let j = 0; j < i; j++) {
//             if (arr[i] == arr[j]) {
//                 already = true;
//             }
//         }

//         if (already == false) {

//             for (let j = 0; j < arr.length; j++) {
//                 if (arr[i] == arr[j]) {
//                     count++;
//                 }
//             }

//             console.log(arr[i] + " = " + count);
//         }
//     }
// }


// // ----------------------------- Question 16 -----------------------------
// {
//     let arr = [0, 1, 0, 3, 12];

//     let index = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != 0) {
//             arr[index] = arr[i];
//             index++;
//         }
//     }

//     while (index < arr.length) {
//         arr[index] = 0;
//         index++;
//     }

//     console.log(arr);
// }


// // ----------------------------- Question 17 -----------------------------
// {
//     let arr = [10, 20, 30, 20, 40, 10];

//     for (let i = 0; i < arr.length; i++) {

//         let count = 0;
//         let already = false;

//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 count++;
//             }
//         }

//         for (let j = 0; j < i; j++) {
//             if (arr[i] == arr[j]) {
//                 already = true;
//             }
//         }

//         if (count > 1 && already == false) {
//             console.log(arr[i]);
//         }
//     }
// }


// // ----------------------------- Question 18 -----------------------------
// {
//     let a = [10, 20, 30, 40];
//     let b = [20, 30, 50, 60];

//     for (let i = 0; i < a.length; i++) {

//         for (let j = 0; j < b.length; j++) {

//             if (a[i] == b[j]) {
//                 console.log(a[i]);
//                 break;
//             }
//         }
//     }
// }


// // ----------------------------- Question 19 -----------------------------
// {
//     let str = "Madam";
//     let clean = "";

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != " ") {
//             clean = clean + str[i].toLowerCase();
//         }
//     }

//     let rev = "";

//     for (let i = clean.length - 1; i >= 0; i--) {
//         rev = rev + clean[i];
//     }

//     if (clean == rev) {
//         console.log("Palindrome");
//     }
//     else {
//         console.log("Not Palindrome");
//     }
// }


// // ----------------------------- Question 20 -----------------------------
// {
//     let str = "Hello World";
//     let vowel = 0;
//     let consonant = 0;

//     for (let i = 0; i < str.length; i++) {

//         let ch = str[i].toLowerCase();

//         if (ch == "a" || ch == "e" || ch == "i" ||
//             ch == "o" || ch == "u") {
//             vowel++;
//         }
//         else if (ch >= "a" && ch <= "z") {
//             consonant++;
//         }
//     }

//     console.log("Vowels =", vowel);
//     console.log("Consonants =", consonant);
// }


// // ----------------------------- Question 21 -----------------------------
// {
//     let str = "Hello World";
//     let word = "";
//     let result = "";

//     for (let i = 0; i <= str.length; i++) {

//         if (i == str.length || str[i] == " ") {

//             if (result == "") {
//                 result = word;
//             }
//             else {
//                 result = word + " " + result;
//             }

//             word = "";
//         }
//         else {
//             word = word + str[i];
//         }
//     }

//     console.log(result);
// }


// // ----------------------------- Question 22 -----------------------------
// {
//     let str = "swiss";

//     for (let i = 0; i < str.length; i++) {

//         let count = 0;

//         for (let j = 0; j < str.length; j++) {
//             if (str[i] == str[j]) {
//                 count++;
//             }
//         }

//         if (count == 1) {
//             console.log("First Non-Repeating =", str[i]);
//             break;
//         }
//     }
// }


// // ----------------------------- Question 23 -----------------------------
// {
//     let str1 = "listen";
//     let str2 = "silent";

//     let flag = true;

//     if (str1.length != str2.length) {
//         flag = false;
//     }
//     else {

//         for (let i = 0; i < str1.length; i++) {

//             let count1 = 0;
//             let count2 = 0;

//             for (let j = 0; j < str1.length; j++) {

//                 if (str1[i] == str1[j]) {
//                     count1++;
//                 }

//                 if (str1[i] == str2[j]) {
//                     count2++;
//                 }
//             }

//             if (count1 != count2) {
//                 flag = false;
//                 break;
//             }
//         }
//     }

//     if (flag == true) {
//         console.log("Anagram");
//     }
//     else {
//         console.log("Not Anagram");
//     }
// }


// // ----------------------------- Question 24 -----------------------------
// {
//     let str = "abc123def456";
//     let result = "";

//     for (let i = 0; i < str.length; i++) {

//         if (str[i] >= "0" && str[i] <= "9") {
//             result = result + str[i];
//         }
//     }

//     console.log(result);
// }
