const openNavButton = document.querySelector("#open-nav-button");
const closeNavButton = document.querySelector("#close-nav-button");
const mobileNavbar = document.querySelector("#mobile-nav");
const navSocialLink = document.querySelector("#mobile-nav .nav-social-links");
const navPageLinks = document.querySelectorAll("#mobile-nav .nav-link");

openNavButton.addEventListener('click', () => {
    mobileNavbar.style.left = '0';
    navSocialLink.classList.add('slide-up');
    navPageLinks.forEach(link => {link.classList.add('fade-in')});
})

closeNavButton.addEventListener('click', () => {
    mobileNavbar.removeAttribute('style');
    navSocialLink.classList.remove('slide-up');
    navPageLinks.forEach(link => {link.classList.remove('fade-in')});
})