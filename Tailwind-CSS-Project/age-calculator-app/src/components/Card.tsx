"use client";
import React, { useState } from "react";
import InputFields from "./InputFields";
import Button from "./Button";
import Result from "./Result";
import { AgeResult, BirthDate } from "@/types";
import { calculateAge } from "@/lib/ageCalculator";

const Card = () => {
  const [birthDate, setBirthDate] = useState<BirthDate>({
    day: 0,
    month: 0,
    year: 0,
  });
  const [result, setResult] = useState<AgeResult | null>(null);
  const [errors, setErrors] = useState({
    day: "",
    month: "",
    year: "",
    general: "",
  });

  const validateDate = (): boolean => {
    const newErrors = { day: "", month: "", year: "", general: "" };

    // Empty check
    if (!birthDate.day) newErrors.day = "This field is required";
    if (!birthDate.month) newErrors.month = "This field is required";
    if (!birthDate.year) newErrors.year = "This field is required";

    // Basic range check
    if (birthDate.day > 31 || birthDate.day < 1)
      newErrors.day = "Must be a valid day";
    if (birthDate.month > 12 || birthDate.month < 1)
      newErrors.month = "Must be a valid month";
    if (birthDate.year > new Date().getFullYear())
      newErrors.year = "Must be in the past";

    // Date validity check
    const daysInMonth = new Date(birthDate.year, birthDate.month, 0).getDate();
    if (birthDate.day > daysInMonth) newErrors.day = "Must be a valid date";

    // Future date check
    const inputDate = new Date(
      birthDate.year,
      birthDate.month - 1,
      birthDate.day
    );
    if (inputDate > new Date()) newErrors.general = "Must be in the past";

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleCalculate = () => {
    if (!validateDate()) return;
    setResult(calculateAge(birthDate));
  };

  return (
    <div className="w-full">
      <InputFields setBirthDate={setBirthDate} errors={errors} />
      <Button onClick={handleCalculate} />
      <Result result={result} />
    </div>
  );
};

export default Card;
