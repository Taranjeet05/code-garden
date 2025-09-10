"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Category, CategoryOptions } from "../types/index";

const SelectCategory = () => {
  const [name, setName] = useState<string>("");
  const [emoji, setEmoji] = useState<string>("");
  const [category, setCategory] = useState<Category>("Animals");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, emoji, category });
    setName("");
    setEmoji("");
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as Category);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmojiChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmoji(e.target.value);
  };

  return (
    <div>
      <h2 className="">Create a New Tag</h2>
      <div>
        <select
          name="categorySelector"
          id="Category Selector"
          value={category}
          onChange={handleCategoryChange}
        >
          {CategoryOptions.map((option) => (
            <option key={option.Value} value={option.Value}>
              {option.label}
            </option>
          ))}
        </select>
        <form onClick={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="Name"
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="emoji">Emoji</label>
          <input
            type="text"
            name="emoji"
            id="Emoji"
            value={emoji}
            onChange={handleEmojiChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SelectCategory;
