// InputFields.tsx
import React from "react";
import { BirthDate } from "@/types";

type InputFieldsProps = {
  setBirthDate: React.Dispatch<React.SetStateAction<BirthDate>>;
  errors: {
    day: string;
    month: string;
    year: string;
    general: string;
  };
};

const InputFields = ({ setBirthDate, errors }: InputFieldsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBirthDate((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const getInputStyle = (error: string) => ({
    borderColor: error ? "var(--color-light-red)" : "var(--color-smokey-grey)",
    fontSize: "32px",
    fontWeight: 700,
  });

  return (
    <div className="flex gap-4 ml-10">
      {/* Day Input */}
      <div className="flex flex-col">
        <label
          style={{
            color: errors.day
              ? "var(--color-light-red)"
              : "var(--color-smokey-grey)",
          }}
          className="mb-2"
        >
          DAY
        </label>
        <input
          type="number"
          name="day"
          placeholder="DD"
          onChange={handleChange}
          className="border p-3 w-40 rounded-lg"
          style={getInputStyle(errors.day)}
        />
        {errors.day && (
          <p
            className="text-sm italic mt-1"
            style={{ color: "var(--color-light-red)" }}
          >
            {errors.day}
          </p>
        )}
      </div>

      {/* Month Input */}
      <div className="flex flex-col">
        <label
          style={{
            color: errors.month
              ? "var(--color-light-red)"
              : "var(--color-smokey-grey)",
          }}
          className="mb-2"
        >
          MONTH
        </label>
        <input
          type="number"
          name="month"
          placeholder="MM"
          onChange={handleChange}
          className="border p-3 w-40 rounded-lg"
          style={getInputStyle(errors.month)}
        />
        {errors.month && (
          <p
            className="text-sm italic mt-1"
            style={{ color: "var(--color-light-red)" }}
          >
            {errors.month}
          </p>
        )}
      </div>

      {/* Year Input */}
      <div className="flex flex-col">
        <label
          style={{
            color: errors.year
              ? "var(--color-light-red)"
              : "var(--color-smokey-grey)",
          }}
          className="mb-2"
        >
          YEAR
        </label>
        <input
          type="number"
          name="year"
          placeholder="YYYY"
          onChange={handleChange}
          className="border p-3 w-40 rounded-lg"
          style={getInputStyle(errors.year)}
        />
        {errors.year && (
          <p
            className="text-sm italic mt-1"
            style={{ color: "var(--color-light-red)" }}
          >
            {errors.year}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputFields;
  