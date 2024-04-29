
function appendNotification(parentId, mainTitle, description, date, imgSrc, URl) {
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


    notificationDiv.addEventListener("click", function() {
        window.location.href = URl;
    });
}





var notifications = [
    {
        mainTitle: 'New Gelany',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/profile1.png',
        readed : false,
        URl : "http://127.0.0.1:5500/html/material.html?id=1",

    },
    {
        mainTitle: 'New Material 3',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/logo.png',
        readed : false,
        URl : "http://127.0.0.1:5500/html/material.html?id=1",

    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/profile1.png',
        readed : true,
        URl : "http://127.0.0.1:5500/html/material.html?id=1",

    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/profile1.png',
        readed : false,
        URl : "http://127.0.0.1:5500/html/material.html?id=1",

    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course this is lorem ipsum text to test the text overflow in the notification card and this is the end of the text New material has been added to the course this is lorem ipsum text to test the text overflow in the notification card and this is the end of the text New material has been added to the course this is lorem ipsum text to test the text overflow in the notification card and this is the end of the text', 
        date: '2 h',
        imgSrc: '../assets/images/profile2.png',
        readed : true,
        URl : "http://127.0.0.1:5500/html/material.html?id=1",

    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/profile2.png',
        readed : false,
        URl : "http://127.0.0.1:5500/html/material.html?id=1",

    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/logo.png',
        readed : true,
        URl : "http://127.0.0.1:5500/html/material.html?id=1",

    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/profile1.png',
        readed : false,
        URl : "http://127.0.0.1:5500/html/material.html?id=1",
    }
];



for (let i = 0; i < notifications.length; i++) {
    if(notifications[i].readed == false){
        appendNotification("Recent-Alerts-ID",notifications[i].mainTitle, notifications[i].description, notifications[i].date, notifications[i].imgSrc, notifications[i].URl);
    } else
    {
        appendNotification("Previous-Alerts-ID",notifications[i].mainTitle, notifications[i].description, notifications[i].date, notifications[i].imgSrc, notifications[i].URl);
    }
}



   