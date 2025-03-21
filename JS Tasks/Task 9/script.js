document.addEventListener("DOMContentLoaded", function () {

    // Registration Form Handling
    let form = document.getElementById("registrationForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let contact = document.getElementById("contact").value.trim();
            let address = document.getElementById("address").value.trim();

            // Validate input
            if (!name || !email || !contact || !address) {
                alert("All fields are required!");
                return;
            }

            // Store user data in localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ name, email, contact, address });
            localStorage.setItem("users", JSON.stringify(users));

            alert("User Registered Successfully!");

            // Reset form
            form.reset();
        });
    }

    // Display Users in Table
    let userTable = document.getElementById("userTable");
    if (userTable) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.contact}</td><td>${user.address}</td>`;
            userTable.appendChild(row);
        });
    }
});
