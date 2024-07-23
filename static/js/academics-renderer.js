const academicsContainer = document.querySelector('#degree-desc-column');
const academicsText = document.querySelector('#academics-text').src;

fetch(academicsText)
    .then(response => response.text())
    .then(text => {
        const data = DataParser.parse(text);
        for (let uni of data) renderUniversity(uni);
    })

const renderUniversity = (data) => {
    const uniEl = document.createElement('div');
    uniEl.classList.add('flexbox-column', 'column-half', 'mt-30', 'aic', 'university-container', 'no-pad-30', 'animation-delay-small', 'no-opacity');
    uniEl.innerHTML = `
        <img class="university-logo" src="${data.logo}" style="width: 100px; height: 100px;" alt="${data.university}">
        <h1 class="university-name">${data.university}</h1>
        <h2 class="degree-name flexbox-row ajc">
            <span style="margin-right: 10px;">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-certificate" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                  <path d="M6 9l12 0" />
                  <path d="M6 12l3 0" />
                  <path d="M6 15l2 0" />
                </svg> 
            </span>
            <span>${data.degree}</span>
        </h2>
        <span class="education-date">${data.date}</span>
        <span>${data.modules}</span>
    `;
    academicsContainer.appendChild(uniEl);
    uniEl.classList.add('slide-up');
}