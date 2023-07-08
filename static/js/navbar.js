const openNavButton = document.querySelector("#open-nav-button");
const closeNavButton = document.querySelector("#close-nav-button");
const mobileNavbar = document.querySelector("#mobile-nav");

openNavButton.addEventListener('click', () => {
    mobileNavbar.style.left = '0';
})

closeNavButton.addEventListener('click', () => {
    mobileNavbar.removeAttribute('style');
})