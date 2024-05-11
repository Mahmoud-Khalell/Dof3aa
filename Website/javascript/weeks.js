var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get("id");
var courseIdforcrearte = urlParams.get("id");
var domain = "https://localhost:44303/";

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
  lastUpdated.textContent = `Last updated ${lastUpdate.slice(0, 10)}`;

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
