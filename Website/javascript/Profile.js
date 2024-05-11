// --------------------------------- get user data form DB ---------------------------------

var domain = "https://localhost:44303/";
function FeatchData() {
  var formData = new FormData();

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://localhost:44303/api/User/GetUserInfo");
  var token = "Bearer " + localStorage.getItem("token");
  xhr.setRequestHeader("Authorization", token);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Course created successfully");
      } else {
        console.log("Error creati ng course");
      }
    }
  };

  xhr.send(formData);
  xhr.onload = function () {
    console.log(xhr.responseText);
    // xhr.responseText to object
    var obj = JSON.parse(xhr.responseText);
    console.log(obj);
    console.log(obj.groups);
    LoadProfileData(obj);
    LoadCoursesData(obj.groups);
  };
}
FeatchData();

function LoadProfileData(obj) {
  document.getElementById("ProfileUserName").textContent = obj.userName;
  document.getElementById("ProfilePicNavBar").src = domain + obj.imageUrl;
  console.log(domain + obj.imageUrl);
  document.getElementById("ProfileImage").src = domain + obj.imageUrl;
  document.getElementById("ProfileName").textContent =
    "( " + obj.firstName + " " + obj.lastName + " )";
  document.getElementById("ProfileEmail").textContent = obj.email;
  document.getElementById("NumberOfGroups").textContent = obj.groups.length;
}

function LoadCoursesData(obj) {
  obj.forEach((element) => {
    if (element.rule === 1 || element.rule === 2) {
      const course = element.cource; // Access the course
      createCard(
        domain + course.image, // Assume domain as "https://example.com/"
        course.title,
        course.subTitle,
        course.id,
        "ProfilePageMangeCourses"
      );
    }else if (element.rule === 3) {
      const course = element.cource; // Access the course
      createCard(
        domain + course.image, // Assume domain as "https://example.com/"
        course.title,
        course.subTitle,
        course.id,
        "ProfilePageSupscribedCourses"
      );
    }

  });
}

function createCard(imgSrc, cardTitle, cardDescription, courseId,parant) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("col");

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = imgSrc;
  img.classList.add("card-img-top");
  img.alt = "...";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = cardTitle;

  const description = document.createElement("p");
  description.classList.add("card-text");
  description.textContent = cardDescription;

  cardBody.appendChild(title);
  cardBody.appendChild(description);

  card.appendChild(img);
  card.appendChild(cardBody);

  cardDiv.appendChild(card);

  const profilePage = document.getElementById(parant);
  profilePage.appendChild(cardDiv);

  cardDiv.addEventListener("click", () => {
    window.location.href = `weeks.html?id=${courseId}`;
  });
}

var checkCourseID = document.getElementById("courseIDinput");
var validfeedback = document.getElementById("valid-id-feedback");
var invalidfeedback = document.getElementById("invalid-id-feedback");

checkCourseID.oninput = function () {
  var pa = checkCourseID.value;

  if (pa.length < 4 || pa.length > 25) {
    validfeedback.innerHTML = "";
    invalidfeedback.innerHTML =
      "The course ID length should be betweent 4 and 25";
    checkCourseID.classList.add("is-invalid");
    checkCourseID.classList.remove("is-valid");
  } else if (pa.search(/[ ]/) >= 0) {
    validfeedback.innerHTML = "";
    invalidfeedback.innerHTML = "The course ID should not contain white space";
    checkCourseID.classList.add("is-invalid");
    checkCourseID.classList.remove("is-valid");
  } else if (TamamCourseID(checkCourseID.value)) {
    validfeedback.innerHTML = "Valid Course ID";
    invalidfeedback.innerHTML = "";
    checkCourseID.classList.remove("is-invalid");
    checkCourseID.classList.add("is-valid");
  } else {
    validfeedback.innerHTML = "";
    invalidfeedback.innerHTML = "The course ID is already taken";
    checkCourseID.classList.add("is-invalid");
    checkCourseID.classList.remove("is-valid");
  }
};

function TamamCourseID(id) {
  if (id == "123") return true;
  return false;
}

var checkCourseTitle = document.getElementById("courseTitleinput");
var validfeedbackTitle = document.getElementById("valid-Title-feedback");
var invalidfeedbackTitle = document.getElementById("invalid-Title-feedback");

checkCourseTitle.oninput = function () {
  var pa = checkCourseTitle.value;
  if (pa.search(/[!@#$%^&*]/) >= 0) {
    validfeedbackTitle.innerHTML = "";
    invalidfeedbackTitle.innerHTML =
      "The title should not contain special character [!@#$%^&*]";
    checkCourseTitle.classList.add("is-invalid");
    checkCourseTitle.classList.remove("is-valid");
  } else {
    validfeedbackTitle.innerHTML = "Valid";
    invalidfeedbackTitle.innerHTML = "";
    checkCourseTitle.classList.remove("is-invalid");
    checkCourseTitle.classList.add("is-valid");
  }
};

var checkCourseSupTitle = document.getElementById("courseSupTitleinput");
var validfeedbackSupTitle = document.getElementById("valid-SupTitle-feedback");
var invalidfeedbackSupTitle = document.getElementById(
  "invalid-SupTitle-feedback"
);

checkCourseSupTitle.oninput = function () {
  var pa = checkCourseSupTitle.value;
  if (pa.search(/[!@#$%^&*]/) >= 0) {
    validfeedbackSupTitle.innerHTML = "";
    invalidfeedbackSupTitle.innerHTML =
      "The title should not contain special character [!@#$%^&*]";
    checkCourseSupTitle.classList.add("is-invalid");
    checkCourseSupTitle.classList.remove("is-valid");
  } else {
    validfeedbackSupTitle.innerHTML = "Valid";
    invalidfeedbackSupTitle.innerHTML = "";
    checkCourseSupTitle.classList.remove("is-invalid");
    checkCourseSupTitle.classList.add("is-valid");
  }
};

// --------------------------------- create course ---------------------------------

function createCourse() {
  var id = document.getElementById("courseIDinput").value;
  var title = document.getElementById("courseTitleinput").value;
  var sub_title = document.getElementById("courseSupTitleinput").value;
  var description = document.getElementById("Group-description").value;
  var type = document.getElementById("Group-type").value;
  var img = document.getElementById("courseImage");
  var logo = document.getElementById("courseLogo");

  var formData = new FormData();
  formData.append("Id", id);
  formData.append("Title", title);
  formData.append("SubTitle", sub_title);
  formData.append("Description", description);
  formData.append("type", type);
  formData.append("Image", img.files[0]);
  formData.append("Logo", logo.files[0]);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://localhost:44303/api/Cource/CreateCource");
  var token = "Bearer " + localStorage.getItem("token");
  xhr.setRequestHeader("Authorization", token);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert("Course created successfully");
      } else {
        alert("Error creating course");
      }
    }
  };

  xhr.send(formData);
  xhr.onload = function () {
    console.log(xhr.responseText);
  };
}
