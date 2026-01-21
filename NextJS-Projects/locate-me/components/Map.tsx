"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { User } from "../types/userSchema";

type UserWithLocation = User & {
  location: {
    lat: number;
    lng: number;
  };
};

const LeafletMap = dynamic(() => import("./LeafletMapClient"), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-muted animate-pulse" />,
});

export default function Map() {
  const [users] = useState<UserWithLocation[]>(() => {
    try {
      const raw = localStorage.getItem("users");
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [];
    }
  });

  return <LeafletMap users={users} />;
}
