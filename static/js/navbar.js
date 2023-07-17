const openNavButton = document.querySelector("#open-nav-button");
const closeNavButton = document.querySelector("#close-nav-button");
const mobileNavbar = document.querySelector("#mobile-nav");
const navSocialLink = document.querySelector("#mobile-nav .nav-social-links");
const navPageLinks = document.querySelector("#mobile-nav .mobile-nav-page-links");

openNavButton.addEventListener('click', () => {
    mobileNavbar.style.left = '0';
    navSocialLink.classList.add('slide-up');
    navPageLinks.classList.add('fade-in');
})

closeNavButton.addEventListener('click', () => {
    mobileNavbar.removeAttribute('style');
    navSocialLink.classList.remove('slide-up');
    navPageLinks.classList.remove('fade-in');
})

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) initializeTippy();
    })
})

observer.observe(document.querySelector('#work-dropdown-button'), {childList: true});

function initializeTippy() {
    return tippy('button', {
        interactive: true,
        trigger: 'click',
        allowHTML: true,
        appendTo: 'parent',
        content(reference) {
            const id = reference.getAttribute('data-template');
            console.log(id);
            const template = document.getElementById(id);
            return template.innerHTML;
        }
    })
}

const workDropdownContent = document.querySelector('#work-dropdown-content');
tippy('#work-dropdown-button', {
    content: workDropdownContent,
    allowHTML: true,
    theme: 'green',
    trigger: 'click',
    placement: 'bottom',
    interactive: true,
})

const publicationsDropdownContent = document.querySelector('#publications-dropdown-content');
tippy('#publications-dropdown-button', {
    content: publicationsDropdownContent,
    allowHTML: true,
    theme: 'green',
    trigger: 'click',
    placement: 'right',
    interactive: true,
})