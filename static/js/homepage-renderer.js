const bioContainer = document.querySelector(".bio-column");
const panelContainer = document.querySelector("#panel-container");
const bioText = document.querySelector('#bio-text').src;
const panelText = document.querySelector('#homepage-panels-text').src;

function addTextToBio(text) {
    const p = document.createElement('p');
    p.textContent = text;
    p.classList.add('bio-text');
    bioContainer.appendChild(p);
}

fetch(bioText)
    .then(response => response.text())
    .then(text => {
        text = text.split("\n");
        let paraText = '';
        for (let t of text) {
            if (t.trim().length === 0) {
                addTextToBio(paraText);
                paraText = '';
            }
            else {
                paraText += t.trim() + ' ';
            }
        }
        if (paraText.trim().length > 0) addTextToBio(paraText);
        bioContainer.classList.add('slide-up');
    });

fetch(panelText)
    .then(response => response.text())
    .then(text => {
        text = DataParser.parse(text);
        for (let panel of text) {
            if (panel.image.trim() && panel.title.trim()) {
                renderPanel(panel);
            }
        }
    })

const renderPanel = (data) => {
    const div = document.createElement('div');
    div.classList.add('flexbox-column', 'column-half', 'pad-20', 'ajc');
    let el;
    if (data.link) {
        el = document.createElement('a');
        el.href = data.link;
        el.target = '_blank';
    }
    else el = document.createElement('div');
    el.classList.add('flexbox-column', 'ajc');
    el.innerHTML = `
        <img src="${data.image}" style="width: 80%;" alt="${data.title}">
        <h2 style="text-align: center;">${data.title}</h2>
    `;
    div.appendChild(el);
    panelContainer.appendChild(div);
}