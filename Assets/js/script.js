
// JODHA - Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const isOpen = navLinks.classList.contains("show");

        menuBtn.setAttribute("aria-expanded", isOpen);

        menuBtn.innerHTML = isOpen ? "✕" : "☰";

    });

    document.querySelectorAll(".nav-links a").forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("show");

            menuBtn.setAttribute("aria-expanded", "false");

            menuBtn.innerHTML = "☰";

        });

    });

}
