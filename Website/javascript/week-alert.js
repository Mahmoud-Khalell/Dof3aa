


function appendNotification( mainTitle, description, time, link) {
    const parentElement = document.getElementById("week-alerts-tab-parant");
    const aElement = document.createElement('a');
    aElement.href = link;
    aElement.classList.add('list-group-item', 'list-group-item-action', 'flex-column', 'align-items-start');
    
    const divElement = document.createElement('div');
    divElement.classList.add('d-flex', 'w-100', 'justify-content-between');
    
    const h5Element = document.createElement('h5');
    h5Element.classList.add('mb-1');
    h5Element.textContent = mainTitle;
    
    const smallElement = document.createElement('small');
    smallElement.textContent = time;
    
    divElement.appendChild(h5Element);
    divElement.appendChild(smallElement);
    
    const pElement = document.createElement('p');
    pElement.classList.add('mb-1');
    pElement.textContent = description;
    
    const smallElement2 = document.createElement('small');
    smallElement2.textContent = 'By : Mohamed mostafa';
    
    aElement.appendChild(divElement);
    aElement.appendChild(pElement);
    aElement.appendChild(smallElement2);
    
    parentElement.appendChild(aElement);
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


notifications.forEach(notification => {
    appendNotification( notification.mainTitle, notification.description, notification.date,"http://127.0.0.1:5500/html/material.html?id=1");
}
);

