const navToggle = document.getElementById('nav-toggle');
const navItem1 = document.getElementById('nav-item-1');

navToggle.addEventListener('click', () => {
    navItem1.classList.toggle('hidden');
})

const carouselGroup = document.getElementById('carousel-group');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let pressed = false;
let startX;
let scrollLeft;

prev.style.display = 'none';

const children = carouselGroup.children;
const childrenWidth = children[1].offsetLeft - children[0].offsetLeft;

next.addEventListener('click', () => {
    if (Math.ceil(carouselGroup.scrollLeft) === carouselGroup.scrollWidth - carouselGroup.clientWidth) {
        next.style.display = 'none';
    }
    prev.style.display = 'block';
    carouselGroup.scrollTo({
        top: 0,
        left: carouselGroup.scrollLeft + childrenWidth,
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
        left: carouselGroup.scrollLeft - childrenWidth,
        behavior: 'smooth'
    })
})

carouselGroup.addEventListener('scroll', () => {
        if (carouselGroup.scrollLeft === 0) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'block';
        }
        if (Math.ceil(carouselGroup.scrollLeft) === carouselGroup.scrollWidth - carouselGroup.clientWidth) {
            next.style.display = 'none';        
        } else {
            next.style.display = 'block';
        }
    }
)


carouselGroup.addEventListener("mousedown", (e) => {
    pressed = true;
    carouselGroup.style.cursor = "grabbing";
    startX = e.pageX - carouselGroup.offsetLeft;
    scrollLeft = carouselGroup.scrollLeft;
});

carouselGroup.addEventListener("mouseleave", () => {
    carouselGroup.style.cursor = "default";
    pressed = false;
});

carouselGroup.addEventListener("mouseup", () => {
    carouselGroup.style.cursor = "grab";
    pressed = false;
});

carouselGroup.addEventListener("mousemove", (e) => {
    if (!pressed) return
        e.preventDefault();
        const x = e.pageX - carouselGroup.offsetLeft;
        const walk = (x - startX);
        carouselGroup.scrollLeft = scrollLeft - walk;
});
