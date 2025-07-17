import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';

// Fix marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const UserLocationMap = () => {
    const [position, setPosition] = useState(null);

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setPosition([pos.coords.latitude, pos.coords.longitude]);
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div className="p-4">
            <button
                onClick={getUserLocation}
                className="mb-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
                📍 Get My Location
            </button>

            <MapContainer
                center={position || [20.5937, 78.9629]} // Default: India
                zoom={position ? 14 : 4}
                scrollWheelZoom={true}
                style={{ height: '400px', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {position && (
                    <Marker position={position}>
                        <Popup>You are here</Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
};

export default UserLocationMap;
