const navToggle = document.getElementById('nav-toggle');
const navItem1 = document.getElementById('nav-item-1');

navToggle.addEventListener('click', () => {
    navItem1.classList.toggle('hidden');
})