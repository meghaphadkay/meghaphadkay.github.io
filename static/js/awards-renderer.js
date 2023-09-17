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
            if (t.toLowerCase().startsWith("- award:")) {
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
            else if (t.toLowerCase().startsWith("- awarded-by:")) currentAward.awardedBy = splitOnce(t, ":");
            else if (t.toLowerCase().startsWith("- logo")) currentAward.logo = splitOnce(t, ":");
            else description += t.trim() + '<br>';
        }
        currentAward.description = description;
        currentAward.name = currAwardName;
        awards.push(currentAward);
    })
    .then(() => {
        for (let award of awards) {
            const awardCard = document.createElement('div');
            awardCard.classList.add('flexbox-row', 'pad-30', 'award-container');
            awardCard.innerHTML = `
                <div class="flexbox-row aifs jcc space-lr">
                    <img src="${award.logo}" alt="${award.name}" class="award-logo">
                </div>
                <div class="flexbox-column aifs jcfs space-lr award-description-column">
                    <h2 style="margin-top: 0;">${award.name}</h2>
                    <span class="award-date"><i>${award.date}</i></span>
                    <span><strong>${award.awardedBy}</strong></span>
                    <p>${award.description}</p>
                </div>
                
            `;
            awardsContainer.appendChild(awardCard);
        }
        awardsContainer.classList.add('slide-up');
    })