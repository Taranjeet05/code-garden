import { useState } from "react";

const SignUpForm = () => {
  // States
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });
  // for error and success messages ⬇️
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 

  // Handle input changes
  const handleOnChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSuccess("Sign-up successful! 🎉");
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/2 flex flex-col items-center justify-center mt-20">
      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Confirm your password"
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="flex items-center">
          <input
            id="newsletter"
            name="newsletter"
            type="checkbox"
            onChange={handleOnChange}
            className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-indigo-600 checked:border-transparent checked:focus:ring-indigo-500 checked:focus:ring-2"
          />
          <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
            I want to join the newsletter
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
        >
          Sign Up
        </button>
      </form>

      {/* Error or Success Messages */}
      <div className="w-full mt-4">
        {error && (
          <p className="text-red-500 bg-red-100 border border-red-400 rounded-md p-3 text-sm">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-500 bg-green-100 border border-green-400 rounded-md p-3 text-sm">
            {success}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
