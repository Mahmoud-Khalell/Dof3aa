
//login on to the API endpoint for login and send the data to the server using form data

function submitForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log(username);
  console.log(password);
  var formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

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
  //print Response body
  xhr.onload = function () {
    console.log(xhr.responseText);
  };
  

  xhr.send(formData);
}


// function showloading() {
//   document.getElementById("loadingDiv").style.display = "flex";
// }
// function hideloading() {
//   document.getElementById("loadingDiv").style.display = "none";
// }

// function ShowWrongPassword(state) {
//   if (state) {
//     document.getElementById("span-password").style.display = "block";
//   } else {
//     document.getElementById("span-password").style.display = "none";
//   }
// }

// function ShowWrongUsername(state) {
//   if (state) {
//     document.getElementById("span-user").style.display = "block";
//   } else {
//     document.getElementById("span-user").style.display = "none";
//   }
// }

// // ShowWrongUsername(true);
// // ShowWrongPassword(true);

// document.getElementById("password").oninput = function () {
//   ShowWrongUsername(false);
//   ShowWrongPassword(false);
// };

// document.getElementById("username").oninput = function () {
//   ShowWrongUsername(false);
//   ShowWrongPassword(false);
// };
