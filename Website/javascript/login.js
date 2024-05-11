//login on to the API endpoint for login and send the data to the server using form data
function showloading() {
  document.getElementById("loadingDiv").style.display = "flex";
}
function hideloading() {
  document.getElementById("loadingDiv").style.display = "none";
}

function submitForm() {
  showloading();
  setTimeout(() => {
    hideloading();
  }, 2000);

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
        hideloading();
        // Request was successful, handle the response
        localStorage.setItem("token", xhr.responseText);
        window.location.href = "./courses.html";
        console.log(xhr.responseText);
      } else {
        hideloading();
        // There was an error with the request
        console.error("Request failed:", xhr.status);
      }
    }
  };
  //print Response body
  xhr.onload = function () {
    hideloading();
    console.log(xhr.responseText);
    if (xhr.responseText == "Username not found") {
      ShowWrongUsername(true);
    } else if (xhr.responseText == "Password is wrong") {
      ShowWrongPassword(true);
    } else {
      console.log(xhr.responseText);
    }
  };

  xhr.send(formData);
}

function ShowWrongPassword(state) {
  if (state) {
    document.getElementById("span-password").style.display = "block";
  } else {
    document.getElementById("span-password").style.display = "none";
  }
}

function ShowWrongUsername(state) {
  if (state) {
    document.getElementById("span-user").style.display = "block";
  } else {
    document.getElementById("span-user").style.display = "none";
  }
}

// ShowWrongUsername(true);
// ShowWrongPassword(true);

document.getElementById("password").oninput = function () {
  ShowWrongUsername(false);
  ShowWrongPassword(false);
};

document.getElementById("username").oninput = function () {
  ShowWrongUsername(false);
  ShowWrongPassword(false);
};

function showloading() {
  document.getElementById("loadingDiv").style.display = "flex";
}
function hideloading() {
  document.getElementById("loadingDiv").style.display = "none";
}
