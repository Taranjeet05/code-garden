import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Form = () => {
  return (
    <div className="w-full min-h-screen py-10">
      <form className="w-full mx-auto max-w-4xl space-y-6 bg-slate-50 p-8 rounded-lg border shadow-sm">
        <h2 className="text-2xl font-bold mb-6">User Registration</h2>

        {/* row 1: Image & Username */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="image-url">
              Image URL <span className="text-red-500">*</span>
            </Label>
            <Input
              id="image-url"
              placeholder="https://example.com/photo.jpg"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userName">
              Username <span className="text-red-500">*</span>
            </Label>
            <Input id="userName" placeholder="johndoe123" required />
          </div>
        </div>

        {/* row 2: Email & Tel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="joe@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tel">Telephone (Optional)</Label>
            <Input id="tel" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
        </div>

        {/* row 3: Full Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input id="firstName" placeholder="Joe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input id="lastName" placeholder="Smith" required />
          </div>
        </div>

        {/* row 4: Age & Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="age">
              Age <span className="text-red-500">*</span>
            </Label>
            <Input id="age" type="number" placeholder="25" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">
              Gender <span className="text-red-500">*</span>
            </Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* row 5: Location (Lat/Lng) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="lat">
              Latitude <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lat"
              type="number"
              step="any"
              placeholder="40.7128"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lng">
              Longitude <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lng"
              type="number"
              step="any"
              placeholder="-74.0060"
              required
            />
          </div>
        </div>

        {/* row 6: State & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="state">
              State <span className="text-red-500">*</span>
            </Label>
            <Input id="state" placeholder="California" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">
              Country <span className="text-red-500">*</span>
            </Label>
            <Input id="country" placeholder="United States" required />
          </div>
        </div>

        {/* row 7: Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea
            id="description"
            placeholder="Tell us a little about yourself..."
            className="min-h-25"
          />
        </div>

        <Button type="submit" className="w-full">
          Submit Profile
        </Button>
      </form>
    </div>
  );
};

export default Form;
