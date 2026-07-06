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
    item.style.transitionDelay = `${index * 100}ms`;
    revealObserver.observe(item);
});

// 
// coverage form //
// 


document.addEventListener("DOMContentLoaded", function () {
    const coverageForm = document.querySelector(".coverage__form");
    const mapStep = document.querySelector(".coverage__map");
    const backButton = document.querySelector(".coverage__back");

    let mapLoaded = false;

    coverageForm.addEventListener("submit", function (event) {
        event.preventDefault();

        coverageForm.classList.add("hidden");
        mapStep.classList.remove("hidden");

        if (!mapLoaded) {
            initCoverageMap();
            mapLoaded = true;
        }
    });

    backButton.addEventListener("click", function () {
        mapStep.classList.add("hidden");
        coverageForm.classList.remove("hidden");
    });
});

function initCoverageMap() {
    const defaultLocation = {
        lat: 35.7698,
        lng: -91.6409
    };

    const map = new google.maps.Map(document.getElementById("coverageMap"), {
        center: defaultLocation,
        zoom: 15
    });

    const marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        draggable: true
    });

    document.getElementById("homeLat").value = defaultLocation.lat;
    document.getElementById("homeLng").value = defaultLocation.lng;

    marker.addListener("dragend", function (event) {
        document.getElementById("homeLat").value = event.latLng.lat();
        document.getElementById("homeLng").value = event.latLng.lng();
    });

    map.addListener("click", function (event) {
        marker.setPosition(event.latLng);
        document.getElementById("homeLat").value = event.latLng.lat();
        document.getElementById("homeLng").value = event.latLng.lng();
    });
}

function submitCoverageRequest() {
    const lat = document.getElementById("homeLat").value;
    const lng = document.getElementById("homeLng").value;

    console.log("Latitude:", lat);
    console.log("Longitude:", lng);
}

const factsOverlay = document.getElementById("factsOverlay");

const broadbandPlans = {
    "fiber-value": {
        name: "Fiber Value Plan",
        price: "$49.99/mo",
        download: "100 Mbps",
        upload: "100 Mbps",
        latency: "18–28 ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "fiber-extra-value": {
        name: "Fiber Extra Value Plan",
        price: "$79.99/mo",
        download: "200 Mbps",
        upload: "200 Mbps",
        latency: "18–28 ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "fiber-select": {
        name: "Fiber Select Plan",
        price: "$99.99/mo",
        download: "500 Mbps",
        upload: "500 Mbps",
        latency: "18–28 ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "fiber-pro": {
        name: "Fiber Pro Plan",
        price: "$149.99/mo",
        download: "1 Gbps",
        upload: "1 Gbps",
        latency: "18–28 ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-value": {
        name: "Wireless Value Plan",
        price: "$39.99/mo",
        download: "25 Mbps",
        upload: "5 Mbps",
        latency: "Varies",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-select": {
        name: "Wireless Select Plan",
        price: "$49.99/mo",
        download: "27 Mbps",
        upload: "5 Mbps",
        latency: "Varies",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-pro": {
        name: "Wireless Pro Plan",
        price: "$69.99/mo",
        download: "30 Mbps",
        upload: "8 Mbps",
        latency: "Varies",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-gamers": {
        name: "Wireless Gamers Plan",
        price: "$89.99/mo",
        download: "35 Mbps",
        upload: "10 Mbps",
        latency: "Varies",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-ultra": {
        name: "Wireless Ultra Plan",
        price: "$139.99/mo",
        download: "40 Mbps",
        upload: "10 Mbps",
        latency: "Varies",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-supercharged": {
        name: "Wireless Supercharged Plan",
        price: "$189.99/mo",
        download: "45 Mbps",
        upload: "10 Mbps",
        latency: "Varies",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "biz-fiber-basic": {
        name: "Business Fiber Basic Plan",
        price: "$79.99/mo",
        download: "100 Mbps",
        upload: "100 Mbps",
        latency: "18–28 ms",
        data: "Unlimited",
        equipment: "$10/mo",
        install: "None",
        id: "HBW-BIZ-FIBER-BASIC"
},

"biz-fiber-silver": {
    name: "Business Fiber Silver Plan",
    price: "$149.99/mo",
    download: "200 Mbps",
    upload: "200 Mbps",
    latency: "18–28 ms",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-FIBER-SILVER"
},

"biz-fiber-gold": {
    name: "Business Fiber Gold Plan",
    price: "$249.99/mo",
    download: "500 Mbps",
    upload: "500 Mbps",
    latency: "18–28 ms",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-FIBER-GOLD"
},

"biz-fiber-platinum": {
    name: "Business Fiber Platinum Plan",
    price: "$349.99/mo",
    download: "1000 Mbps",
    upload: "1000 Mbps",
    latency: "18–28 ms",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-FIBER-PLATINUM"
},

"biz-wireless-1": {
    name: "Business Wireless Biz-1 Plan",
    price: "$79.99/mo",
    download: "18 Mbps",
    upload: "5 Mbps",
    latency: "Varies",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "$200",
    id: "HBW-BIZ-WIRELESS-1"
},

"biz-wireless-2": {
    name: "Business Wireless Biz-2 Plan",
    price: "$99.99/mo",
    download: "20 Mbps",
    upload: "5 Mbps",
    latency: "Varies",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-WIRELESS-2"
},

"biz-wireless-3": {
    name: "Business Wireless Biz-3 Plan",
    price: "$149.99/mo",
    download: "22 Mbps",
    upload: "5 Mbps",
    latency: "Varies",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-WIRELESS-3"
},

"biz-wireless-4": {
    name: "Business Wireless Biz-4 Plan",
    price: "$199.99/mo",
    download: "25 Mbps",
    upload: "5 Mbps",
    latency: "Varies",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-WIRELESS-4"
}
};

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

// ============================
// FCC Modal
// ============================

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