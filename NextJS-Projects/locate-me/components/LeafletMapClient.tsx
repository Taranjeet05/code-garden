"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { User } from "../types/userSchema";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type UserWithLocation = User & {
  location: {
    lat: number;
    lng: number;
  };
};

export default function LeafletMapClient({
  users,
}: {
  users: UserWithLocation[];
}) {
  const defaultCenter: [number, number] = [50.1109, 8.6821];

  const mapCenter: [number, number] =
    users.length > 0
      ? [users[0].location.lat, users[0].location.lng]
      : defaultCenter;

  return (
    <div className="h-screen w-full">
      <MapContainer center={mapCenter} zoom={10} className="h-full w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {users.map((user) => (
          <Marker
            key={user.id}
            position={[user.location.lat, user.location.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="flex flex-col items-center gap-2 p-1">
                <Image
                  src={user.imageUrl}
                  alt={user.userName}
                  width={40}
                  height={40}
                  className="rounded-full object-cover border"
                />
                <p className="font-bold text-sm">{user.userName}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
