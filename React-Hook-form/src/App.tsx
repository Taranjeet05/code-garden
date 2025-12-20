import "./App.css";
import {
  Controller,
  useFieldArray,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import fakeApi from "./api/api";
import { useEffect } from "react";
import { useWatch } from "react-hook-form";
import { formSchema, type FormData } from "./zod/z.validations";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
    setError,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 18,
      gender: "Male",
      address: {
        city: "",
        state: "",
      },
      hobbies: [{ name: "" }],
      startDate: new Date(),
      subscribe: false,
      referral: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "hobbies", // unique name for your Field Array
  });

  const subscribe = useWatch({
    control,
    name: "subscribe",
    defaultValue: false,
  });

  useEffect(() => {
    if (!subscribe) {
      setValue("referral", "");
    }
  }, [subscribe, setValue]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fakeApi(data);
      console.log("Success", response);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : undefined;
      console.log(errorMessage);
      setError("root", {
        message: errorMessage,
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: 5 }}
      >
        <div>
          <label>First Name</label>
          <input {...register("firstName")} />
          {errors.firstName && (
            <p style={{ color: "orangered" }}>{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label>Last Name</label>
          <input {...register("lastName")} />
          {errors.lastName && (
            <p style={{ color: "orangered" }}>{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && (
            <p style={{ color: "orangered" }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Age</label>
          <input {...register("age", { valueAsNumber: true })} />
          {errors.age && (
            <p style={{ color: "orangered" }}>{errors.age.message}</p>
          )}
        </div>

        <div>
          <label>Gender</label>
          <select {...register("gender")}>
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p style={{ color: "orangered" }}>{errors.gender.message}</p>
          )}
        </div>

        <div>
          <label>Address</label>
          <input {...register("address.city")} placeholder="City" />
          {errors.address?.city && (
            <p style={{ color: "orangered" }}>{errors.address.city.message}</p>
          )}

          <input {...register("address.state")} placeholder="State" />
          {errors.address?.state && (
            <p style={{ color: "orangered" }}>{errors.address.state.message}</p>
          )}
        </div>

        <div>
          <label>Start Date</label>
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <DatePicker
                placeholderText="Select date"
                onChange={(date: Date | null) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </div>

        <div>
          <label>Hobbies</label>
          {fields.map((hobby, index) => (
            <div key={hobby.id}>
              <input
                {...register(`hobbies.${index}.name`)}
                placeholder="Hobby Name"
              />
              {errors.hobbies?.[index]?.name && (
                <p style={{ color: "orangered" }}>
                  {errors.hobbies[index].name.message}
                </p>
              )}

              {fields.length > 1 && (
                <button type="button" onClick={() => remove(index)}>
                  Remove Hobby
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => append({ name: "" })}>
            Add Hobby
          </button>
        </div>

        <div>
          <label htmlFor="sub">Subscribe to Newsletter</label>
          <input type="checkbox" {...register("subscribe")} />
        </div>

        {subscribe && (
          <div>
            <label>Referral Source</label>
            <input
              {...register("referral")}
              placeholder="How did you hear about us?"
            />
            {errors.referral && (
              <p style={{ color: "orangered" }}>{errors.referral.message}</p>
            )}
          </div>
        )}

        {errors.root && <p style={{ color: "red" }}>{errors.root.message}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default App;
