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