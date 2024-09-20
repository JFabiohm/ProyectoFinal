import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css"

// Crear un componente funcional para el mapa
const MapDiv = () => {
  // Coordenadas iniciales del mapa y nivel de zoom
  const position = [9.972198, -84.726521];
  const zoom = 15; // Ajusta el nivel de zoom

  return (
    <div className="gps">
      <MapContainer
        
        center={position}
        zoom={zoom}
        style={{
          border: "solid 2px #ffffff",
          padding: "5px",
          height: "100%",
          width: "30%",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
};

export default MapDiv;
