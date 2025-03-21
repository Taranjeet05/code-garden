# 🎂 Age Calculator App

A clean and responsive age calculator app built with **Next.js 15** and **Tailwind CSS**, based on the Frontend Mentor challenge. It calculates the exact age in years, months, and days based on a valid birth date input.

## 📸 Preview

![Desktop Preview](./design/desktop-preview.jpg)

## 🚀 Live Demo

👉 [Live Site URL](https://your-deployment-url.vercel.app)

---

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript (ES6+)
- HTML5 & semantic structure
- Responsive design principles

---

## ✅ Features

- 🔢 **Age Calculation** in years, months, and days
- 🧠 **Validation Rules:**
  - Required fields must not be empty
  - Day must be between 1-31
  - Month must be between 1-12
  - Year must not be in the future
  - The combination of date must be valid (e.g., 31/04/1991 is invalid)
- 📱 **Responsive layout** for mobile and desktop
- ✨ **Hover and focus** states for interactive elements
- 🔢 **Bonus:** Age numbers **animate** to their final value after form submission

---

## ✨ What I Learned

- Handling form validation manually with custom messages
- Using `Date` object in JavaScript to calculate age logic
- Animating numbers using `setInterval` or `framer-motion`
- Working with responsive Tailwind utility classes
- Creating a clean and accessible user interface

---

## 🚧 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/age-calculator-app.git

# Navigate to the project folder
cd age-calculator-app

# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000 in your browser
