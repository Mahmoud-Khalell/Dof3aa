const xhr = new XMLHttpRequest();
xhr.open("GET", "../json/notifcation.json", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {        
        let notifications = JSON.parse(xhr.responseText);
        PlaceCards(notifications);       
    }   
};
xhr.send();




function appendNotification(parentId, mainTitle, description, date, imgSrc) {
    const parentElement = document.getElementById(parentId);
    const notificationDiv = document.createElement("div");
    notificationDiv.classList.add("p-3", "d-flex", "align-items-center", "border-bottom", "osahan-post-header");
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
    descriptionDiv.textContent = description;
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
    dateDiv.textContent = date;

    actionsSpan.appendChild(btnGroupDiv);
    actionsSpan.appendChild(document.createElement("br"));
    actionsSpan.appendChild(dateDiv);

    notificationDiv.appendChild(imageDiv);
    notificationDiv.appendChild(contentDiv);
    notificationDiv.appendChild(actionsSpan);

    parentElement.appendChild(notificationDiv);
}










function PlaceCards(notifications) {
        for (let i = 0; i < notifications.length; i++) {
        if(notifications[i].readed == false){
            appendNotification("Recent-Alerts-ID",notifications[i].mainTitle, notifications[i].description, notifications[i].date, notifications[i].imgSrc);
        } else
        {
            appendNotification("Previous-Alerts-ID",notifications[i].mainTitle, notifications[i].description, notifications[i].date, notifications[i].imgSrc);
        }
    }
}
