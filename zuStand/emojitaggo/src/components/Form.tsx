"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Category, CategoryOptions } from "../types/index";

const Form = () => {
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create a New Tag
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Category Selector */}
          <div className="flex flex-col">
            <label htmlFor="category" className="mb-1 font-medium">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
            >
              {CategoryOptions.map((option) => (
                <option key={option.Value} value={option.Value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter tag name"
            />
          </div>

          {/* Emoji Input */}
          <div className="flex flex-col">
            <label htmlFor="emoji" className="mb-1 font-medium">
              Emoji
            </label>
            <input
              type="text"
              id="emoji"
              value={emoji}
              onChange={handleEmojiChange}
              className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter emoji"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
