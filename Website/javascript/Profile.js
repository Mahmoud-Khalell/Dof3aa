
function createCard(imgSrc, cardTitle, cardDescription,courseId) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add('card-img-top');
    img.alt = '...';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = cardTitle;

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = cardDescription;

    cardBody.appendChild(title);
    cardBody.appendChild(description);

    card.appendChild(img);
    card.appendChild(cardBody);

    cardDiv.appendChild(card);

    const profilePage = document.getElementById('ProfilePageSupscribedCourses');
    profilePage.appendChild(cardDiv);


    cardDiv.addEventListener('click', () => {        
        window.location.href = `weeks.html?id=${courseId}`;   
    });

}


createCard('../assets/images/banner (1).png', 'Computer Graphic', 'Dr. Abed el hamed',3012);
createCard('../assets/images/banner (2).png', 'DataBase', 'Dr. Mohamed Fouad',3012);
createCard('../assets/images/banner (4).png', 'Machine Learning', 'Dr. Ahmed Ali',3012);
createCard('../assets/images/banner (1).png', 'Data structure', 'Dr. Abed el hamed',3012);
createCard('../assets/images/banner (3).png', 'DataBase', 'Dr. Mohamed Fouad',3012);

