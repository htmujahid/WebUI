const carouselGroup = document.querySelectorAll('.carousel-group');
let pressed = false;
let startX;
let scrollLeft;

carouselGroup.forEach((carousel) => {
    carousel.addEventListener('mousedown', (e) => {
        pressed = true;
        carousel.style.cursor = "grabbing";
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
});

carouselGroup.forEach((carousel) => {
    carousel.addEventListener('mouseleave', () => {
        carousel.style.cursor = "default";
        pressed = false;
    });
});

carouselGroup.forEach((carousel) => {
        carousel.addEventListener('mouseup', () => {
        carousel.style.cursor = "grab";
        pressed = false;
    });
});

carouselGroup.forEach((carousel) => {
        carousel.addEventListener('mousemove', (e) => {
        if (!pressed) return
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX);
            carousel.scrollLeft = scrollLeft - walk;
    });
});