const projectCardContainer = document.querySelector('#project-card-container');
const projectDetailContainer = document.querySelector('#project-detail-container');
const projectText = document.querySelector('#projects-text').src;

let projects = {};

fetch(projectText)
    .then(response => response.text())
    .then(text => {
        text = text.split("\n");
        let currentHeading;
        let currentObject = {};
        let description = [];
        let descriptionString = '';

        for (let t of text) {
            if (t.toLowerCase().startsWith("- heading")) {
                currentObject.description = description;
                if (currentHeading) projects[currentHeading] = currentObject;
                currentHeading = splitOnce(t, ":");
                currentObject = {};
                descriptionString = '';
                description = [];
            }
            else if (t.toLowerCase().startsWith("- photo")) {
                currentObject.photo = splitOnce(t, ":");
            }
            else {
                if (!t.trim()) {
                    description.push(descriptionString);
                    descriptionString = '';
                }
                else descriptionString += t.trim() + ' ';
            }
        }
        description.push(descriptionString);
        currentObject.description = description;
        projects[currentHeading] = currentObject;
    })
    .then(() => {
        for (let p in projects) renderProject(p, projects[p].photo, projects[p].description);
        projectCardContainer.classList.add('slide-up');
    })

const renderProject = (heading, photo, description) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('flexbox-column', 'project-card', 'pad-20', 'mar-20', 'ajc');
    const projectDetailCard = document.createElement('div');
    projectDetailCard.classList.add('flexbox-column', 'project-detail-card', 'no-pad-50', 'jcfs', 'hidden');

    projectCard.innerHTML = `
        <img src="${photo}" width="300" height="170" alt="Project: ${heading}">
        <h2>${heading}</h2>
    `;
    projectCardContainer.appendChild(projectCard);

    projectDetailCard.innerHTML = `
        <button class="close-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
        </button>
        <div class="flexbox-row jcsb mt-30">
            <h1>${heading}</h1>
            <img src="${photo}" width="400" height="225" alt="Project: ${heading}">
        </div>
        <div class="mt-30">
    `;
    for (let d of description) projectDetailCard.innerHTML += `<p>${d}</p>`;
    projectDetailCard.innerHTML += '</div>';
    projectDetailContainer.appendChild(projectDetailCard);

    projectCard.addEventListener('click', () => {
         projectDetailCard.classList.remove('hidden');
    })
    projectDetailCard.querySelector('.close-button').addEventListener('click', () => {
        projectDetailCard.classList.add('hidden');
    })
}
