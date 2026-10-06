import { useEffect, useRef, useState } from "react";

export default function CoverageMap({ initialLocation, onLocationChange }) {
  const mapRef = useRef(null);
  const startingLocation = useRef(initialLocation);
  const [error, setError] = useState("");

  useEffect(() => {
    const maps = window.google?.maps;

    if (!maps?.Map || !maps?.Marker) {
      setError("Google Maps could not load. Check the Maps script and API key.");
      return;
    }

    const map = new maps.Map(mapRef.current, {
      center: startingLocation.current,
      zoom: 15,
    });

    const marker = new maps.Marker({
      position: startingLocation.current,
      map,
      draggable: true,
    });

    const dragListener = marker.addListener("dragend", (event) => {
      if (!event.latLng) return;

      onLocationChange({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    });

    const clickListener = map.addListener("click", (event) => {
      if (!event.latLng) return;

      marker.setPosition(event.latLng);

      onLocationChange({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    });

    return () => {
      dragListener.remove();
      clickListener.remove();
      marker.setMap(null);
      maps.event.clearInstanceListeners(map);
    };
  }, [onLocationChange]);

  return (
    <>
      {error && <p role="alert">{error}</p>}
      <div id="coverageMap" ref={mapRef} />
    </>
  );
}