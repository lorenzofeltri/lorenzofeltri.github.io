// =========================
// ANNO AUTOMATICO
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================
// ANIMAZIONE SCROLL
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {
    observer.observe(section);
});
