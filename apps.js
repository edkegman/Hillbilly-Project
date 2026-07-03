function openModal() {
    document.body.classList.add("modal--open");
}

function closeModal() {
    document.body.classList.remove("modal--open");
}

function openCoverageModal() {
    document.body.classList.add("coverage--open");
}

function closeCoverageModal() {
    document.body.classList.remove("coverage--open");
}

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            setTimeout(() => {
                entry.target.style.transitionDelay = "0ms";
            }, 1000);

            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

reveals.forEach((item, index) => {
    item.style.transitionDelay = `${index * 150}ms`;
    revealObserver.observe(item);
});

