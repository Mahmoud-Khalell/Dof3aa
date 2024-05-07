var form = document.getElementById("loginForm");

// create a function login on to the API endpoint for login using xmlhttprequest and send the data to the server
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var data = {
    UserName: "Badawy",
    password: "As@1234",
  };

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://localhost:44303/api/User/Login", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText);
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", username);
      // window.location.href = "index.html";
    } else if (xhr.readyState == 4) {
      var result = JSON.parse(xhr.responseText);
      if (result.username) {
        ShowWrongUsername(true);
      } else if (result.password) {
        ShowWrongPassword(true);
      }
    }
  };
  xhr.send(JSON.stringify(data));
}

function showloading() {
  document.getElementById("loadingDiv").style.display = "flex";
}
function hideloading() {
  document.getElementById("loadingDiv").style.display = "none";
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
