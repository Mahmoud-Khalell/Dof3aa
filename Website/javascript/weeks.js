var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get("id");
var courseIdforcrearte = urlParams.get("id");

//test varables
var userRole = "admin";

// alert(id);
var taskApitest = [
  {
    taskName: "Lab Sheet #1",
    description:
      "1. Write a C# program that prints the data of an array in reverse order.",
    deadline: new Date("2024-11-10T12:00:00"),
    matrialLink:
      "https://drive.google.com/file/d/1hQeIBh4E9DRi6T_-uRiUvT34uka19md-/view?usp=sharing",
  },
  {
    taskName: "Lab Sheet #2",
    description:
      "2. Write a program that takes (mxn) 2 metrices from user and print.",
    deadline: new Date("2024-11-10T12:00:00"),
    matrialLink:
      "https://drive.google.com/file/d/1hQeIBh4E9DRi6T_-uRiUvT34uka19md-/view?usp=sharing",
  },
  {
    taskName: "Lab Sheet #3",
    description:
      "3. Write a program that takes a string from usint the number of vowels in it.",
    deadline: new Date("2026-11-10T12:00:00"),
    matrialLink:
      "https://drive.google.com/file/d/1hQeIBh4E9DRi6T_-uRiUvT34uka19md-/view?usp=sharing",
  },
  {
    taskName: "Lab Sheet #4",
    description:
      "4. Write a program that takes a number from user and print the sum of digits.",
    deadline: new Date("2022-11-10T12:00:00"),
    matrialLink:
      "https://drive.google.com/file/d/1hQeIBh4E9DRi6T_-uRiUvT34uka19md-/view?usp=sharing",
  },
  {
    taskName: "Lab Sheet #5",
    description:
      "5. Write a program that takes a number from user and print the sum of digits.",
    deadline: new Date("2022-11-10T12:00:00"),
    matrialLink:
      "https://drive.google.com/file/d/1hQeIBh4E9DRi6T_-uRiUvT34uka19md-/view?usp=sharing",
  },
];

function createWeeksCard(imgSrc, weekName, doctorName, lastUpdate, weekid) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("col");

  const card = document.createElement("div");
  card.classList.add("card", "h-60");

  const img = document.createElement("img");
  img.src = imgSrc;
  img.classList.add("card-img-top");
  img.alt = "...";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.style.textAlign = "center";
  title.textContent = weekName;

  const doctor = document.createElement("p");
  doctor.classList.add("card-title");
  doctor.textContent = doctorName;

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  const lastUpdated = document.createElement("small");
  lastUpdated.classList.add("text-body-secondary");
  lastUpdated.textContent = `Last updated ${lastUpdate}`;

  cardBody.appendChild(title);
  cardBody.appendChild(doctor);

  cardFooter.appendChild(lastUpdated);

  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  cardDiv.appendChild(card);

  const parentDiv = document.getElementById("weeks-parant-div");
  parentDiv.appendChild(cardDiv);

  // add on click event to the card open the week page with the weekid the current page url is "html/weeks.html?id=3012"

  card.addEventListener("click", () => {
    window.location.href = `material.html?id=${weekid}`;
  });
}

function createAddWeeksCard() {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("col");

  const card = document.createElement("div");
  card.classList.add("card", "h-60");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.style.textAlign = "center";
  title.style.color = "#93939382";
  title.style.marginTop = "12px";
  title.textContent = "Add New Week";

  const doctor = document.createElement("p");
  doctor.classList.add("card-title");
  doctor.textContent = "doctorName";

  const Icon = document.createElement("i");
  Icon.classList.add("fa-solid");
  Icon.classList.add("fa-plus");
  Icon.style.width = "90px";
  Icon.style.height = "90px";
  Icon.style.marginTop = "1px";

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  cardBody.appendChild(title);
  card.style.borderWidth = "4px";
  card.style.borderColor = "#93939382";
  card.style.borderStyle = "dashed";
  card.style.height = "170px";

  card.appendChild(cardBody);
  title.appendChild(Icon);
  cardDiv.appendChild(card);

  const parentDiv = document.getElementById("weeks-parant-div");
  parentDiv.appendChild(cardDiv);

  cardDiv.setAttribute("data-bs-toggle", "modal");
  cardDiv.setAttribute("data-bs-target", "#staticBackdrop");
}

function createTaskCard(taskName, description, datetimedeadline, matrialLink) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("col-sm-6", "mb-3", "mb-sm-0");

  const card = document.createElement("div");
  card.classList.add("card", "Carddiv");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = taskName;

  const taskDescription = document.createElement("p");
  taskDescription.classList.add("card-text");
  taskDescription.textContent = description;

  const buttonSection = document.createElement("div");
  buttonSection.classList.add("button-section");

  const downloadLink = document.createElement("a");
  downloadLink.href = matrialLink;
  // downloadLink.target = '_blank';
  downloadLink.classList.add("btn", "btn-primary");
  downloadLink.textContent = "download files";

  const deadlineText = document.createElement("h6");
  deadlineText.style.display = "inline";

  var date = datetimedeadline.toISOString().slice(0, 10);
  deadlineText.textContent = "Dead line :" + date + " : 12:00 PM";

  buttonSection.appendChild(downloadLink);
  buttonSection.appendChild(deadlineText);

  cardBody.appendChild(title);
  cardBody.appendChild(taskDescription);
  cardBody.appendChild(buttonSection);

  card.appendChild(cardBody);

  cardDiv.appendChild(card);

  // add color to the card

  card.style.borderRadius = "10px";
  card.style.padding = "10px";
  card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
  card.style.transition = "0.3s";

  var nowdate = new Date();
  if (datetimedeadline < nowdate) {
    card.style.backgroundColor = "#ffb6b6";
    title.textContent = taskName + "   (Expired)";
    buttonSection.style.color = "red";
    buttonSection.style.fontWeight = "bold";
    downloadLink.style.display = "none";
  }

  const parentDiv = document.getElementById("task-card-info");
  parentDiv.appendChild(cardDiv);
}

// createAddTaskCard("taskName", "description", "datetimedeadline", "matrialLink");

function createAddTaskCard() {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("col-sm-6", "mb-3", "mb-sm-0");

  const card = document.createElement("div");
  card.classList.add("card", "Carddiv");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = "Add New Task";
  title.style.color = "#93939382";
  title.style.textAlign = "center";
  title.style.fontSize = "30px";

  const taskDescription = document.createElement("p");
  taskDescription.classList.add("card-text");
  // taskDescription.textContent = "description";
  taskDescription.style.color = "#93939382";
  taskDescription.style.textAlign = "center";
  taskDescription.style.fontSize = "30px";

  const Icon = document.createElement("i");
  Icon.classList.add("fa-solid");
  Icon.classList.add("fa-plus");
  Icon.style.width = "90px";
  Icon.style.height = "90px";
  Icon.style.marginTop = "-10px";

  taskDescription.appendChild(Icon);

  const buttonSection = document.createElement("div");
  buttonSection.classList.add("button-section");

  const downloadLink = document.createElement("a");
  downloadLink.href = "matrialLink";
  // downloadLink.target = '_blank';
  downloadLink.classList.add("btn", "btn-primary");
  downloadLink.textContent = "download files";

  const deadlineText = document.createElement("h6");
  deadlineText.style.display = "inline";

  //   var date = datetimedeadline.toISOString().slice(0, 10);
  //   deadlineText.textContent = "Dead line :" + date + " : 12:00 PM";

  buttonSection.appendChild(downloadLink);
  //buttonSection.appendChild(deadlineText);

  cardBody.appendChild(title);
  // cardBody.appendChild(Icon);
  cardBody.appendChild(taskDescription);
  //cardBody.appendChild(buttonSection);

  card.appendChild(cardBody);

  cardDiv.appendChild(card);

  card.style.borderRadius = "10px";
  card.style.padding = "10px";
  card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
  card.style.transition = "0.3s";
  card.style.backgroundColor = "#fff";
  card.style.border = "2px dashed #93939382";
  card.style.height = "165px";

  const parentDiv = document.getElementById("task-card-info");
  parentDiv.appendChild(cardDiv);

  cardDiv.setAttribute("data-bs-toggle", "modal");
  cardDiv.setAttribute("data-bs-target", "#staticBackdropTask");
}

var datetimedeadline = new Date("2024-11-10T12:00:00");

taskApitest.forEach((task) => {
  createTaskCard(
    task.taskName,
    task.description,
    task.deadline,
    task.matrialLink
  );
});

function addWeekButton() {
  const addButtonIcon = document.createElement("button");
  addButtonIcon.classList.add("btn", "btn-primary", "searchButton");
  addButtonIcon.id = "add-week-button-icon";
  addButtonIcon.style.margin = "0px 20px";
  addButtonIcon.type = "submit";
  addButtonIcon.innerHTML = '<i class="fa-solid fa-plus"></i>Add week';

  const addButtonContainer = document.getElementById("class-add-week-btn");
  addButtonContainer.appendChild(addButtonIcon);
}

// function to search in subjects array by courseId and return the index of the object
id++;
console.log("id: " + id);
function search(subjects, id) {
  console.log("id 2: " + id);

  for (var i = 0; i < subjects.length; i++) {
    console.log(">--->>" + subjects[i].courseId);
    console.log("id - " + id);
    if (subjects[i].courseId === id) {
      console.log(">>>" + subjects[i].courseId);
      return i;
    }
  }
  console.log(-1);
  return -1;
}

if (userRole == "admin") {
  addWeekButton();
  createAddWeeksCard();
  createAddTaskCard();
}

// change the text in page in id=page-h1-text
var pageH1Text = document.getElementById("page-h1-text-fullPage");
pageH1Text.textContent = subjects[search(subjects, id - 1)].subjectName;

var pageH1Text = document.getElementById("page-h5-text-fullPage");
pageH1Text.textContent =
  subjects[search(subjects, id - 1)].courseDepartment +
  " ( " +
  subjects[search(subjects, id - 1)].subjectCode +
  " )";

var pageH1Text = document.getElementById("page-h6-text-fullPage");
pageH1Text.textContent = subjects[search(subjects, id - 1)].username;

var Weeks = subjects[search(subjects, id - 1)].weeks;
console.log("Weeks: " + search(subjects, id - 1));

Weeks.forEach((week) => {
  createWeeksCard(
    week.imgSrc,
    week.weekName,
    week.doctorName,
    week.lastUpdate,
    week.weekid
  );
});

//----------------------------------------------------------------------------------------------------------
// ---------------------------------fetching data of Tasks from the server ---------------------------------
//----------------------------------------------------------------------------------------------------------

var domain = "https://localhost:44303/";
function FeatchTaskData() {
  var title = document.getElementById("Task-Title").value;
  var description = document.getElementById("Task-Description").value;
  var deadline = document.getElementById("Task-Deadline").value;
  var Saurce = document.getElementById("Saurce-file").value;

  var formData = new FormData();
  formData.append("Title", title);
  formData.append("Description", description);
  formData.append("DeadLine", deadline);
  formData.append("Saurce", Saurce.files[0]);
  formData.append("CourceId", courseIdforcrearte);

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://localhost:44303/api/User/GetUserInfo");
  var token = "Bearer " + localStorage.getItem("token");
  xhr.setRequestHeader("Authorization", token);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Course created successfully");
      } else {
        console.log("Error creating course");
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
