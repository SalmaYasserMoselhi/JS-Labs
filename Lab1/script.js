// JavaScript Day1

// var y;
// console.log(y); // undefined


// var x=10;
// var y = 20;
// console.log(y*x-2); // 198


// var y;
// console.log(typeof y); // undefined


// var x = "1";
// var y = 2;
// console.log(x+y); // 12


// var x = 1;
// var y = true;
// console.log(x+y); // 1 + 1 = 2

///////////////////////////////////////////
// 2)

// do {
//     var message = prompt("Enter a message");
// } while (isFinite(message));

// for (var i = 1; i<=6; i++) {
//     document.write(`<h${i}>${message}</h${i}>`);
// }

///////////////////////////////////////////
// 3)

// var sum = 0;
// var input;
// // do {
// //     var input = prompt("Enter a number");
// //     if (isFinite(input)) {
// //         sum += Number(input);
// //     }
// // } while (sum < 100 && input != 0);

// do {
//     do {
//         input = prompt("Enter a number");
//     } while (input === null || input.trim() === "" || !isFinite(input));
    
//     sum += Number(input);
// } while (sum < 100 && Number(input) != 0);
// alert("The sum is " + sum);

//////////////////////////////////////////
// 4)

// var username;
// var birthYear;
// var age;

// do {
//     username = prompt("Enter your name:");
// } while (!isNaN(username));

// do {
//     birthYear = prompt("Enter your birth year:");
// } while (isNaN(birthYear) || birthYear === null || birthYear.trim() === "" || Number(birthYear) >= 2010);

// birthYear = Number(birthYear);
// age = 2026 - birthYear;

// document.write("<p>Name: " + username + "</p>");
// document.write("<p>Birth year: " + birthYear + "</p>");
// document.write("<p>Age: " + age + "</p>");
