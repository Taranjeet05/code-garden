"use client";
import { useForm, Controller } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  GroceryFormData,
  groceryFormSchema,
  GroceryItem,
} from "@/types/grocerySchema";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GroceryFormData>({
    resolver: zodResolver(groceryFormSchema),
    defaultValues: {
      name: "",
      quantity: 1,
      category: "other",
    },
  });

  const onSubmit = (data: GroceryFormData) => {
    console.log("Form Data:", data);

    // store in the localStorage
    const prevItems = JSON.parse(localStorage.getItem("items") || "[]");

    const newItem = {
      id: uuidv4(),
      ...data,
    };

    localStorage.setItem("items", JSON.stringify([...prevItems, newItem]));

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="">
          <CardHeader>
            <CardTitle>Grocery Items</CardTitle>
            <CardDescription>
              Add Grocery Items To Your Grocery Cart
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Name */}
            <div className="inputDiv">
              <Label htmlFor="grocery-name">Name*</Label>
              <Input
                id="grocery-name"
                {...register("name")}
                autoComplete="off"
                placeholder="e.g. Organic Bananas"
              />
              {errors.name && (
                <p className="errorStyle">{errors.name.message}</p>
              )}
            </div>

            {/* Quantity + Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-end justify-start">
              {/* Quantity */}
              <div className="inputDiv">
                <Label htmlFor="grocery-quantity">Quantity*</Label>
                <Input
                  id="grocery-quantity"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  placeholder="1"
                  {...register("quantity", { valueAsNumber: true })}
                  autoComplete="off"
                />
                {errors.quantity && (
                  <p className="errorStyle">{errors.quantity.message}</p>
                )}
              </div>
              {/* Category */}
              <div className="inputDiv">
                <Label htmlFor="grocery-category">Category*</Label>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: "Category is Required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="grocery-category" className="w-full">
                        <SelectValue placeholder="Choose a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fruit">Fruits</SelectItem>
                        <SelectItem value="vegetable">Vegetable</SelectItem>
                        <SelectItem value="dairy">Dairy</SelectItem>
                        <SelectItem value="other">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.category && (
                  <p className="errorStyle">{errors.category.message}</p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Add Item</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Form;
