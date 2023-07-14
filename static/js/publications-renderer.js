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
        text = text.split("\n");
        let description = '';
        for (let t of text) {
            if (t.toLowerCase().startsWith("- heading")) {
                renderDescription(description);
                description = '';
                renderHeading(t.split(":")[1]);
            }
            else if (t.toLowerCase().startsWith("- link")) {
                renderDescription(description);
                description = '';
                renderLink(t.split(":")[1]);
            }
            else {
                renderDescription(description);
                description = '';
            }
        }
        renderDescription(description);
    })

const renderHeading = heading => {
    const h1 = document.createElement('h1');
    h1.classList.add('publication-heading');
    h1.textContent = heading.trim();
    contentContainer.appendChild(h1);
}

const renderLink = link => {
    const a = document.createElement('a');
    a.href = link;
    a.classList.add('publication-link', 'flexbox-row', 'ajc');
    a.innerHTML = `
        <span style="margin-right: 10px;">${linkSVG}</span>
        <span>Read on ${a.hostname}</span>
    `;
    contentContainer.appendChild(a);
}

const renderDescription = desc => {
    if (!desc) return;
    const p = document.createElement('p');
    p.classList.add('publication-desc');
    p.textContent = desc.trim();
    contentContainer.appendChild(p);
}