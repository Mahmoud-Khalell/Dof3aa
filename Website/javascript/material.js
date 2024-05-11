var urlParams = new URLSearchParams(window.location.search);
var weekid = urlParams.get("id");

//test varables
var userRole = "admin";

function createCard(cardTitle, description, type, imgSrc, link) {
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

  if (type === "video") {
    cardImageDiv.style.backgroundImage =
      "url(../../assets/images/courseImg/youtube.png)";

    cardImageDiv.style.backgroundSize = "cover";
    cardImageDiv.style.backgroundPosition = "center";
  } else if (type === "pdf") {
    cardImageDiv.style.backgroundImage =
      "url(../../assets/images/courseImg/pdf.png)";
    cardImageDiv.style.backgroundSize = "cover";
    cardImageDiv.style.backgroundPosition = "center";
  } else if (type === "slide") {
    cardImageDiv.style.backgroundImage =
      "url(../../assets/images/courseImg/slide.png)";
    cardImageDiv.style.backgroundSize = "cover";
    cardImageDiv.style.backgroundPosition = "center";
  } else if (type === "audio") {
    cardImageDiv.style.backgroundImage =
      "url(../../assets/images/courseImg/rec.png)";
    cardImageDiv.style.backgroundSize = "cover";
    cardImageDiv.style.backgroundPosition = "center";
  } else if (type === "code") {
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

var materials = [
  {
    cardTitle: "Lecture 1",
    description: "This is the first lecture of the course",
    type: "slide",
    link: "https://docs.google.com/presentation/d/10eFf_oeeImHGBrEZldpU9ZHzorrvu2Hc/edit?usp=drive_link&ouid=101088009110307536264&rtpof=true&sd=true",
    imgSrc: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
  {
    cardTitle: "Lecture 2",
    description: "This is the first lecture of the course",
    type: "slide",
    link: "https://docs.google.com/presentation/d/10eFf_oeeImHGBrEZldpU9ZHzorrvu2Hc/edit?usp=drive_link&ouid=101088009110307536264&rtpof=true&sd=true",
    imgSrc: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
  {
    cardTitle: "Encapsulation",
    description: "This is the video by Dr. ibrahim shawky",
    type: "video",
    link: "https://www.youtube.com/watch?v=9bZkp7q19f0",

    imgSrc: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
  {
    cardTitle: "inheritance",
    description: "This is the video by Dr. ibrahim shawky",
    type: "video",
    link: "https://www.youtube.com/watch?v=9bZkp7q19f0",

    imgSrc: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
  {
    cardTitle: "polymorphism",
    description: "This is the video by Dr. ibrahim shawky",
    type: "video",
    link: "https://www.youtube.com/watch?v=9bZkp7q19f0",

    imgSrc: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
  {
    cardTitle: "Code",
    description: "This is the third lecture of the course",
    type: "code",
    link: "https://ideone.com/CT2oup",
    imgSrc: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
  {
    cardTitle: "slide pdf",
    description: "This is the fourth lecture of the course",
    type: "pdf",
    link: "https://drive.google.com/file/d/1hQeIBh4E9DRi6T_-uRiUvT34uka19md-/view?usp=sharing",
    imgSrc: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
];

// console.log("martial s  " + martials);

materials.forEach((material) => {
  createCard(
    material.cardTitle,
    material.description,
    material.type,
    material.imgSrc,
    material.link
  );
  console.log(material);
  console.log("=============");
});

if (userRole === "admin") {
  createAddMatirialCard();
}

function SaveMaterial() {
  var title = document.getElementById("material-name").value;
  var description = document.getElementById("material-description").value;
  var link = document.getElementById("material-link").value;
  var type = document.getElementById("material-type").value;

  var formData = new FormData();

  formData.append("Title", title);
  formData.append("Description", description);
  formData.append("Saurce", link);
  formData.append("Type", type);
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

FeatchWeeks();

var pageH1Text = document.getElementById("page-h1-text-fullPage");
pageH1Text.textContent = subjects[0].weeks[0].weekName;

var pageH1Text = document.getElementById("page-h5-text-fullPage");
pageH1Text.textContent = subjects[0].moreInfo;

var pageH1Text = document.getElementById("page-h6-text-fullPage");
pageH1Text.textContent = subjects[search(subjects, id - 1)].username;
