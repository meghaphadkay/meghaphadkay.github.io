const awardsContainer = document.querySelector('#awards-container');
const awardsText = document.querySelector('#awards-text').src;

const awards = [];

fetch(awardsText)
    .then(response => response.text())
    .then(text => {
        const awards = DataParser.parse(text);
        console.log(awards);
        for (let award of awards) renderAward(award);
        awardsContainer.classList.add('slide-up');
    })

const renderAward = (award) => {
    const awardCard = document.createElement('div');
    awardCard.classList.add('flexbox-row', 'pad-30', 'award-container');
    awardCard.innerHTML = `
        <div class="flexbox-row aifs jcc space-lr">
            <img src="${award.logo}" alt="${award.award}" class="award-logo">
        </div>
        <div class="flexbox-column aifs jcfs space-lr award-description-column">
            <h2 style="margin-top: 0;">${award.award}</h2>
            <span class="award-date"><i>${award.date}</i></span>
            <span><strong>${award['awarded-by']}</strong></span>
            <p>${award.description}</p>
        </div>
    `;
    awardsContainer.appendChild(awardCard);
}