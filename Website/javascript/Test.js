function submitForm() {
  var xhr = new XMLHttpRequest();

  // Set up the request
  xhr.open("GET", "https://localhost:44303/api/User/GetUserInfo", true);

  // Check for errors and handle response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        handleSuccess(xhr.responseText);
      } else {
        handleFailure(xhr.status);
      }
    }
  };

  // Set authorization header with a valid ASCII token
  var token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6Ik1haG1vdWQiLCJleHAiOjE3MTU3OTI4NTEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzAzLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQyMDAvIn0.XGJHBqZIe9zj2iFAkiI3N33_TGfWG5LXdVefs9e6PSg";
  xhr.setRequestHeader("Authorization", token);

  // Send the request
  xhr.send();
}

// Function to handle successful response
function handleSuccess(response) {
  localStorage.setItem("token", response);
  //window.location.href = "./courses.html";
  console.log(response);
}

// Function to handle request failure
function handleFailure(status) {
  console.error("Request failed:", status);
}

submitForm();
