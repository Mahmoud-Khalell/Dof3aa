function submitForm() {
  var formData = new FormData();
  formData.append("username", "Mahmoud");
  formData.append("password", "Std#031221");

  var xhr = new XMLHttpRequest();

  // Set up the request
  xhr.open("POST", "https://localhost:44303/api/User/Login", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Request was successful, handle the response
        console.log(xhr.responseText);
      } else {
        // There was an error with the request
        console.error("Request failed:", xhr.status);
      }
    }
  };

  xhr.send(formData);
}
