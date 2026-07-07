const fccOverlay = document.getElementById("fccOverlay");

function openFCC() {
    fccOverlay.classList.add("fcc__overlay--open");
    document.body.style.overflow = "hidden";
}

function closeFCC() {
    fccOverlay.classList.remove("fcc__overlay--open");
    document.body.style.overflow = "";
}

// Close when clicking outside the modal
fccOverlay.addEventListener("click", function (e) {
    if (e.target === fccOverlay) {
        closeFCC();
    }
});

// Close with Escape
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeFCC();
    }
});