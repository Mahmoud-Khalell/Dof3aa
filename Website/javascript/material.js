

var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');



function createCard(cardTitle, description ,type, imgSrc, link) {
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
        cardImageDiv.style.backgroundImage = "url(../../assets/images/courseImg/youtube.png)";

        cardImageDiv.style.backgroundSize = "cover";
        cardImageDiv.style.backgroundPosition = "center";
    }
    else if (type === 'pdf') {
        cardImageDiv.style.backgroundImage = "url(../../assets/images/courseImg/pdf.png)";
        cardImageDiv.style.backgroundSize = "cover";
        cardImageDiv.style.backgroundPosition = "center";
    }
    else if (type === 'slide') {
        cardImageDiv.style.backgroundImage = "url(../../assets/images/courseImg/slide.png)";
        cardImageDiv.style.backgroundSize = "cover";
        cardImageDiv.style.backgroundPosition = "center";
    }
    else if (type === 'audio') {
        cardImageDiv.style.backgroundImage = "url(../../assets/images/courseImg/rec.png)";
        cardImageDiv.style.backgroundSize = "cover";
        cardImageDiv.style.backgroundPosition = "center";
    }
    else if (type === 'code') {
        cardImageDiv.style.backgroundImage = "url(../../assets/images/courseImg/code.png)";
        cardImageDiv.style.backgroundSize = "cover";
        cardImageDiv.style.backgroundPosition = "center";
    }
    else {
        cardImageDiv.style.backgroundImage =undefined;
        cardImageDiv.style.backgroundSize = "cover";
        cardImageDiv.style.backgroundPosition = "center";
    }


    cardDiv.addEventListener('click', () => {
        window.open(link, '_blank');

    });
    
    
    colDiv.appendChild(cardDiv);

    parentDiv.appendChild(colDiv);
}

var materials = [
    {
        cardTitle: 'intorduction',
        description: 'This is the first lecture of the course',
        type: 'slide',
        link: 'https://docs.google.com/presentation/d/10eFf_oeeImHGBrEZldpU9ZHzorrvu2Hc/edit?usp=drive_link&ouid=101088009110307536264&rtpof=true&sd=true',
        imgSrc: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
    },
    {
        cardTitle: 'video',
        description: 'This is the video by Dr. ibrahim shawky',
        type: 'video',
        link: 'https://www.youtube.com/watch?v=9bZkp7q19f0',

        imgSrc: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
    },
    {
        cardTitle: 'Code',
        description: 'This is the third lecture of the course',
        type: 'code',
        link: 'https://ideone.com/CT2oup',
        imgSrc: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
    },
    {
        cardTitle: 'slide pdf',
        description: 'This is the fourth lecture of the course',
        type: 'pdf',
        link: 'https://drive.google.com/file/d/1hQeIBh4E9DRi6T_-uRiUvT34uka19md-/view?usp=sharing',
        imgSrc: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
    },
    
];


// console.log("martial s  " + martials);
console.log(subjects[0].weeks[0].martials);
let MM = subjects[0].weeks[0].martials;

MM.forEach(material => {
    createCard(material.cardTitle, material.description, material.type, material.imgSrc, material.link);
    console.log(material);
    console.log("=============");
});





var pageH1Text = document.getElementById('page-h1-text-fullPage');
pageH1Text.textContent = subjects[0].weeks[0].weekName;


var pageH1Text = document.getElementById('page-h5-text-fullPage');
pageH1Text.textContent = subjects[0].moreInfo;


var pageH1Text = document.getElementById('page-h6-text-fullPage');
pageH1Text.textContent = subjects[search(subjects, id - 1)].username;

