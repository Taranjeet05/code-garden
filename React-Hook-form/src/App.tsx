import "./App.css";
import {
  Controller,
  useFieldArray,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import fakeApi from "./api/api";
import type { FormData } from "./types";
import { useEffect } from "react";
import { useWatch } from "react-hook-form";

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
      subscribe: false,
      hobbies: [{ name: "" }],
    },
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
          <input
            {...register("firstName", { required: "First Name is required" })}
          />
          {errors.firstName && (
            <p style={{ color: "orangered" }}>{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label>Last Name</label>
          <input
            {...register("lastName", { required: "Last Name is required" })}
          />
          {errors.lastName && (
            <p style={{ color: "orangered" }}>{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "orangered" }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Age</label>
          <input
            {...register("age", {
              required: "Age is required",
              min: {
                value: 18,
                message: "Should be at least 18 years old",
              },
              max: {
                value: 99,
                message: "Should not be more that 99 years old",
              },
            })}
          />
          {errors.age && (
            <p style={{ color: "orangered" }}>{errors.age.message}</p>
          )}
        </div>

        <div>
          <label>Gender</label>
          <select
            {...register("gender", {
              required: "Gender is required",
            })}
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p style={{ color: "orangered" }}>{errors.gender.message}</p>
          )}
        </div>

        <div>
          <label>Address</label>
          <input
            {...register("address.city", {
              required: "City is required",
            })}
            placeholder="City"
          />
          {errors.address?.city && (
            <p style={{ color: "orangered" }}>{errors.address.city.message}</p>
          )}

          <input
            {...register("address.state", {
              required: "State is required",
            })}
            placeholder="State"
          />
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
                {...register(`hobbies.${index}.name`, {
                  required: "Hobbies are required",
                })}
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
