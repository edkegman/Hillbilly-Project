function openCoverageModal() {
    document.body.classList.add("coverage--open");
}

function closeCoverageModal() {
    document.body.classList.remove("coverage--open");
}

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