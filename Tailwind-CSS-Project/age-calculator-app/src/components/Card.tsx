'use client';
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

  const handleCalculate = () => {
    const age = calculateAge(birthDate);
    setResult(age);
  };

  return (
    <div>
      <InputFields setBirthDate={setBirthDate} />
      <Button onClick={handleCalculate} />
      <Result result={result} />
    </div>
  );
};

export default Card;
