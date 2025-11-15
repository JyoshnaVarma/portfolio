// MOBILE MENU TOGGLE
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// SMOOTH SCROLL for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 70;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
            navLinks.classList.remove("active"); // close mobile menu
        }
    });
});