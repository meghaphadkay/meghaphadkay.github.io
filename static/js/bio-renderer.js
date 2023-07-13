const bioContainer = document.querySelector(".bio-column");
const bioText = document.querySelector('#bio-text').src;

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