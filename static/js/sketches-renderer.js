const sketchContainer = document.querySelector('#content-column');
const sketchText = document.querySelector('#sketches-text').src;
const sketchDetailContainer = document.querySelector('#sketch-detail-container');
const sketchLargeElement = document.querySelector('#sketch-detail');

let sketches = [];

fetch(sketchText)
    .then(response => response.text())
    .then(text => {
        text = text.split('\n');
        let currentSketch = {};
        let currentPath;
        let description = '';

        for (let t of text) {
            if (t.toLowerCase().startsWith("- photo")) {
                currentSketch.description = description;
                description = '';
                if (currentPath) {
                    currentSketch.photo = currentPath;
                    sketches.push(currentSketch);
                }
                currentSketch = {};
                currentPath = splitOnce(t, ":");
            }
            else description += t.trim() + ' ';
        }
        currentSketch.photo = currentPath;
        currentSketch.description = description;
        sketches.push(currentSketch);
    })
    .then(() => {
        for (let sketch of sketches) {
            const sketchCard = document.createElement('div');
            sketchCard.classList.add('flexbox-row', 'ajc', 'no-pad-30', 'sketch-container');
            sketchCard.innerHTML = `
                <div class="flexbox-column column-half pad-10 sketch-photo-column">
                    <img src="${sketch.photo}" alt="">
                </div>
                <div class="flexbox-column column-half no-pad-30"><p>${sketch.description}</p></div>
            `;
            sketchContainer.appendChild(sketchCard);
            sketchCard.querySelector('img').addEventListener('click', () => {
                sketchLargeElement.src = sketch.photo;
                sketchDetailContainer.classList.remove('hidden');
            })
        }
        sketchContainer.classList.add('slide-up');
    })

sketchDetailContainer.addEventListener('click', () => {
    sketchDetailContainer.classList.add('hidden');
})