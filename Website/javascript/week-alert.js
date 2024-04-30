


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
        mainTitle: 'New Assignment: Data Structures',
        description: 'A new assignment on Data Structures has been uploaded. Please submit by next week.',
        date: '1 h',
        imgSrc: '../assets/images/profile1.png',
        readed: false,
        URl: "http://127.0.0.1:5500/html/assignment.html?id=1",
    },
    {
        mainTitle: 'Upcoming Lecture: AI and Machine Learning',
        description: 'Don’t miss the lecture on AI and Machine Learning this Thursday.',
        date: '3 h',
        imgSrc: '../assets/images/logo.png',
        readed: false,
        URl: "http://127.0.0.1:5500/html/lecture.html?id=2",
    },
    {
        mainTitle: 'Grade Announcement: Algorithm Exam',
        description: 'Grades for the Algorithm exam have been published. Check your score.',
        date: '2 h',
        imgSrc: '../assets/images/profile1.png',
        readed: true,
        URl: "http://127.0.0.1:5500/html/grades.html?id=3",
    },
    {
        mainTitle: 'New Course Material: Python Programming',
        description: 'New learning material for Python programming has been added to the course.',
        date: '30 min',
        imgSrc: '../assets/images/profile1.png',
        readed: false,
        URl: "http://127.0.0.1:5500/html/material.html?id=4",
    },
    {
        mainTitle: 'Workshop Announcement: Cybersecurity Basics',
        description: 'Join the workshop on Cybersecurity Basics this weekend. Register now!',
        date: '1 h',
        imgSrc: '../assets/images/profile2.png',
        readed: true,
        URl: "http://127.0.0.1:5500/html/workshop.html?id=5",
    },
    {
        mainTitle: 'Career Event: Tech Companies Recruitment',
        description: 'A career event featuring top tech companies. Perfect for CS students looking for internships.',
        date: '5 h',
        imgSrc: '../assets/images/profile2.png',
        readed: false,
        URl: "http://127.0.0.1:5500/html/career_event.html?id=6",
    },
    {
        mainTitle: 'Coding Contest Announcement',
        description: 'Participate in the upcoming coding contest and win exciting prizes!',
        date: '4 h',
        imgSrc: '../assets/images/logo.png',
        readed: true,
        URl: "http://127.0.0.1:5500/html/contest.html?id=7",
    },
    {
        mainTitle: 'New Video Tutorial: JavaScript Basics',
        description: 'Check out the new video tutorial on JavaScript basics to strengthen your skills.',
        date: '45 min',
        imgSrc: '../assets/images/profile1.png',
        readed: false,
        URl: "http://127.0.0.1:5500/html/tutorial.html?id=8",
    }
];


notifications.forEach(notification => {
    appendNotification( notification.mainTitle, notification.description, notification.date,"http://127.0.0.1:5500/html/material.html?id=1");
}
);

