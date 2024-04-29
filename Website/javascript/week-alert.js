



var notifications = [
    {
        mainTitle: 'New Gelany',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/profile1.png',
        readed : false
    },
    {
        mainTitle: 'New Material 3',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/logo.png',
        readed : false
    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/profile1.png',
        readed : true
    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/profile1.png',
        readed : false
    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course this is lorem ipsum text to test the text overflow in the notification card and this is the end of the text New material has been added to the course this is lorem ipsum text to test the text overflow in the notification card and this is the end of the text New material has been added to the course this is lorem ipsum text to test the text overflow in the notification card and this is the end of the text', 
        date: '2 h',
        imgSrc: '../assets/images/profile2.png',
        readed : true
    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/profile2.png',
        readed : false
    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/logo.png',
        readed : true
    },
    {
        mainTitle: 'New Material',
        description: 'New material has been added to the course',
        date: '2 h',
        imgSrc: '../assets/images/profile1.png',
        readed : false
    }
];



for (let i = 0; i < notifications.length; i++) {
    const notification = notifications[i];
    appendNotification("pills-contact", notification.mainTitle, notification.description, notification.date, notification.imgSrc);
}
