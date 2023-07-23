const certificationsContainer = document.querySelector('#certifications-container');
const certificationsText = document.querySelector('#certifications-text').src;

const certifications = [];

fetch(certificationsText)
    .then(response => response.text())
    .then(text => {
        text = text.split('\n');
        let currentCert;
        for (let t of text) {
            if (t.toLowerCase().startsWith("- name")) {
                if (currentCert) certifications.push(currentCert);
                currentCert = {};
                currentCert.name = splitOnce(t, ":");
            }
            else if (t.toLowerCase().startsWith("- awarded")) currentCert.awardedBy = splitOnce(t, ":");
            else if (t.toLowerCase().startsWith("- link")) currentCert.link = splitOnce(t, ":");
            else if (t.toLowerCase().startsWith("- date")) currentCert.date = splitOnce(t, ":");
            else if (t.toLowerCase().startsWith("- logo")) currentCert.logo = splitOnce(t, ":");
        }
        certifications.push(currentCert);
    })
    .then(() => {
        for (let cert of certifications) {
            const certCard = document.createElement('div');
            certCard.classList.add('flexbox-row', 'pad-30', 'mt-20', 'certification-card');
            certCard.innerHTML = `
                <div class="flexbox-row aifs jcc space-lr">
                    <img src="${cert.logo}" alt="Certification logo" class="certification-logo">
                </div>
                <div class="flexbox-column aifs jcfs space-lr">
                    <h2>${cert.name}</h2>
                    <span class="mt-10 flexbox-row aic">
                        <span class="certification-issuer space-lr">${cert.awardedBy}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-point-filled" width="8" height="8" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
                        </svg>
                        <span class="certification-date space-lr">${cert.date}</span>
                    </span>
                    <span class="certification-link flexbox-row ajc">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link space-lr" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                          <path d="M11 13l9 -9" />
                          <path d="M15 4h5v5" />
                        </svg>
                        <a href="${cert.link}" target="_blank">View credential</a>
                    </span>
                </div>
            `;
            certificationsContainer.appendChild(certCard);
        }
        certificationsContainer.classList.add('slide-up');
    })
