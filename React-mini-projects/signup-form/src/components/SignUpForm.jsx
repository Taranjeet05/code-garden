

const SignUpForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-1/2 flex items-center justify-center mt-20">
      <form className="space-y-4">
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
            required
          />
        </div>

        <div className="flex items-center">
          <input
            id="newsletter"
            name="newsletter"
            type="checkbox"
            className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-indigo-600 checked:border-transparent checked:focus:ring-indigo-500 checked:focus:ring-2"
          />
          <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
            I want to join the newsletter
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex 
          items-center px-4 py-2
           bg-indigo-600 border 
           border-transparent rounded-md 
           font-medium text-white hover:bg-indigo-700 
           focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-indigo-500 sm:w-auto sm:text-sm"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;