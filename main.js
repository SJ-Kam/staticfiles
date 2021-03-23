const toggleBtn = document.querySelector('.navbar-toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar-icons');
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

