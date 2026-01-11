// 1)
// var nameRegex = /^[a-zA-Z\s]+$/;
// var phoneRegex = /^[0-9]{8}$/;
// var mobileRegex = /^(010|011|012|015)[0-9]{8}$/;
// var emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// do {
//     var username = prompt("Enter your name");
// } while (username === null || !nameRegex.test(username));

// do {
//     var phone = prompt("Enter your phone");
// } while (phone === null || !phoneRegex.test(phone));

// do {
//     var mobile = prompt("Enter your mobile");
// } while (mobile === null || !mobileRegex.test(mobile));

// do {
//     var email = prompt("Enter your email");
// } while (email === null || !emailRegex.test(email));

// // Welcome Message
// alert("Welcome, " + username.trim() + "\nPhone: " + phone + "\nMobile: " + mobile + "\nEmail: " + email);



///////////////////////////////////////////////////////////////
// 2

// do {
//     var input = prompt("Enter a string");
// } while (!isNaN(input));

// var caseSensitivity = confirm("Consider case sensitivity?");

// var reversed = input.split("").reverse().join("");
// if (caseSensitivity) {
//     if (input === reversed) {
//         alert("The string is a palindrome");
//     } else {
//         alert("The string is not a palindrome");
//     }
// } 
// else {
//     if (input.toLowerCase() === reversed.toLowerCase()) {
//         alert("The string is a palindrome");
//     } else {
//         alert("The string is not a palindrome");
//     }
// }


///////////////////////////////////////////////////////////////
// 3

// var regex = /^[0-9]+(\.[0-9]+)?$/;
// do {
//     var radious = prompt("Enter the radius");
// } while (!regex.test(radious));

// var area = Math.PI * Math.pow(radious, 2);
// alert("The area of the circle is " + area);

// do {
//     var squareRoot = prompt("Enter the value you want to calc square root");
// } while (!regex.test(squareRoot));

// alert("The square root of " + squareRoot + " is " + Math.sqrt(squareRoot));


///////////////////////////////////////////////////////////////
// 4)

// var arr = [];
// for (var i = 0; i < 3; i++) {
//     var num = parseInt(prompt("Enter a number"));
//     arr.push(num);
// }

// var sum = arr.reduce((a, b) => a + b, 0);
// var multiplication = arr.reduce((a, b) => a * b, 1);
// var division = arr.reduce((a, b) => a / b, 1);

// document.write("The sum of the 3 values " + arr.join(" + ") + " = " + sum + "<br>"); // 4 + 5 + 
// document.write("The multiplication of the 3 values " + arr.join(" * ") + " = " + multiplication + "<br>");
// document.write("The division of the 3 values " + arr.join(" / ") + " = " + division + "<br>");


///////////////////////////////////////////////////////////////
// 5) Functions 

// function f1(x, y) {
//     if (arguments.length !== 2) {
//         throw("Please enter 2 arguments");
//     }
//     console.log(x + " " + y);
// }
// // f1(10);
// f1(10,20,30);
// f1(10,20);


// function f2() {
//     var reversedArgs = [];
//     for (var i = arguments.length - 1; i >= 0; i--) {
//         reversedArgs.push(arguments[i]);
//     }
//     console.log(reversedArgs);
// }
// f2(10,20,30);
// f2("Hello", "World", 2, 3, 4);



// function sum() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] !== "number") {
//             throw("Please enter only numbers");
//         }
//         sum += arguments[i];
//     }
//     return sum;
// }
// // var result = sum(1, "h");
// var result = sum(1, 2, 3, 4, 5);
// console.log(result);