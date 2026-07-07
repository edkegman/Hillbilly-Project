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
    item.style.transitionDelay = `${Math.min(index * 50, 300)}ms`;
    revealObserver.observe(item);
});

function openFacts(planId) {
    const plan = broadbandPlans[planId];

    document.getElementById("factsPlanType").textContent = plan.name || "";
    document.getElementById("factsPrice").textContent = plan.price || "";
    document.getElementById("factsDownload").textContent = plan.download || "";
    document.getElementById("factsUpload").textContent = plan.upload || "";
    document.getElementById("factsLatency").textContent = plan.latency || "";
    document.getElementById("factsData").textContent = plan.data || "";
    document.getElementById("factsEquipment").textContent = plan.equipment || "";
    
    document.getElementById("fccPlan").textContent = plan.name || "";
    document.getElementById("fccPrice").textContent = plan.price || "";
    document.getElementById("fccDownload").textContent = plan.download || "";
    document.getElementById("fccUpload").textContent = plan.upload || "";
    document.getElementById("fccLatency").textContent = plan.latency || "";
    document.getElementById("fccData").textContent = plan.data || "";
    document.getElementById("fccEquipment").textContent = `Equipment Lease ${plan.equipment || ""}`;
    document.getElementById("fccInstall").textContent = plan.install || "None";
    document.getElementById("fccID").textContent = plan.id || "N/A";

    factsOverlay.classList.add("facts__overlay--open");
    document.body.style.overflow = "hidden";
}

function closeFacts() {
    factsOverlay.classList.remove("facts__overlay--open");
    document.body.style.overflow = "";
}

factsOverlay.addEventListener("click", function(event) {
    if (event.target === factsOverlay) {
        closeFacts();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeFacts();
    }
});
