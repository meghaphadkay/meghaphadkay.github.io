const contentContainer = document.querySelector('#content-column');
const contentText = document.querySelector('#content-text').src;
const linkSVG = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
  <path d="M11 13l9 -9" />
  <path d="M15 4h5v5" />
</svg>
`;


fetch(contentText)
    .then(response => response.text())
    .then(text => {
        const opEds = DataParser.parse(text);
        for (let opEd of opEds) renderOpEd(opEd);
    })

const renderOpEd = (opEd) => {
    const opEdContainer = document.createElement('div');
    opEdContainer.classList.add(
        'op-ed', 'flexbox-column', 'no-pad-30', 'ajc',
        'slide-up', 'animation-delay-small', 'no-opacity',
        'column-half'
    );
    opEdContainer.innerHTML = `
        <h1 style="text-align: center;">${opEd.heading}</h1>
    `;
    const a = document.createElement('a');
    a.classList.add('flexbox-column', 'ajc', 'mt-10');
    a.href = opEd.link;
    a.innerHTML = `
        <img src="${opEd.photo}" class="oped-photo" alt="${opEd}">
        <span class="flexbox-row ajc mt-10">
            <span style="margin-right: 10px;">${linkSVG}</span>
            <span>Read on ${a.hostname}</span>
        </span>
    `;
    opEdContainer.appendChild(a);
    if (opEd.description) {
        opEdContainer.innerHTML += `
            <p>${opEd.description}</p>
        `;
    }
    contentContainer.appendChild(opEdContainer);
}