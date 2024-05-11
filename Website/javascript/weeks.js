var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get("id");
var courseIdforcrearte = urlParams.get("id");

//test varables
var userRole = "admin";

// -------------------------------------------------------------------- user info ---------------------------------------------------

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

//------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------- Tasks ---------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------- create Tasks -------------------------------------------
function CreateTask() {
  console.log("Create Task");
  var title = document.getElementById("Task-Title").value;
  var description = document.getElementById("Task-Description").value;
  var deadline = document.getElementById("Task-DeadLine").value;
  var Saurce = document.getElementById("Saurce-file");

  var formData = new FormData();

  formData.append("Title", title);
  formData.append("Description", description);
  formData.append("DeadLine", deadline);
  formData.append("Saurce", Saurce.files[0]);
  formData.append("CourceId", courseIdforcrearte);

  console.log("formData");
  console.log(
    title +
      " " +
      description +
      " " +
      deadline +
      " " +
      Saurce.files[0] +
      " " +
      courseIdforcrearte
  );
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://localhost:44303/api/Task/Create");
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
    var obj = JSON.parse(xhr.responseText);
    console.log(obj);
  };
}

function FeatchTask() {
  console.log("Featch Task");
  var formData = new FormData();
  formData.append("CourceId", courseIdforcrearte);

  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://localhost:44303/api/Task/GetAll?CourceId=" +
      courseIdforcrearte +
      ""
  );
  var token = "Bearer " + localStorage.getItem("token");
  xhr.setRequestHeader("Authorization", token);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Featch Task successfully");
      } else {
        console.log("Featch Task filed creating course");
      }
    }
  };
  xhr.send(formData);
  xhr.onload = function () {
    console.log(xhr.responseText);
    var obj = JSON.parse(xhr.responseText);

    PrintTask(obj);
  };
}

function PrintTask(obj) {
  console.log("Featch  == Task");
  console.log(obj);
  obj.forEach((task) => {
    // console.log(task.title + " " + task.description + " " + task.deadLine);
    var datetimedeadline1 = new Date(task.deadLine);
    createTaskCard(
      task.title,
      task.description,
      datetimedeadline1,
      task.saurceUrl
    );
  });
}

FeatchTask();

// // change the text in page in id=page-h1-text
// var pageH1Text = document.getElementById("page-h1-text-fullPage");
// pageH1Text.textContent = subjects[search(subjects, id - 1)].subjectName;

// var pageH1Text = document.getElementById("page-h5-text-fullPage");
// pageH1Text.textContent =
//   subjects[search(subjects, id - 1)].courseDepartment +
//   " ( " +
//   subjects[search(subjects, id - 1)].subjectCode +
//   " )";

// var pageH1Text = document.getElementById("page-h6-text-fullPage");
// pageH1Text.textContent = subjects[search(subjects, id - 1)].username;

// var Weeks = subjects[search(subjects, id - 1)].weeks;
// console.log("Weeks: " + search(subjects, id - 1));

//------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------- Announcement ---------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------

function appendNotification(mainTitle, description) {
  const parentElement = document.getElementById("week-alerts-tab-parant");
  const aElement = document.createElement("a");
  aElement.classList.add(
    "list-group-item",
    "list-group-item-action",
    "flex-column",
    "align-items-start"
  );

  const divElement = document.createElement("div");
  divElement.classList.add("d-flex", "w-100", "justify-content-between");

  const h5Element = document.createElement("h5");
  h5Element.classList.add("mb-1");
  h5Element.textContent = mainTitle;

  const smallElement = document.createElement("small");

  divElement.appendChild(h5Element);

  const pElement = document.createElement("p");
  pElement.classList.add("mb-1");
  pElement.textContent = description;

  aElement.appendChild(divElement);
  aElement.appendChild(pElement);

  parentElement.appendChild(aElement);
}

function FeatchAnnouncement() {
  console.log("Featch Announcement");
  var formData = new FormData();
  formData.append("CourceId", courseIdforcrearte);

  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://localhost:44303/api/Announcement/GetAll?CourceId=" +
      courseIdforcrearte
  );
  var token = "Bearer " + localStorage.getItem("token");
  xhr.setRequestHeader("Authorization", token);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Featch Task successfully");
      } else {
        console.log("Featch Task filed creating course");
      }
    }
  };
  xhr.send(formData);
  xhr.onload = function () {
    console.log(xhr.responseText);
    var obj = JSON.parse(xhr.responseText);

    PrintAnnouncement(obj);
  };
}

function PrintAnnouncement(obj) {
  console.log("Featch  == Announcement");
  console.log(obj);
  obj.forEach((notification) => {
    appendNotification(notification.title, notification.description);
  });
}

function displayAddAnnouncement() {
  addAnnouncementButton = document.getElementById("add-announcement-btn");
  addAnnouncementButton.style.display = "block";
}

FeatchAnnouncement();

function CreateAnnounce() {
  console.log("Create Announcement");
  var title = document.getElementById("Announce-Title").value;
  var description = document.getElementById("Announce-Description").value;

  var formData = new FormData();

  formData.append("Title", title);
  formData.append("Description", description);
  formData.append("CourceId", courseIdforcrearte);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://localhost:44303/api/Announcement/Create");
  var token = "Bearer " + localStorage.getItem("token");
  xhr.setRequestHeader("Authorization", token);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Course created successfully");
        location.reload();
      } else {
        console.log("Error creating course");
      }
    }
  };
  xhr.send(formData);
  xhr.onload = function () {
    console.log(xhr.responseText);
    var obj = JSON.parse(xhr.responseText);
    console.log(obj);
  };
}

if (userRole == "admin") {
  addWeekButton();
  createAddWeeksCard();
  createAddTaskCard();
  displayAddAnnouncement();
}
