/*
Fill an array of 5 elements from the user, sort it in descending and ascending orders
then display the output as shown in Fig.
*/

// var arr = [];
// for (var i = 0; i < 5; i++) {
//   arr[i] = Number(prompt("Enter a number"));
// }

// ascending = arr.slice().sort(function (a, b) {
//   return a - b;
// });

// descending = arr.slice().sort(function (a, b) {
//   return b - a;
// });

// document.getElementById(
//   "original"
// ).innerHTML = `<span style='color:#9F2B68;'>u've entered the values of </span>
//             <span style='color:grey;'>${arr.join(", ")}</span>`;

// document.getElementById(
//   "asc"
// ).innerHTML = `<span style='color:#9F2B68;'>Ascending order: </span>
//             <span style='color:grey;'>${ascending.join(", ")}</span>`;

// document.getElementById(
//   "desc"
// ).innerHTML = `<span style='color:#9F2B68;'>Descending order: </span>
//             <span style='color:grey;'>${descending.join(",")}</span>`;



////////////////////////////////////////////////////////////

/*
1.DOM
1.1.a Ask the user for number of persons wanted to be entered (the value should be a
number)
1.1.b then ask for users’ information sequentially.
name length should be more than 3 and less than 10 characters
age: should be greater than 10 and less than 60.
1.1.c print users’ information in HTML Table.
*/

// var noOfUsers;
// do {
//     noOfUsers = Number(prompt("Enter number of users"));
// } while (isNaN(noOfUsers) || noOfUsers <= 0);

// var tableEL = document.getElementById("usersTable");

// var nameRegex = /^[a-zA-Z]{4,9}$/;  
// var ageRegex  = /^(1[1-9]|[2-5][0-9])$/;

// for (var i = 1; i <= noOfUsers; i++) {
//     var username;
//     var age;

//     do {
//         username = prompt("Enter username");
//     } while (username === null || !nameRegex.test(username));

//     do {
//         age = prompt("Enter age");
//     } while (age === null || !ageRegex.test(age));

//     var row = document.createElement("tr");
//     row.style.padding = "8px";
//     row.style.textAlign = "center";
//     row.style.color = "#4a148c";
//     row.style.backgroundColor = "white";

//     var usernameCell = document.createElement("td");
//     var ageCell = document.createElement("td");

//     usernameCell.textContent = username;
//     ageCell.textContent = age;

//     row.appendChild(usernameCell);
//     row.appendChild(ageCell);

//     tableEL.appendChild(row);
// }
