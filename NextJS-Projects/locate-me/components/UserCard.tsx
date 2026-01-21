"use client";

import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { User } from "../types/userSchema";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const UserCard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = () => {
      try {
        const rawData = localStorage.getItem("users");
        if (!rawData) {
          setUsers([]);
          return;
        }

        const parsedData = JSON.parse(rawData);

        setUsers(parsedData);
      } catch (error) {
        console.error("Error fetching users from localStorage:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading users...</div>;
  }

  if (users.length === 0 && !loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <p className="text-muted-foreground text-lg">
          No users found in your directory.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Create First User
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">User Directory</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card
            key={user.id}
            className="overflow-hidden shadow-md hover:shadow-xl transition-shadow border-t-4 border-t-primary"
          >
            <CardHeader className="flex flex-col items-center pb-2">
              <Avatar className="h-24 w-24 border-4 border-background shadow-sm -mt-2">
                <AvatarImage
                  src={user.imageUrl}
                  alt={user.userName}
                  className="object-cover"
                />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  {user.firstName[0]}
                  {user.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="text-center mt-3">
                <h2 className="text-xl font-bold">{user.userName}</h2>
                <p className="text-sm text-muted-foreground capitalize">
                  {user.gender} • {user.age} years old
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="text-sm text-center px-2 text-muted-foreground min-h-10">
                {user.description
                  ? `"${user.description}"`
                  : "No description provided."}
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{user.phone || "N/A"}</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <p className="font-medium">{user.address.street}</p>
                    <p className="text-muted-foreground">
                      {user.address.state}, {user.address.country}
                    </p>
                    <Badge
                      variant="outline"
                      className="mt-1 font-mono text-[10px]"
                    >
                      PIN: {user.address.pin}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="bg-muted/50 py-3 flex justify-center">
              <Badge variant="secondary" className="gap-1">
                <Globe className="h-3 w-3" /> {user.address.country}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
