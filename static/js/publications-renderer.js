const contentContainer = document.querySelector('#content-column');
const contentText = document.querySelector('#content-text').src;
const linkSVG = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link space-lr" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
  <path d="M11 13l9 -9" />
  <path d="M15 4h5v5" />
</svg>
`;

fetch(contentText)
    .then(response => response.text())
    .then(text => {
        text = DataParser.parse(text);
        for (let publication of text) renderPublication(publication);
    })

const renderPublication = (data) => {
    let publicationContainer = document.createElement('div');
    publicationContainer.classList.add('publication-container', 'flexbox-column', 'aifs', 'column-half', 'mbt-20', 'no-pad-30', 'animation-delay-small', 'no-opacity');
    const a = document.createElement('a');
    a.href = data.link;

    publicationContainer.innerHTML = `
    <h1>${data.heading}</h1>
    <span class="publication-category">${data.category}</span>
    <span class="flexbox-row mt-10">
        ${linkSVG}
        <a href="${data.link}" target="_blank">Read on ${a.hostname}</a>
    </span>
    `;
    if (data.description && data.description.length < 200) {
        publicationContainer.innerHTML += `<p>${data.description}</p>`;
    }
    else if (data.description && data.description.length >= 200) {
        publicationContainer.innerHTML += `<p>${data.description.slice(0, 200)}...</p>`;
    }
    contentContainer.appendChild(publicationContainer);
    publicationContainer.classList.add('slide-up');
}