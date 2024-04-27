
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


createCard('../assets/images/banner (1).png', 'Card Title', 'Card Description');
createCard('../assets/images/banner (1).png', 'Card Title', 'Card Description');
createCard('../assets/images/banner (1).png', 'Card Title', 'Card Description');
createCard('../assets/images/banner (1).png', 'Card Title', 'Card Description');
createCard('../assets/images/banner (1).png', 'Card Title', 'Card Description');
createCard('../assets/images/banner (1).png', 'Card Title', 'Card Description');