const domainContainer = document.querySelector('#domain-container');
const experienceContainer = document.querySelector('#experience-container');
const experienceText = document.querySelector('#experience-text').src;

let experiences = {};
let domainSet = new Set();

fetch(experienceText)
    .then(response => response.text())
    .then(text => {
        text = text.split('\n');
        let currentPosition;
        let currentExperience = {};
        let currentDomains = [];
        let description = '';

        for (let t of text) {
            if (t.toLowerCase().startsWith("- position")) {
                currentExperience.description = description;
                currentExperience.domains = currentDomains;
                description = '';

                if (currentPosition) experiences[currentPosition] = currentExperience;
                currentExperience = {};
                currentDomains = [];
                currentPosition = splitOnce(t, ":");
            }
            else if (t.toLowerCase().startsWith("- domain")) {
                let domains = splitOnce(t, ":").split(",");
                for (let d of domains) {
                    domainSet.add(d.trim());
                    currentDomains.push(d.trim());
                }
            }
            else if (t.toLowerCase().startsWith("- logo")) currentExperience.logo = splitOnce(t, ":");
            else description += t.trim() + ' ';
        }
        currentExperience.description = description;
        currentExperience.domains = currentDomains;
        experiences[currentPosition] = currentExperience;
    })
    .then(() => {
        for (let experience in experiences) {
            let exp = experiences[experience];
            const expCard = document.createElement('div');
            expCard.classList.add('flexbox-column', 'experience-card', 'no-pad-30', 'mt-50', 'aifs');
            let domainsHTML = '';
            for (let d of exp.domains) {
                domainsHTML += `
                    <span class="domain-card flexbox-row ajc">
                        <span>${d}</span>
                    </span>
                `;
            }
            expCard.innerHTML = `
                <div class="flexbox-row aifs jcc">
                    ${exp.logo ? `<img src="${exp.logo}" alt="${experience}">` : ''}
                    <h2>${experience}</h2>
                </div>
                <p>${exp.description}</p>
                <div class="flexbox-row aifs jcc domain-container">${domainsHTML}</div>
            `;
            experienceContainer.appendChild(expCard);
        }
        for (let d of domainSet) {
            const domainChip = document.createElement('div');

        }
        experienceContainer.classList.add('slide-up');
        domainContainer.classList.add('fade-in');
    })