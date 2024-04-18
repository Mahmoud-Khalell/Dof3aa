
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


// Path: javascript/weeks.js



        // create a function that takes Task name  and description and Dead line to create the card dynamically and apped it to the div id "weeks-parant-div"            



function createTaskCard(taskName, description, deadline) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col-sm-6', 'mb-3', 'mb-sm-0');

    const card = document.createElement('div');
    card.classList.add('card', 'Carddiv');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = taskName;

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('card-text');
    taskDescription.textContent = description;

    const buttonSection = document.createElement('div');
    buttonSection.classList.add('button-section');

    const downloadLink = document.createElement('a');
    downloadLink.href = '#';
    downloadLink.classList.add('btn', 'btn-primary');
    downloadLink.textContent = 'download files';

    const deadlineText = document.createElement('h6');
    deadlineText.style.display = 'inline';
    deadlineText.textContent = deadline;

    buttonSection.appendChild(downloadLink);
    buttonSection.appendChild(deadlineText);

    cardBody.appendChild(title);
    cardBody.appendChild(taskDescription);
    cardBody.appendChild(buttonSection);

    card.appendChild(cardBody);

    cardDiv.appendChild(card);

    const parentDiv = document.getElementById('task-card-info');
    parentDiv.appendChild(cardDiv);
}

createTaskCard('Lab Sheet #2', '1. Write a C# program that prints the data of an array in reverse order.', 'Dead line : 12/12/2021 : 12:00 PM');
createTaskCard('Lab Sheet #3', '2. Write a program that takes (mxn) 2 metrices from user and print.', 'Dead line : 12/12/2021 : 12:00 PM');
createTaskCard('Lab Sheet #4', '3. Write a program that takes a string from user and print the number of vowels in it.', 'Dead line : 12/12/2021 : 12:00 PM');
createTaskCard('Lab Sheet #5', '4. Write a program that takes a number from user and print the sum of digits.', 'Dead line : 12/12/2021 : 12:00 PM');
createTaskCard('Lab Sheet #6', '5. Write a program that takes a number from user and print the reverse of it.', 'Dead line : 12/12/2021 : 12:00 PM');