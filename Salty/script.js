const navToggle = document.getElementById('nav-toggle');
const navItem1 = document.getElementById('nav-item-1');

navToggle.addEventListener('click', () => {
    navItem1.classList.toggle('hidden');
})

const carouselGroup = document.getElementById('carousel-group');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let translation = 0;

if(translation === -2130) {
    next.disabled = true;
} else {
    next.disabled = false;
}

prev.disabled = true;
next.addEventListener('click', () => {
    translation = translation - 426;
    console.log(translation);
    carouselGroup.style.transform = `translateX(${translation}px)`;
    if(translation === -1278) {
        next.disabled = true;
    }
    prev.disabled = false;
})

prev.addEventListener('click', () => {
    translation = translation + 426;
    console.log(translation);
    carouselGroup.style.transform = `translateX(${translation}px)`;
    if(translation === 0) {
        prev.disabled = true;
    }
    next.disabled = false;
})