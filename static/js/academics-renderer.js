const academicsContainer = document.querySelector('#degree-desc-column');
const academicsText = document.querySelector('#academics-text').src;

fetch(academicsText)
    .then(response => response.text())
    .then(text => {
        console.log(text);
        text = text.split('\n');
        let collegeElement = document.createElement('div');
        collegeElement.classList.add('flexbox-column', 'aic', 'university-container', 'no-pad-30', 'animation-delay-small', 'no-opacity');
        let logoCol = document.createElement('div');
        logoCol.classList.add('logo-column', 'flexbox-column', 'pad-10', 'aife');
        let infoCol = document.createElement('div');
        infoCol.classList.add('degree-description-column', 'column-twothird', 'flexbox-column', 'pad-10', 'ajc');
        collegeElement.appendChild(logoCol);
        collegeElement.appendChild(infoCol);

        let description = '';
        let uniNumber = 0;
        for (let t of text) {
            if (t.toLowerCase().startsWith("- university")) {
                const h1 = document.createElement('h1');
                h1.classList.add('university-name');
                h1.textContent = t.trim().split(":")[1];
                infoCol.appendChild(h1);

                if (uniNumber > 0) {
                    academicsContainer.appendChild(collegeElement);
                    collegeElement.classList.add('slide-up');

                    collegeElement = document.createElement('div');
                    collegeElement.classList.add('flexbox-row', 'university-container', 'no-pad-30', 'animation-delay-small', 'no-opacity');
                    logoCol = document.createElement('div');
                    logoCol.classList.add('.logo-column', 'flexbox-column', 'pad-10', 'aife');
                    infoCol = document.createElement('div');
                    infoCol.classList.add('flexbox-column', 'pad-10', 'ajc');
                    collegeElement.appendChild(logoCol);
                    collegeElement.appendChild(infoCol);
                }
                uniNumber++;
            }
            else if (t.toLowerCase().startsWith("- logo")) {
                renderDescription(description.trim());
                description = '';
                renderCollegeLogo(t.split(":")[1], logoCol);
            }
            else if (t.toLowerCase().startsWith("- degree")) {
                renderDescription(description.trim());
                description = '';
                renderDegree(t.split(":")[1], infoCol);
            }
            else if (t.toLowerCase().startsWith("- module")) {
                renderDescription(description.trim(), infoCol);
                description = '';
                renderModule(t.split(":")[1], infoCol);
            }
            else if (t.toLowerCase().startsWith("- date")) {
                renderDescription(description.trim(), infoCol);
                description = '';
                renderDate(t.split(":")[1], infoCol);
            }
            else {
                description += t.trim() + ' ';
            }
        }
        renderDescription(description, infoCol);
        academicsContainer.appendChild(collegeElement);
        collegeElement.classList.add('slide-up');
    })

const renderCollegeLogo = (logoPath, logoCol) => {
    const img = document.createElement('img');
    img.classList.add('university-logo');
    img.src = logoPath.trim();
    img.style.width = '100px';
    img.style.height = '100px';
    logoCol.appendChild(img);
}

const renderDegree = (degreeName, infoCol) => {
    const degreeSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-certificate" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
          <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
          <path d="M6 9l12 0" />
          <path d="M6 12l3 0" />
          <path d="M6 15l2 0" />
        </svg>`;
    const h2 = document.createElement('h2');
    h2.innerHTML = `
        <span style="margin-right: 10px;">${degreeSVG}</span>
        <span>${degreeName.trim()}</span>
    `;
    h2.classList.add('degree-name', 'flexbox-row', 'ajc');
    infoCol.appendChild(h2);
}

const renderModule = (moduleName, infoCol) => {
    const h3 = document.createElement('h3');
    h3.textContent = moduleName.trim();
    h3.classList.add('module-name');
    infoCol.appendChild(h3);
}

const renderDescription = (desc, infoCol) => {
    if (!desc) return;
    const p = document.createElement('p');
    p.classList.add('module-description');
    p.textContent = desc.trim();
    infoCol.appendChild(p);
}

const renderDate = (date, infoCol) => {
    const span = document.createElement('span');
    span.classList.add('education-date');
    span.textContent = date.trim();
    infoCol.appendChild(span);
}