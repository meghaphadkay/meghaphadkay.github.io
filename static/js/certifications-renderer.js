const certificationsContainer = document.querySelector('#certifications-container');
const certificationsText = document.querySelector('#certifications-text').src;

fetch(certificationsText)
    .then(response => response.text())
    .then(text => {
        const certifications = DataParser.parse(text);
        for (let cert of certifications) renderCertification(cert);
        certificationsContainer.classList.add('slide-up');
    })

const renderCertification = (cert) => {
    const certCard = document.createElement('div');
    certCard.classList.add('flexbox-row', 'pad-30', 'mt-20', 'certification-card');
    certCard.innerHTML = `
        <div class="flexbox-row aifs jcc space-lr">
            <img src="${cert.logo}" alt="Certification logo" class="certification-logo">
        </div>
        <div class="flexbox-column aifs jcfs space-lr certification-description-column">
            <h2>${cert.name}</h2>
            <span class="mt-10 flexbox-row aic">
                <span class="certification-issuer space-lr">${cert['awarded-by']}</span>
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
