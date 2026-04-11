const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("fadeUp");
        }
        else {
            entry.target.classList.remove("fadeUp");
        }

    })
}, { threshold: 0.10 });



const allElements = document.querySelectorAll(".project-card");

allElements.forEach((el) => {
    observer.observe(el);
})
