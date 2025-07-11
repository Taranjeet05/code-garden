import React, { useEffect, useState } from "react";
import { fetchPosts } from "../Api/Api";

const FetchOld = () => {
  const [posts, setPosts] = useState([]);

  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      res.status === 200 ? setPosts(res.data) : setPosts([]);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="max-w-fit mx-auto my-8 p-6 bg-gray-400 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-6">Posts</h2>
      <ul className="list-none p-0">
        {posts.map(({ id, title, body }) => (
          <li key={id} className="bg-gray-300 mb-4 p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-medium mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600">{body}</p>
          </li>
        ))}
      </ul>
      {posts.length === 0 && (
        <p className="text-center text-gray-400">No posts found.</p>
      )}
    </div>
  );
};

export default FetchOld;
