import axios from "axios";
import domain from "../../util/domain";
import PostContext from "../../context/PostContext";
import { useContext } from "react";

export const createPost = async (postData) => {
  console.log("createPost Action Initiated", postData);

  const newPostRes = await axios.post(`${domain}/posts`, postData);
  console.log("newPostRes log", newPostRes.data);
};

export const getUsersPosts = async () => {
  console.log("getUsersPosts Action Initiated");
  const usersPosts = await axios.get(`http://localhost:5000/posts/user`);

  console.log("getUsersPosts: ", usersPosts);

  return usersPosts;
};
