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

const workDropdownButton = document.querySelector('#work-dropdown-button');
const workDropdownContent = document.querySelector('#work-dropdown-content');

workDropdownButton.addEventListener('mouseover', () => {
    workDropdownContent.classList.remove('hidden');
});

workDropdownButton.addEventListener('mouseout', () => {
    workDropdownContent.classList.add('hidden');
});

const publicationsDropdownButton = document.querySelector('#publications-dropdown-button');
const publicationsDropdownContent = document.querySelector('#publications-dropdown-content');

publicationsDropdownButton.addEventListener('mouseover', () => {
    publicationsDropdownContent.classList.remove('hidden');
})

publicationsDropdownButton.addEventListener('mouseout', () => {
    publicationsDropdownContent.classList.add('hidden');
})

const educationDropdownButton = document.querySelector('#education-dropdown-button');
const educationDropdownContent = document.querySelector('#education-dropdown-content');

educationDropdownButton.addEventListener('mouseover', () => {
    educationDropdownContent.classList.remove('hidden');
})

educationDropdownButton.addEventListener('mouseout', () => {
    educationDropdownContent.classList.add('hidden');
})