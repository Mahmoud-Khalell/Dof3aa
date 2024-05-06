function createCard(imgSrc, cardTitle, cardDescription, courseId) {
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

  const profilePage = document.getElementById("ProfilePageSupscribedCourses");
  profilePage.appendChild(cardDiv);

  cardDiv.addEventListener("click", () => {
    window.location.href = `weeks.html?id=${courseId}`;
  });
}

createCard(
  "../assets/images/banner (1).png",
  "Computer Graphic",
  "Dr. Abed el hamed",
  3012
);
createCard(
  "../assets/images/banner (2).png",
  "DataBase",
  "Dr. Mohamed Fouad",
  3012
);
createCard(
  "../assets/images/banner (4).png",
  "Machine Learning",
  "Dr. Ahmed Ali",
  3012
);
createCard(
  "../assets/images/banner (1).png",
  "Data structure",
  "Dr. Abed el hamed",
  3012
);
createCard(
  "../assets/images/banner (3).png",
  "DataBase",
  "Dr. Mohamed Fouad",
  3012
);

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
