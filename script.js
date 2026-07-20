// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
// Scroll Animation
const hiddenSections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold:0.15
});

hiddenSections.forEach(section => {
    observer.observe(section);
});

// Mobile Menu
const menu = document.querySelector(".menu");
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".menu a");

// Open & Close Menu
toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Close Menu After Clicking a Link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
// Animated Counter
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;
            const speed = target / 60;

            const updateCounter = () => {
                count += speed;

                if (count < target) {
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;

                    // Add + or %
                    if (target === 200) {
                        counter.textContent = target + "+";
                    } else if (target === 5) {
                        counter.textContent = target + "+";
                    } else if (target === 100) {
                        counter.textContent = target + "%";
                    }
                }
            };

            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});