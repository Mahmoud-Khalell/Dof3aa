var urlParams = new URLSearchParams(window.location.search);
var weekid = urlParams.get("id");

//test varables
var userRole = "admin";

function createCard(cardTitle, description, type, link) {
  const parentDiv = document.getElementById("main-material-div");

  const colDiv = document.createElement("div");
  colDiv.classList.add("col");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const cardImageDiv = document.createElement("div");
  cardImageDiv.classList.add("card-image");

  const cardDescriptionDiv = document.createElement("div");
  cardDescriptionDiv.classList.add("card-description");

  const titleParagraph = document.createElement("p");
  titleParagraph.classList.add("text-title");
  titleParagraph.textContent = cardTitle;

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.classList.add("text-body");
  descriptionParagraph.textContent = description;

  cardDescriptionDiv.appendChild(titleParagraph);
  cardDescriptionDiv.appendChild(descriptionParagraph);

  cardDiv.appendChild(cardImageDiv);
  cardDiv.appendChild(cardDescriptionDiv);

  if (type === 5) {
    cardImageDiv.style.backgroundImage =
      "url(../../assets/images/courseImg/youtube.png)";

    cardImageDiv.style.backgroundSize = "cover";
    cardImageDiv.style.backgroundPosition = "center";
  } else if (type === 1) {
    cardImageDiv.style.backgroundImage =
      "url(../../assets/images/courseImg/pdf.png)";
    cardImageDiv.style.backgroundSize = "2";
    cardImageDiv.style.backgroundPosition = "center";
  } else if (type === 2) {
    cardImageDiv.style.backgroundImage =
      "url(../../assets/images/courseImg/slide.png)";
    cardImageDiv.style.backgroundSize = "cover";
    cardImageDiv.style.backgroundPosition = "center";
  } else if (type === 3) {
    cardImageDiv.style.backgroundImage =
      "url(../../assets/images/courseImg/rec.png)";
    cardImageDiv.style.backgroundSize = "cover";
    cardImageDiv.style.backgroundPosition = "center";
  } else if (type === 4) {
    cardImageDiv.style.backgroundImage =
      "url(../../assets/images/courseImg/code.png)";
    cardImageDiv.style.backgroundSize = "cover";
    cardImageDiv.style.backgroundPosition = "center";
  } else {
    cardImageDiv.style.backgroundImage = undefined;
    cardImageDiv.style.backgroundSize = "cover";
    cardImageDiv.style.backgroundPosition = "center";
  }

  cardDiv.addEventListener("click", () => {
    window.open(link, "_blank");
  });

  colDiv.appendChild(cardDiv);

  parentDiv.appendChild(colDiv);
}

function createAddMatirialCard() {
  const parentDiv = document.getElementById("main-material-div");

  const colDiv = document.createElement("div");
  colDiv.classList.add("col");
  const cardDiv = document.createElement("div");

  // senter the cardDiv content to center

  cardDiv.style.borderWidth = "4px";
  cardDiv.style.borderColor = "#93939382";
  cardDiv.style.borderStyle = "dashed";

  cardDiv.classList.add("card");

  const Icon = document.createElement("i");
  Icon.classList.add("fa-solid");
  Icon.classList.add("fa-plus");
  Icon.style.width = "90px";
  Icon.style.height = "90px";
  Icon.style.marginTop = "1px";

  cardDiv.style.display = "flex";
  cardDiv.style.justifyContent = "center";
  cardDiv.style.alignItems = "center";
  cardDiv.style.color = "#93939382";

  const titleParagraph = document.createElement("h1");
  titleParagraph.classList.add("text-title");
  titleParagraph.textContent = "Add New Material";
  cardDiv.appendChild(titleParagraph);

  cardDiv.appendChild(Icon);
  colDiv.appendChild(cardDiv);
  parentDiv.appendChild(colDiv);

  cardDiv.setAttribute("data-bs-toggle", "modal");
  cardDiv.setAttribute("data-bs-target", "#staticBackdrop");
}


// console.log("martial s  " + martials);

if (userRole === "admin") {
  createAddMatirialCard();
}

function SaveMaterial() {
  var title = document.getElementById("material-name").value;
  var description = document.getElementById("material-description").value;
  var link = document.getElementById("material-link").value;
  var type = document.getElementById("material-type").value;
  var image = document.getElementById("material-file");
  var intType = parseInt(type);

  var formData = new FormData();

  formData.append("Title", title);
  formData.append("Description", description);
  formData.append("Saurce", image.files[0]);
  formData.append("Type", intType);
  formData.append("TopicId", weekid);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://localhost:44303/api/Topic/AddMaterial");
  var token = "Bearer " + localStorage.getItem("token");
  xhr.setRequestHeader("Authorization", token);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Week created successfully");
        location.reload();
      } else {
        console.log("Error creating Week");
      }
    }
  };
  xhr.send(formData);
  xhr.onload = function () {
    console.log(xhr.responseText);
    // var obj = JSON.parse(xhr.responseText);
    console.log(obj);
  };
}
// FeatchWeeks();

function FeatchData() {
  var formData = new FormData();
  formData.append("Id", weekid);

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://localhost:44303/api/Topic/GetInfo?id=" + weekid);
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
    LoadData(obj.materials);
  };
}
FeatchData();

function LoadData(obj) {
  obj.forEach((material) => {
    createCard(
      material.title,
      material.description,
      material.type,
        material.saurce,
        material.id
    );
    console.log(" pp >> " + typeof material.type);
    //   console.log(material);
    //   console.log("=============");
  });
}

var pageH1Text = document.getElementById("page-h1-text-fullPage");
pageH1Text.textContent = subjects[0].weeks[0].weekName;

var pageH1Text = document.getElementById("page-h5-text-fullPage");
pageH1Text.textContent = subjects[0].moreInfo;

var pageH1Text = document.getElementById("page-h6-text-fullPage");
pageH1Text.textContent = subjects[search(subjects, id - 1)].username;
