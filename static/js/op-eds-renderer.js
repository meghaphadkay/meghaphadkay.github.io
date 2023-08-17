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

const opEds = {};

fetch(contentText)
    .then(response => response.text())
    .then(text => {
        text = text.split('\n');
        let description = '';
        let currentOpEd = {};
        let currentHeading;

        for (let t of text) {
            if (t.toLowerCase().startsWith("- heading")) {
                currentOpEd.description = description;
                description = '';
                if (currentHeading) opEds[currentHeading] = currentOpEd;
                currentHeading = splitOnce(t, ":");
                currentOpEd = {};
            }
            else if (t.toLowerCase().startsWith("- link")) currentOpEd.link = splitOnce(t, ":");
            else if (t.toLowerCase().startsWith("- photo")) currentOpEd.photo = splitOnce(t, ":");
            else description += t.trim() + '<br>';
        }
        currentOpEd.description = description;
        opEds[currentHeading] = currentOpEd;
        console.log(opEds);
    })
    .then(() => {
        for (let opEd in opEds) {
            const opEdContainer = document.createElement('div');
            opEdContainer.classList.add(
                'op-ed', 'flexbox-column', 'no-pad-30', 'ajc',
                'slide-up', 'animation-delay-small', 'no-opacity',
                'column-half'
            );
            opEdContainer.innerHTML = `
                <img src="${opEds[opEd].photo}" width="300" height="169" alt="${opEd}">
            `;
            const a = document.createElement('a');
            a.classList.add('flexbox-row', 'ajc', 'mt-10');
            a.href = opEds[opEd].link;
            a.innerHTML = `
                <span style="margin-right: 10px;">${linkSVG}</span>
                <span>Read on ${a.hostname}</span>
            `;
            opEdContainer.appendChild(a);
            opEdContainer.innerHTML += `
                <p>${opEds[opEd].description}</p>
            `;
            contentContainer.appendChild(opEdContainer);
        }
    })
