document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form); // Collect form data

    // Send a POST request to the specified URL
    fetch("https://localhost:44303/api/User/Login", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // If response is OK, parse the JSON
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        console.log("Login successful", data); // Handle success
        // You can also redirect or perform other actions on success
      })
      .catch((error) => {
        console.error("Error:", error); // Handle errors
      });
  });
});
