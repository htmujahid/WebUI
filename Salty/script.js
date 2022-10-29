const navToggle = document.getElementById('nav-toggle');
const navItem1 = document.getElementById('nav-item-1');

navToggle.addEventListener('click', () => {
    navItem1.classList.toggle('hidden');
})

const carouselGroup = document.getElementById('carousel-group');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


let translation = 0;


next.addEventListener('click', () => {
    if (translation < 1278) {
        translation += 426;
    }
    else
    {
        next.disabled = true;
    }
    carouselGroup.scrollTo({
        top: 0,
        left: translation,
        behavior: 'smooth'
    })
    prev.disabled = false;
})

prev.addEventListener('click', () => {
    if (translation === 0) {
        prev.disabled = true;
    }
    else
    {
        translation -= 426;
    }

    carouselGroup.scrollTo({
        top: 0,
        left: translation,
        behavior: 'smooth'
    })
    next.disabled = false;
})

window.addEventListener('onload', () => {
    if (window.innerWidth < 768) {
        translation = 0
    } else if (window.innerWidth < 1024) {
        translation = 426
    } else {
        translation = 852
    }
})

window.addEventListener ('resize', () => {
    console.log(carouselGroup.scrollLeft);
    if (window.innerWidth < 768) {
        translation = 0
    } else if (window.innerWidth < 1024) {
        translation = 426
    } else {
        translation = 852
    }
    carouselGroup.scrollTo({
        top: 0,
        left: translation,
        behavior: 'smooth'
    })
})