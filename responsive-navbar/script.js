const menu = document.getElementById('menu');
const phone_navbar = document.getElementById('phone-navbar');

menu.addEventListener('click', () => {
    phone_navbar.classList.toggle('open')
})