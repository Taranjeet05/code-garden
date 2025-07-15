// https://jsonplaceholder.typicode.com/posts

import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts = async () => {
  try {
    const res = await api.get("/posts");
    return res;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
};
