var domain = "https://localhost:44303/";

function GETrequest() {
  const Request = new XMLHttpRequest();
  Request.open("GET", "../json/notifcation.json", true);
  Request.setRequestHeader("Content-Type", "application/json");
  Request.setRequestHeader("Accept", "application/json");
  Request.onreadystatechange = function () {
    if (Request.readyState === 4 && Request.status === 200) {
      let notifications = JSON.parse(Request.responseText);
      PlaceCards(notifications);
      console.log(notifications);
    }
  };
  Request.send();
}
GETrequest();

//postrequest();

function appendNotification(parentId, mainTitle, date, user, imgSrc) {
  const parentElement = document.getElementById(parentId);
  const notificationDiv = document.createElement("div");
  notificationDiv.classList.add(
    "p-3",
    "d-flex",
    "align-items-center",
    "border-bottom",
    "osahan-post-header"
  );
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("dropdown-list-image", "mr-3");
  const image = document.createElement("img");
  image.classList.add("rounded-circle");
  image.src = imgSrc;
  image.alt = "";
  imageDiv.appendChild(image);

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("font-weight-bold", "mr-3");
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("text-truncate");
  titleDiv.textContent = mainTitle;
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("small");
  descriptionDiv.textContent =
    "By : " + user + " in : " + date.split("T")[0];
  contentDiv.appendChild(titleDiv);
  contentDiv.appendChild(descriptionDiv);

  const actionsSpan = document.createElement("span");
  actionsSpan.classList.add("ml-auto", "mb-auto");
  const btnGroupDiv = document.createElement("div");
  btnGroupDiv.classList.add("btn-group");
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("btn", "btn-light", "btn-sm", "rounded");
  button.setAttribute("data-toggle", "dropdown");
  button.setAttribute("aria-haspopup", "true");
  button.setAttribute("aria-expanded", "false");
  const dotsIcon = document.createElement("i");
  dotsIcon.classList.add("mdi", "mdi-dots-vertical");
  button.appendChild(dotsIcon);
  const dropdownMenuDiv = document.createElement("div");
  dropdownMenuDiv.classList.add("dropdown-menu", "dropdown-menu-right");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("dropdown-item");
  deleteButton.type = "button";
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("mdi", "mdi-delete");
  deleteButton.appendChild(deleteIcon);
  deleteButton.textContent = "Delete";
  const turnOffButton = document.createElement("button");
  turnOffButton.classList.add("dropdown-item");
  turnOffButton.type = "button";
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("mdi", "mdi-close");
  turnOffButton.appendChild(closeIcon);
  turnOffButton.textContent = "Turn Off";
  dropdownMenuDiv.appendChild(deleteButton);
  dropdownMenuDiv.appendChild(turnOffButton);
  btnGroupDiv.appendChild(button);
  btnGroupDiv.appendChild(dropdownMenuDiv);

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("text-right", "text-muted", "pt-1");
  //

  dateDiv.textContent = convertDateToTimeAgo(date);

  actionsSpan.appendChild(btnGroupDiv);
  actionsSpan.appendChild(document.createElement("br"));
  actionsSpan.appendChild(dateDiv);

  notificationDiv.appendChild(imageDiv);
  notificationDiv.appendChild(contentDiv);
  notificationDiv.appendChild(actionsSpan);

  parentElement.appendChild(notificationDiv);
}

function convertDateToTimeAgo(date) {
  const currentDate = new Date();
  const timestamp = Date.parse(date);
  const timeDifference = currentDate - timestamp;

  const minuteInMilliseconds = 60 * 1000;
  const hourInMilliseconds = 60 * minuteInMilliseconds;
  const dayInMilliseconds = 24 * hourInMilliseconds;
  const monthInMilliseconds = 30 * dayInMilliseconds;
  const yearInMilliseconds = 365 * dayInMilliseconds;

  if (timeDifference < minuteInMilliseconds) {
    return "Just now";
  } else if (timeDifference < hourInMilliseconds) {
    const minutes = Math.floor(timeDifference / minuteInMilliseconds);
    return `${minutes} m${minutes > 1 ? "s" : ""} ago`;
  } else if (timeDifference < dayInMilliseconds) {
    const hours = Math.floor(timeDifference / hourInMilliseconds);
    return `${hours} h${hours > 1 ? "s" : ""} ago`;
  } else if (timeDifference < monthInMilliseconds) {
    const days = Math.floor(timeDifference / dayInMilliseconds);
    return `${days} d${days > 1 ? "s" : ""} ago`;
  } else if (timeDifference < yearInMilliseconds) {
    const months = Math.floor(timeDifference / monthInMilliseconds);
    return `${months} M${months > 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(timeDifference / yearInMilliseconds);
    return `${years} y${years > 1 ? "s" : ""} ago`;
  }
}

function FeatchNotifcation() {
  var formData = new FormData();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://localhost:44303/api/Notification/GetNotifications");
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
    LoadData(obj);
  };
}
FeatchNotifcation();

function LoadData(obj) {
  obj.forEach((element) => {
    if (element.readed == false) {
      appendNotification(
        "Recent-Alerts-ID",
        element.notificationDescription,
        element.notificationCreationDate,
        element.notificationPublisher,
        getImage()
      );
    } else {
      appendNotification(
        "Previous-Alerts-ID",
        element.notificationDescription,
        element.notificationCreationDate,
        element.notificationPublisher,
        getImage()
      );
    }
  });
}

function getImage() {
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
    LoadProfileData(obj);
    return domain + obj.imageUrl;
  };
}
