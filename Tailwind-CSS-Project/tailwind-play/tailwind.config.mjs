/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Cool primary color (indigo)
        secondary: "#D97706", // Warm secondary color (orange)
        accent: "#06B6D4", // Accent color (cyan)
        muted: "#64748B", // Muted color (grayish blue)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Clean, modern sans-serif
        heading: ["Poppins", "sans-serif"], // Stylish for headings
        mono: ["Fira Code", "monospace"], // Perfect for code snippets
      },
      spacing: {
        72: "18rem", // Custom large spacing
        84: "21rem", // Custom extra-large spacing
        96: "24rem", // Extra-extra large spacing
      },
      borderRadius: {
        "xl": "1rem", // Custom large border radius
        "2xl": "1.5rem", // Extra large border radius
        "3xl": "2rem", // Super large border radius
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle light shadow
        "custom-dark": "0 4px 6px rgba(0, 0, 0, 0.4)", // Stronger dark shadow
      },
    },
  },
  plugins: [],
};
