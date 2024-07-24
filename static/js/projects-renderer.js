const projectCardContainer = document.querySelector('#project-card-container');
const projectDetailContainer = document.querySelector('#project-detail-container');
const projectText = document.querySelector('#projects-text').src;

let projects = [];

fetch(projectText)
    .then(response => response.text())
    .then(text => {
        projects = DataParser.parse(text);
        console.log(projects);
    })
    .then(() => {
        for (let p of projects) renderProject(p.heading, p.photo, p.description);
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
    projectDetailCard.innerHTML += `<p>${description}</p>`;
    projectDetailCard.innerHTML += '</div>';
    projectDetailContainer.appendChild(projectDetailCard);

    projectCard.addEventListener('click', () => {
         projectDetailCard.classList.remove('hidden');
    })
    projectDetailCard.querySelector('.close-button').addEventListener('click', () => {
        projectDetailCard.classList.add('hidden');
    })
}
