function addData() {
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("error");
    let ageError = document.getElementById("ageError");

    error.innerHTML = "";
    ageError.innerHTML = "";

    if (name === "" || age === "" || email === "") {
        error.innerHTML = "All fields are required";
        return;
    }

    if (isNaN(age) || age <= 0) {
        ageError.innerHTML = "Age must be a positive number";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.innerHTML = "Invalid email";
        return;
    }

    let table = document.getElementById("tableBody");
    let row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = email;

    resetForm();
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("ageError").innerHTML = "";
}
