"use server";

export const ageCalculatorActions = async () => {
  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [years, setYears] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  if (!days || !months || !years) {
    setError("please fill all the Fields");
  }

  /*
  we need to take the current date and subtract the birthdate from it to get the age of the person.
  And then return the result using useActionState in the inputFields.tsx file.
  And then set all the error message in the jsx in InputFields.tsx file.
  
  */
};
