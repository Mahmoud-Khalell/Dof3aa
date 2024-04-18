
function createCard(imgSrc, weekName, doctorName, lastUpdate) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');

    const card = document.createElement('div');
    card.classList.add('card', 'h-60');

    const img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add('card-img-top');
    img.alt = '...';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.style.textAlign = 'center';
    title.textContent = weekName;

    const doctor = document.createElement('p');
    doctor.classList.add('card-title');
    doctor.textContent = doctorName;

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    const lastUpdated = document.createElement('small');
    lastUpdated.classList.add('text-body-secondary');
    lastUpdated.textContent = `Last updated ${lastUpdate}`;

    cardBody.appendChild(title);
    cardBody.appendChild(doctor);

    cardFooter.appendChild(lastUpdated);

    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    cardDiv.appendChild(card);

    const parentDiv = document.getElementById('weeks-parant-div');
    parentDiv.appendChild(cardDiv);
}

createCard('images/week1.jpg', 'Week 1', 'Dr. John Doe', '2 days ago');