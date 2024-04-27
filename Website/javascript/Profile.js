
function createCard(imgSrc, cardTitle, cardDescription) {
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
}


createCard('../assets/images/banner (1).png', 'Computer Graphic', 'Dr. Abed el hamed');
createCard('../assets/images/banner (2).png', 'DataBase', 'Dr. Mohamed Fouad');
createCard('../assets/images/banner (4).png', 'Machine Learning', 'Dr. Ahmed Ali');
createCard('../assets/images/banner (1).png', 'Data structure', 'Dr. Abed el hamed');
createCard('../assets/images/banner (3).png', 'DataBase', 'Dr. Mohamed Fouad');

