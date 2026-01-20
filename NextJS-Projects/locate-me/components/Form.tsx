"use client";
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
import { useForm } from "react-hook-form";
import { User, UserFormData, userFormSchema } from "@/types/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

type GeoLocation = {
  lat: number;
  lng: number;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      address: {
        street: "",
        state: "",
        pin: "",
        country: "",
      },
    },
  });

  const handleFormSubmit = async (data: UserFormData) => {
    try {
      const res = await fetch("/api/geocode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data.address),
      });

      if (!res.ok) throw new Error("Geocode failed");

      const location: GeoLocation = await res.json();

      if (!location?.lat || !location?.lng) {
        throw new Error("Invalid location data");
      }

      const userDataWithLocation = {
        id: uuidv4(),
        ...data,
        location,
      };

      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      localStorage.setItem(
        "users",
        JSON.stringify([...existingUsers, userDataWithLocation]),
      );
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen py-10">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="w-full mx-auto max-w-4xl space-y-6 bg-slate-50 p-8 rounded-lg border shadow-sm"
      >
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
              {...register("imageUrl")}
            />
            {errors.imageUrl && (
              <p className="text-sm text-red-500">{errors.imageUrl.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="userName">
              Username <span className="text-red-500">*</span>
            </Label>
            <Input
              id="userName"
              placeholder="johndoe123"
              {...register("userName")}
            />
            {errors.userName && (
              <p className="text-sm text-red-500">{errors.userName.message}</p>
            )}
          </div>
        </div>

        {/* row 2: Email & Tel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="joe@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          {/* tel */}
          <div className="space-y-2">
            <Label htmlFor="tel">Telephone (Optional)</Label>
            <Input
              id="tel"
              type="tel"
              placeholder="+1 (555) 000-0000"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* row 3: First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              placeholder="Joe"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          {/* Last Name */}
          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              placeholder="Smith"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* row 4: Age & Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Age */}
          <div className="space-y-2">
            <Label htmlFor="age">
              Age <span className="text-red-500">*</span>
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="25"
              {...register("age", { valueAsNumber: true })}
            />
            {errors.age && (
              <p className="text-sm text-red-500">{errors.age.message}</p>
            )}
          </div>
          {/* Gender */}
          <div className="space-y-2">
            <Label htmlFor="gender">
              Gender <span className="text-red-500">*</span>
            </Label>
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && (
              <p className="text-sm text-red-500">{errors.gender.message}</p>
            )}
          </div>
        </div>

        {/* Row 5: Street Address (Full Width) */}
        <div className="space-y-2">
          <Label htmlFor="street">
            Street Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="street"
            placeholder="123 Main St, Apartment 4B"
            {...register("address.street")}
          />
          {errors.address?.street && (
            <p className="text-sm text-red-500">
              {errors.address.street.message}
            </p>
          )}
        </div>

        {/* Row 6: State, Country, and PIN Code */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* State */}
          <div className="space-y-2">
            <Label htmlFor="state">
              State <span className="text-red-500">*</span>
            </Label>
            <Input
              id="state"
              placeholder="California"
              {...register("address.state")}
            />
            {errors.address?.state && (
              <p className="text-sm text-red-500">
                {errors.address.state.message}
              </p>
            )}
          </div>
          {/* Country */}
          <div className="space-y-2">
            <Label htmlFor="country">
              Country <span className="text-red-500">*</span>
            </Label>
            <Input
              id="country"
              placeholder="United States"
              {...register("address.country")}
            />
            {errors.address?.country && (
              <p className="text-sm text-red-500">
                {errors.address.country.message}
              </p>
            )}
          </div>
          {/* Pin */}
          <div className="space-y-2">
            <Label htmlFor="pinCode">
              PIN / Zip Code <span className="text-red-500">*</span>
            </Label>
            <Input
              id="pinCode"
              placeholder="90210"
              {...register("address.pin")}
            />
            {errors.address?.pin && (
              <p className="text-sm text-red-500">
                {errors.address.pin.message}
              </p>
            )}
          </div>
        </div>

        {/* row 7: Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea
            id="description"
            placeholder="Tell us a little about yourself..."
            className="min-h-25"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Submit Profile
        </Button>
      </form>
    </div>
  );
};

export default Form;
