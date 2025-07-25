// https://jsonplaceholder.typicode.com/posts

import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts = async (pageNumber) => {
  try {
    const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
    return res;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
};

export const fetchIndividualPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res;
  } catch (error) {
    console.log("Error Fetching individual post:", error.message);
  }
};

// ..pagination
//! https://jsonplaceholder.typicode.com/posts?_start=1&_limit=3

// to delete a post

export const deletePost = async (id) => {
  try {
    return api.delete(`/posts/${id}`);
  } catch (error) {
    console.log("Error to delete a post", error.message);
  }
};

export const updatePost = async (id) => {
  try {
    return api.patch(`/posts/${id}`, { title: "I have updated" });
  } catch (error) {
    console.log("Error updating the post", error.message);
  }
};

export const fetchUsers = async (pageParams = 1) => {
  try {
    const res = await api.get(
      `https://api.github.com/users?per_page=10&page=${pageParams}`
    );
    return res.data;
  } catch (error) {
    console.log("Error fetching users", error.message);
  }
};
