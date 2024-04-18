
var colors = ['#D2EFFB', '#D2EFFB', '#E2F4DC', '#D2EFFB', '#EFEBF9','#E2F4DC'];


function createCardLecture(imgSrc, subjectCode,subjectName, moreInfo, username, lastUpdated) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    
    const card = document.createElement('div');
    card.classList.add('card', 'h-100');
    
    // add on click event to the card
    card.addEventListener('click', () => {
        window.location.href = 'course.html';
    });


    const img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add('card-img-top');
    img.alt = imgSrc;
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    const courseCode = document.createElement('h3');
    courseCode.classList.add('card-title', 'CourseCode');
    courseCode.textContent = subjectCode;
    
    const title = document.createElement('h5');
    title.classList.add('card-title','subjectName');
    title.textContent = subjectName;
    
    const info = document.createElement('p');
    info.classList.add('card-text');
    info.textContent = moreInfo;
    
    const usernameElement = document.createElement('h6');
    usernameElement.classList.add('card-title','DoctorName');
    usernameElement.textContent = username;
    
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    
    const lastUpdatedElement = document.createElement('small');
    lastUpdatedElement.classList.add('text-body-secondary');
    lastUpdatedElement.textContent = lastUpdated;
    
    cardBody.appendChild(courseCode);
    cardBody.appendChild(title);
    cardBody.appendChild(info);
    cardBody.appendChild(usernameElement);
    
    cardFooter.appendChild(lastUpdatedElement);
    
    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    
    cardDiv.appendChild(card);
    
    const mainCoursesDiv = document.querySelector('#main-course-div');
    mainCoursesDiv.appendChild(cardDiv);


    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;
}

function createCardSection(imgSrc, subjectCode, subjectName, moreInfo, username, lastUpdated) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    
    const card = document.createElement('div');
    card.classList.add('card', 'h-100');
    
    // add on click event to the card
    card.addEventListener('click', () => {
        window.location.href = 'course.html';
    });


    const img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add('card-img-top');
    img.alt = imgSrc;
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    const courseCode = document.createElement('h3');
    courseCode.classList.add('card-title', 'CourseCode');
    courseCode.textContent = subjectCode;
    
    const title = document.createElement('h5');
    title.classList.add('card-title','subjectName');
    title.textContent = subjectName;
    
    const info = document.createElement('p');
    info.classList.add('card-text');
    info.textContent = moreInfo;
    
    const usernameElement = document.createElement('h6');
    usernameElement.classList.add('card-title','DoctorName');
    usernameElement.textContent = username;
    
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    
    const lastUpdatedElement = document.createElement('small');
    lastUpdatedElement.classList.add('text-body-secondary');
    lastUpdatedElement.textContent = lastUpdated;
    
    cardBody.appendChild(courseCode);
    cardBody.appendChild(title);
    cardBody.appendChild(info);
    cardBody.appendChild(usernameElement);
    
    cardFooter.appendChild(lastUpdatedElement);
    
    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    
    cardDiv.appendChild(card);
    
    const mainCoursesDiv = document.querySelector('#main-section-div');
    mainCoursesDiv.appendChild(cardDiv);


    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;
}

var subjects = [
    {
        imgSrc: '../assets/images/banner (1).png',
        subjectCode: 'CS203',
        subjectName: 'Data Structures and Algorithms',
        moreInfo: '',
        username: 'Dr. mohamed Ramadan',
        lastUpdated: 'Last updated 3 mins ago',
        type:'',
    },
    {
        imgSrc: '../assets/images/banner (2).png',
        subjectCode: 'IT103',
        subjectName: 'Data Structures and Algorithms',

        moreInfo: '',
        username: 'Dr. Mohamed Ail',
        lastUpdated: 'Last updated 23 mins ago'
    },
    {
        imgSrc: '../assets/images/banner (4).png',
        subjectCode: 'IT223',
        subjectName: 'Data Structures and Algorithms',

        moreInfo: '',
        username: 'Dr. Osama Abo el Nassr',
        lastUpdated: 'Last updated 4 days ago'
    },
    {
        imgSrc: '../assets/images/banner (3).png',
        subjectCode: 'CS203',
        subjectName: 'Data Structures and Algorithms',

        moreInfo: '',
        username: 'Dr. Amani Ashraf',
        lastUpdated: 'Last updated 3 mins ago'
    },
    {
        imgSrc: '../assets/images/banner (1).png',
        subjectCode: 'CS203',
        subjectName: 'Data Structures and Algorithms',

        moreInfo: '',
        username: 'Dr. Basem Abo el Atti',
        lastUpdated: 'Last updated 11 mins ago'
    },
    {
        imgSrc: '../assets/images/banner (2).png',
        subjectCode: 'CS203',
        subjectName: 'Data Structures and Algorithms',

        moreInfo: '',
        username: 'Dr. Ahmed Abo el Nasr',
        lastUpdated: 'Last updated 34 mins ago'
    }
];



createCardLecture(subjects[0].imgSrc, subjects[0].subjectCode,subjects[0].subjectName, subjects[0].moreInfo, subjects[0].username, subjects[0].lastUpdated);
createCardLecture(subjects[1].imgSrc, subjects[1].subjectCode,subjects[0].subjectName, subjects[1].moreInfo, subjects[1].username, subjects[1].lastUpdated);
createCardLecture(subjects[2].imgSrc, subjects[2].subjectCode,subjects[0].subjectName, subjects[2].moreInfo, subjects[2].username, subjects[2].lastUpdated);
createCardLecture(subjects[3].imgSrc, subjects[3].subjectCode,subjects[0].subjectName, subjects[3].moreInfo, subjects[3].username, subjects[3].lastUpdated);
createCardLecture(subjects[4].imgSrc, subjects[4].subjectCode,subjects[0].subjectName, subjects[4].moreInfo, subjects[4].username, subjects[4].lastUpdated);
createCardLecture(subjects[5].imgSrc, subjects[5].subjectCode,subjects[0].subjectName, subjects[5].moreInfo, subjects[5].username, subjects[5].lastUpdated);
createCardSection(subjects[5].imgSrc, subjects[5].subjectCode,subjects[0].subjectName, subjects[5].moreInfo, subjects[5].username, subjects[5].lastUpdated);
createCardSection(subjects[5].imgSrc, subjects[5].subjectCode,subjects[0].subjectName, subjects[5].moreInfo, subjects[5].username, subjects[5].lastUpdated);
createCardSection(subjects[5].imgSrc, subjects[5].subjectCode,subjects[0].subjectName, subjects[5].moreInfo, subjects[5].username, subjects[5].lastUpdated);
createCardSection(subjects[5].imgSrc, subjects[5].subjectCode,subjects[0].subjectName, subjects[5].moreInfo, subjects[5].username, subjects[5].lastUpdated);
