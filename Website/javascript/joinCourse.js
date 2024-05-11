var input_1 = document.getElementById("in-1");
var input_2 = document.getElementById("in-2");
var input_3 = document.getElementById("in-3");
var input_4 = document.getElementById("in-4");
var input_5 = document.getElementById("in-5");
var input_6 = document.getElementById("in-6");
input_1.focus();

var allInputs = "";
//on keydown event
document.addEventListener("keydown", function (event) {
  // max length of input is 1
  if (input_1.value.length === 1) {
    input_2.focus();
  }
  if (input_2.value.length === 1) {
    input_3.focus();
  }
  if (input_3.value.length === 1) {
    input_4.focus();
  }
  if (input_4.value.length === 1) {
    input_5.focus();
  }
  if (input_5.value.length === 1) {
    input_6.focus();
  }
  if (input_6.value.length === 1) {
    input_6.blur();
  }

  if (event.key === "Backspace" || event.key === "Delete") {
    // set all inputs to empty
    input_6.value = "";

    input_5.value = "";
    input_4.value = "";
    input_3.value = "";
    input_2.value = "";

    input_1.value = "";
    input_1.focus();
  }

  console.log(allInputs);
  if (event.key === "Enter") {
    sendtodatabasse();
  }
});

document.addEventListener("keyup", function (event) {
  allInputs =
    input_1.value +
    input_2.value +
    input_3.value +
    input_4.value +
    input_5.value +
    input_6.value;
  // console.log(allInputs);
});

// convert to string to integer allInputs = parseInt(allInputs);

function sendtodatabasse() {
  //   showloading();
  //   setTimeout(() => {
  //     hideloading();
  //   }, 1000);
  var courseIntID = parseInt(allInputs);

  var formData = new FormData();
  formData.append("CourceId", courseIntID);

  console.log("All input: " + allInputs);
  console.log("parse: " + (courseIntID + 2));

  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://localhost:44303/api/Cource/Join?CourceId=" + allInputs,
    true
  );
  var token = "Bearer " + localStorage.getItem("token");
  xhr.setRequestHeader("Authorization", token);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Course join successfully");
      } else {
        console.log("Error join course");
      }
      console.log("xhr.status: " + xhr.status);
      console.log("xhr.responseText: " + xhr.responseText);
      // print Response body
    }
  };

  xhr.send(formData);

  xhr.onload = function () {
    console.log("xhr.status");
    showFeedBack(xhr.responseText);
  };
}

function showFeedBack(res) {
  var el = document.getElementById("FeedBack");
  if (res.length < 60) el.innerText = res;
}
