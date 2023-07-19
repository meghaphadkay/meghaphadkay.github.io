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
    workDropdownButton.classList.add('dropdown-expanded');
});

workDropdownButton.addEventListener('mouseout', () => {
    workDropdownContent.classList.add('hidden');
    workDropdownButton.classList.remove('dropdown-expanded');
});

const publicationsDropdownButton = document.querySelector('#publications-dropdown-button');
const publicationsDropdownContent = document.querySelector('#publications-dropdown-content');

publicationsDropdownButton.addEventListener('mouseover', () => {
    publicationsDropdownContent.classList.remove('hidden');
    publicationsDropdownButton.classList.add('dropdown-expanded');
})

publicationsDropdownButton.addEventListener('mouseout', () => {
    publicationsDropdownContent.classList.add('hidden');
    publicationsDropdownButton.classList.remove('dropdown-expanded');
})

const educationDropdownButton = document.querySelector('#education-dropdown-button');
const educationDropdownContent = document.querySelector('#education-dropdown-content');

educationDropdownButton.addEventListener('mouseover', () => {
    educationDropdownContent.classList.remove('hidden');
    educationDropdownButton.classList.add('dropdown-expanded');
})

educationDropdownButton.addEventListener('mouseout', () => {
    educationDropdownContent.classList.add('hidden');
    educationDropdownButton.classList.remove('dropdown-expanded');
})

const mobileWorkDropdownButton = document.querySelector('#mobile-work-dropdown-button > button');
const mobileWorkDropdownContent = document.querySelector('#mobile-work-dropdown-content');
let mobileWorkExpanded = false;
mobileWorkDropdownButton.addEventListener('click', () => {
    if (!mobileWorkExpanded) {
        mobileWorkDropdownContent.classList.remove('hidden');
        mobileWorkDropdownButton.parentElement.classList.add('dropdown-expanded');
        mobileWorkExpanded = true;
    }
    else {
        mobileWorkDropdownContent.classList.add('hidden');
        mobileWorkDropdownButton.parentElement.classList.remove('dropdown-expanded');
        mobileWorkExpanded = false;
    }
})

const mobilePublicationsDropdownButton = document.querySelector('#mobile-publications-dropdown-button > button');
const mobilePublicationsDropdownContent = document.querySelector('#mobile-publications-dropdown-content');
let mobilePublicationsExpanded = false;

mobilePublicationsDropdownButton.addEventListener('click', () => {
    if (!mobilePublicationsExpanded) {
        mobilePublicationsDropdownContent.classList.remove('hidden');
        mobilePublicationsDropdownButton.parentElement.classList.add('dropdown-expanded');
        mobilePublicationsExpanded = true;
    }
    else {
        mobilePublicationsDropdownContent.classList.add('hidden');
        mobilePublicationsDropdownButton.parentElement.classList.remove('dropdown-expanded');
        mobilePublicationsExpanded = false;
    }
})

const mobileEducationDropdownButton = document.querySelector('#mobile-education-dropdown-button > button');
const mobileEducationDropdownContent = document.querySelector('#mobile-education-dropdown-content');
let mobileEducationExpanded = false;

mobileEducationDropdownButton.addEventListener('click', () => {
    if (!mobileEducationExpanded) {
        mobileEducationDropdownContent.classList.remove('hidden');
        mobileEducationDropdownButton.parentElement.classList.add('dropdown-expanded');
        mobileEducationExpanded = true;
    }
    else {
        mobileEducationDropdownContent.classList.add('hidden');
        mobileEducationDropdownButton.parentElement.classList.remove('dropdown-expanded');
        mobileEducationExpanded = false;
    }
})