import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Position {
  lat: number;
  lng: number;
}

const Positioning: React.FC = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [savedPosition, setSavedPosition] = useState<Position | null>(null);

  console.log(savedPosition);

  const handleSaveLocation = () => {
    if (position) {
      setSavedPosition(position);
      alert(
        `Location saved! Latitude: ${position.lat}, Longitude: ${position.lng}`
      );
    } else {
      alert("No location to save!");
    }
  };

  const LocationMarker: React.FC = () => {
    useMapEvents({
      click(e) {
        setPosition({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        });
      },
    });

    return position ? <Marker position={[position.lat, position.lng]} /> : null;
  };

  return (
    <div className="max-w-[600px]">
      <button
        onClick={() => {
          navigator.geolocation.getCurrentPosition((pos) => {
            setPosition({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            });
          });
        }}
      >
        Get My Location
      </button>
      <button onClick={handleSaveLocation} style={{ marginLeft: "10px" }}>
        Save Location
      </button>
      <MapContainer
        center={position || { lat: 41.311081, lng: 69.240562 }}
        zoom={13}
        style={{ height: "500px", width: "100%", marginTop: "10px" }}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Positioning;
