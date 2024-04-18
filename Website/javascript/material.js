
function createCard(cardTitle, description ,type, imgSrc) {
    const parentDiv = document.getElementById('main-material-div');

    const colDiv = document.createElement('div');
    colDiv.classList.add('col');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardImageDiv = document.createElement('div');
    cardImageDiv.classList.add('card-image');

    const cardDescriptionDiv = document.createElement('div');
    cardDescriptionDiv.classList.add('card-description');

    const titleParagraph = document.createElement('p');
    titleParagraph.classList.add('text-title');
    titleParagraph.textContent = cardTitle;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.classList.add('text-body');
    descriptionParagraph.textContent = description;

    cardDescriptionDiv.appendChild(titleParagraph);
    cardDescriptionDiv.appendChild(descriptionParagraph);

    cardDiv.appendChild(cardImageDiv);
    cardDiv.appendChild(cardDescriptionDiv);


  
    if(type === 'video'){
        cardImageDiv.style.backgroundImage = "url(../../assets/images/images.jpeg)";
        cardImageDiv.style.backgroundSize = "cover";
        cardImageDiv.style.backgroundPosition = "center";
    }
    else if (type === 'pdf') {
        cardImageDiv.style.backgroundImage = "url(../../assets/images/pdf.png)";
        cardImageDiv.style.backgroundSize = "cover";
        cardImageDiv.style.backgroundPosition = "center";
    }
    else if (type === 'slide') {
        cardImageDiv.style.backgroundImage = "url(../../assets/images/slide.jpg)";
        cardImageDiv.style.backgroundSize = "cover";
        cardImageDiv.style.backgroundPosition = "center";
    }
    else if (type === 'audio') {
        cardImageDiv.style.backgroundImage = "url(../../assets/images/audio.jpg)";
        cardImageDiv.style.backgroundSize = "cover";
        cardImageDiv.style.backgroundPosition = "center";
    }
    else if (type === 'code') {
        cardImageDiv.style.backgroundImage = "url(../../assets/images/code.jpeg)";
        cardImageDiv.style.backgroundSize = "cover";
        cardImageDiv.style.backgroundPosition = "center";
    }
    
    colDiv.appendChild(cardDiv);

    parentDiv.appendChild(colDiv);
}

var materials = [
    {
        cardTitle: 'Lecture 1',
        description: 'This is the first lecture of the course',
        type: 'slide',
        imgSrc: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
    },
    {
        cardTitle: 'Lecture 2',
        description: 'This is the second lecture of the course',
        type: 'video',
        imgSrc: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
    },
    {
        cardTitle: 'Lecture 3',
        description: 'This is the third lecture of the course',
        type: 'code',
        imgSrc: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
    },
    {
        cardTitle: 'Lecture 4',
        description: 'This is the fourth lecture of the course',
        type: 'pdf',
        imgSrc: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
    },
    {
        cardTitle: 'Lecture 5',
        description: 'This is the fifth lecture of the course',
        type: 'slide',
        imgSrc: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
    }
];

materials.forEach(material => {
    createCard(material.cardTitle, material.description, material.type, material.imgSrc);
});