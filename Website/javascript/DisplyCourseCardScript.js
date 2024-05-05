// const subjects = require('./datatest.js');


// if not logged in, redirect to login page



var colors = ['#D2EFFB', '#D2EFFB', '#E2F4DC', '#D2EFFB', '#EFEBF9','#E2F4DC'];

function createCardLecture(courseId ,imgSrc, subjectCode,subjectName, moreInfo, username, lastUpdated) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    
    const card = document.createElement('div');
    card.classList.add('card', 'h-100');
    
    card.addEventListener('click', () => {        
        window.location.href = `weeks.html?id=${courseId}`;
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
    
    const icon = document.createElement('i');
    // <i class="fa-solid fa-ellipsis-vertical"></i>
    icon.classList.add('fa-solid', 'fa-ellipsis-vertical');


    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    
    
    
    const lastUpdatedElement = document.createElement('small');
    lastUpdatedElement.classList.add('text-body-secondary');
    lastUpdatedElement.textContent = lastUpdated;
    
    cardBody.appendChild(courseCode);
    cardBody.appendChild(title);
    cardBody.appendChild(info);
    cardBody.appendChild(usernameElement);
    
    
    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    
    cardDiv.appendChild(card);
    
    const mainCoursesDiv = document.querySelector('#main-course-div');
    mainCoursesDiv.appendChild(cardDiv);
    
    cardFooter.appendChild(lastUpdatedElement);
   
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;
}

subjects.forEach(subject => {
     createCardLecture(subject.courseId, subject.imgSrc, subject.subjectCode, subject.subjectName, subject.moreInfo, subject.username, subject.lastUpdated);
});



