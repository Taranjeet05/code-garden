import React from "react";
import selectCategory from "./selectCategory";

const Form = () => {
  return (
    <div>
      <p>Create a New Tag</p>
      <div>
        <form action="">
          <selectCategory />
        </form>
      </div>
    </div>
  );
};

export default Form;
