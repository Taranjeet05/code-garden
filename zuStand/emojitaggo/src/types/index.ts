// let's create the type of CategoryOptions
export type Category = "Animals" | "Fruits" | "Countries";

export type CategoryOptions = {
  value: Category;
  label: string;
  emoji: string;
};

export const CategoryOptions = [
  { Value: "Animals", label: "🐾 Animals", emoji: "🐾" },
  { Value: "Fruits", label: "🍎 Fruits", emoji: "🍎" },
  { Value: "Countries", label: "🌍 Countries", emoji: "🌍" },
];

export type Tag = {
  id: string;
  name: string;
  category: Category;
  emoji: string;
};
