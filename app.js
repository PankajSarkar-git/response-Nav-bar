const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener('click', () => {
        // toggel Nav 
        nav.classList.toggle('nav-active');

        // Animate linkes
        navLinks.forEach((links, index) => {
            if (links.style.animation) {
                links.style.animation = '';

            }
            else {
                links.style.animation = `navLinkFade 0.5s ease  forwards ${index / 7 + 1}s`;

            }
        });
        // burger animation

        burger.classList.toggle('toggle');
    });


}
navSlide();