import React, { useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import { Icon, Point } from "leaflet";

const Map = (props) => {
    const driverIcon = new Icon({
        iconUrl: "https://static.thenounproject.com/png/509406-200.png",
        iconRetinaUrl: 'https://static.thenounproject.com/png/509406-200.png',
        popupAnchor: [-0, -0],
        iconSize: [32, 45],
    });
    const [coordinates, setCoordinates] = useState([41.28079160188733, 21.488530597196714])
    const [center, setCenter] = useState([33.5040, 36.2988])
    return (
        <div>
            <button onClick={() => {
                setCoordinates([(coordinates[0] + 0.002), coordinates[1]])
                setCenter([center[0] + 0.002, center[1]])
            }}>Move</button>
            <MapContainer
                doubleClickZoom={false}
                id="mapId"
                zoom={90}
                style={{ minHeight: "800px" }}
                center={center}
            >
                <Marker position={coordinates} icon={driverIcon} />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RoutingMachine />
            </MapContainer>
        </div>
    );
};

export default Map;
