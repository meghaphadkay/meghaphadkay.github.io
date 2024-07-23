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
            else if (t.toLowerCase().startsWith("- company")) currentExperience.company = splitOnce(t, ":");
            else if (t.toLowerCase().startsWith("- logo")) currentExperience.logo = splitOnce(t, ":");
            else {
                if (t.trim().length > 0)
                    description += t.trim() + '<br>';
            }
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
            expCard.dataset.name = experience;
            let domainsHTML = '';
            for (let d of exp.domains) {
                domainsHTML += `
                    <span class="domain-card flexbox-row ajc">
                        <span>${d}</span>
                    </span>
                `;
            }
            expCard.innerHTML = `
                <div class="flexbox-row aifs">
                    ${exp.logo ? `<img src="${exp.logo}" alt="${experience}">` : ''}
                    <div class="flexbox-column">
                        <h2>${experience}</h2>
                        ${exp.company ? `<span>${exp.company}</span>`: ''}
                    </div>
                </div>
                <p>${exp.description}</p>
                <div class="flexbox-row aifs jcc domain-container">${domainsHTML}</div>
            `;
            experienceContainer.appendChild(expCard);
        }
        for (let d of domainSet) {
            const domainChip = document.createElement('button');
            domainChip.classList.add('flexbox-row', 'ajc', 'domain-chip');
            domainChip.id = `domain-${d}`;
            domainChip.dataset.name = d;
            domainChip.innerHTML = `
                <span>${d}</span>
            `;
            domainContainer.appendChild(domainChip);
            domainChip.addEventListener('click', () => {
                if (filteredDomains.includes(domainChip.dataset.name)) {
                    domainChip.classList.remove('domain-filter-selected');
                    filteredDomains = filteredDomains.filter(el => el !== domainChip.dataset.name);
                    showFilteredDomains(filteredDomains);
                }
                else {
                    domainChip.classList.add('domain-filter-selected');
                    filteredDomains.push(domainChip.dataset.name);
                    showFilteredDomains(filteredDomains);
                }
            })
        }
        experienceContainer.classList.add('slide-up');
        domainContainer.classList.add('fade-in');
    })

let filteredDomains  = [];

function showFilteredDomains(domains) {
    const experienceCards = document.querySelectorAll('.experience-card');
    resetAnimation(experienceContainer);
    if (domains.length === 0) {
        for (let card of experienceCards) card.classList.remove('hidden');
        return;
    }
    for (let card of experienceCards) {
            if (!domains.some(el => experiences[card.dataset.name].domains.includes(el)))
                card.classList.add('hidden');
            else card.classList.remove('hidden');
    }
}

function resetAnimation(element) {
    element.classList.remove('fade-in');
    element.classList.remove('slide-up');
    setTimeout(() => {
        element.classList.add('fade-in');
        element.classList.add('slide-up');
    }, 150);
}