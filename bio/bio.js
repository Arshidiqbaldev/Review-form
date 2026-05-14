const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("fullheader")
        }


    })


}, { threshold: 0.20 });

const header = document.querySelector(".header");

if (header) {
    observer.observe(header)
}


