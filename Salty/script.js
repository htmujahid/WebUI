const navToggle = document.getElementById('nav-toggle');
const navItem1 = document.getElementById('nav-item-1');

navToggle.addEventListener('click', () => {
    navItem1.classList.toggle('hidden');
})

const carouselGroup = document.getElementById('carousel-group');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let pressed = false;
prev.style.display = 'none';

next.addEventListener('click', () => {
    if (carouselGroup.scrollLeft === carouselGroup.scrollWidth - carouselGroup.clientWidth) {
        next.style.display = 'none';
    }
    prev.style.display = 'block';
    carouselGroup.scrollTo({
        top: 0,
        left: carouselGroup.scrollLeft + 426,
        behavior: 'smooth'
    })
})

prev.addEventListener('click', () => {
    if (carouselGroup.scrollLeft === 0) {
        prev.style.display = 'none';
    }
    next.style.display = 'block';
    carouselGroup.scrollTo({
        top: 0,
        left: carouselGroup.scrollLeft - 426,
        behavior: 'smooth'
    })
})

carouselGroup.addEventListener('scroll', () => {
        if (carouselGroup.scrollLeft === 0) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'block';
        }
        if (carouselGroup.scrollLeft === carouselGroup.scrollWidth - carouselGroup.clientWidth) {
            next.style.display = 'none';
        } else {
            next.style.display = 'block';
        }
    }
)

carouselGroup.addEventListener("mousedown", (e) => {
    pressed = true;
    carouselGroup.style.cursor = "grabbing";
});

carouselGroup.addEventListener("mouseenter", () => {
    carouselGroup.style.cursor = "grab";
});

carouselGroup.addEventListener("mouseleave", () => {
    carouselGroup.style.cursor = "default";
});

carouselGroup.addEventListener("mouseup", () => {
    carouselGroup.style.cursor = "grab";
    pressed = false;
});

carouselGroup.addEventListener("mousemove", (e) => {
    if (pressed) {
        carouselGroup.scrollTo({
            top: 0,
            left: carouselGroup.scrollLeft - e.movementX * 10,
            behavior: 'smooth'
        })
    }
});
