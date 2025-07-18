import { fetchPosts } from "../Api/Api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const FetchRq = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const {
    data: res,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["posts", pageNumber], // it kind a work like useState
    queryFn: () => fetchPosts(pageNumber), // it kind of work like useEffect
    // gcTime: 10000, // garbage collection time, after which the data will be removed from cache
    // staleTime: 10000, // time after which the data will be considered stale and reFetched.
    // refetchInterval: 10000, // refetch the data every 10 seconds
    // refetchIntervalInBackground: true, // refetch the data even when the tab is in the background
    placeholderData: keepPreviousData, // hold the previous data until new one fetch for the pagination which will increase the user experience
  });

  const data = res?.data || []; // res.data is the posts data returned from the API

  if (isPending) {
    return (
      <div>
        <h2 className="text-white font-bold text-6xl flex items-center justify-center my-40 animate-bounce">
          Loading...
        </h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2 className="text-red-500 text-center text-3xl my-10">
          Something went wrong. Please try again ‼️
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-fit mx-auto my-8 p-6 bg-gray-400 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-6">Posts</h2>
      <ul className="list-none p-0">
        {data?.map(({ id, title, body }) => (
          <NavLink to={`/rq/${id}`} key={id}>
            <li className="bg-gray-300 mb-4 p-4 rounded-md shadow-sm">
              <p>{id}</p>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600">{body}</p>
            </li>
          </NavLink>
        ))}
      </ul>
      {data.length === 0 && (
        <p className="text-center text-white">No posts found.</p>
      )}

      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={() => setPageNumber((prev) => prev - 3)}
          disabled={pageNumber === 0 ? true : false}
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 disabled:bg-indigo-900 transition"
        >
          ⬅️ Prev
        </button>

        <h2 className="text-xl font-semibold text-white">
          Page: <span className="text-yellow-300">{pageNumber / 3 + 1}</span>
        </h2>

        <button
          onClick={() => setPageNumber((prev) => prev + 3)}
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default FetchRq;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ***          Explanation of the FetchRq Component          ***

// Using useQuery from React Query to fetch posts data
// This replaces the manual fetching and state management used in FetchOld.jsx
// It automatically handles loading, error, and data states
// and provides a cleaner and more efficient way to manage server state in React applications
// The queryKey is used to uniquely identify the query and can be used for cashing and refetching
// The queryFn is the function that fetches the data
// In this case it is the fetchPosts function importing from the Api module
// The data returned from the queryFn is available in the data variable
// isLoading indicates whether the query is currently loading
// isError indicates whether there was an error fetching the data
// The data variable will contain the posts data once the query is successful
// The useQuery hook will automatically refetch the data when the component mounts
// or when the queryKey changes, ensuring that the data is always up-to-date
// This approach simplifies the component Logic and reduces boilerplate code
// compare to the fetching logic in FetchOld.jsx
