const awardsContainer = document.querySelector('#awards-container');
const awardsText = document.querySelector('#awards-text').src;

const awards = [];

fetch(awardsText)
    .then(response => response.text())
    .then(text => {
        text = text.split('\n');
        let description = '';
        let currentAward = {};
        let currAwardName;

        for (let t of text) {
            if (t.toLowerCase().startsWith("- award")) {
                currentAward.description = description;
                if (currAwardName) {
                    currentAward.name = currAwardName;
                    awards.push(currentAward);
                }
                description = '';
                currAwardName = splitOnce(t, ":");
                currentAward = {};
            }
            else if (t.toLowerCase().startsWith("- date")) currentAward.date = splitOnce(t, ":");
            else description += t.trim() + ' ';
        }
        currentAward.description = description;
        currentAward.name = currAwardName;
        awards.push(currentAward);
    })
    .then(() => {
        for (let award of awards) {
            const awardCard = document.createElement('div');
            awardCard.classList.add('flexbox-column', 'column-twothird', 'pad-30', 'award-container');
            awardCard.innerHTML = `
                <h2>${award.name}</h2>
                <span class="award-date"><i>${award.date}</i></span>
                <p>${award.description}</p>
            `;
            awardsContainer.appendChild(awardCard);
        }
        awardsContainer.classList.add('slide-up');
    })