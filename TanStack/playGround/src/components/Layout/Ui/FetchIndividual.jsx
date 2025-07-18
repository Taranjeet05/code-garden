import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchIndividualPost } from "../../../Api/Api";
import { NavLink, useParams } from "react-router-dom";

const FetchIndividual = () => {
  const { id } = useParams();

  const {
    data: res,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchIndividualPost(id),
  });

  const data = res?.data || [];

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
    <div className="max-w-7xl mx-auto my-20 bg-white shadow-lg rounded-xl p-6 border border-indigo-100">
      <h1 className="text-2xl font-bold mb-4 text-indigo-700">Post Details</h1>
      <div className="space-y-3 text-gray-800">
        <p>
          <span className="font-semibold">🆔 ID:</span> {data.id}
        </p>
        <p>
          <span className="font-semibold">📌 Title:</span> {data.title}
        </p>
        <p>
          <span className="font-semibold">📝 Body:</span> {data.body}
        </p>
      </div>
      <NavLink to="/rq">
        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
          ⬅️ Go Back
        </button>
      </NavLink>
    </div>
  );
};

export default FetchIndividual;
