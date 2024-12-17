const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const headerLinks = document.querySelectorAll('.header-link');
const elementsToToggle = document.querySelectorAll('.dark-mode, .dark-card, .footer-text');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    header.classList.toggle('light-header-footer');
    header.classList.toggle('dark-header-footer');
    footer.classList.toggle('light-header-footer');
    footer.classList.toggle('dark-header-footer');
    elementsToToggle.forEach(element => {
        element.classList.toggle('light-mode');
        element.classList.toggle('dark-mode');
        element.classList.toggle('light-card');
        element.classList.toggle('dark-card');
    });
    headerLinks.forEach(link => {
        link.classList.toggle('text-black');
        link.classList.toggle('text-white');
    });
});


AOS.init();