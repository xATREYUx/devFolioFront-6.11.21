import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import domain from "../util/domain";
import firebase from "firebase";

const PostContext = createContext();

const PostContextProvider = (props) => {
  console.log("PostContext Initiated");

  const [posts, setPosts] = useState([]);
  const [usersPosts, setUsersPosts] = useState([]);

  const createPost = async (postData) => {
    console.log("createPost Action Initiated", postData);
    const newPostRes = await axios.post(`${domain}/posts`, postData);
    console.log("newPostRes log", newPostRes.data);
    const data = newPostRes.data;
    setUsersPosts((prevState) => [...prevState, data]);
  };

  const getPosts = async () => {
    try {
      console.log("getPosts Initiated");
      let getPostsRes = await axios.get(`${domain}/posts`);
      console.log("getPosts response", getPostsRes.data);
      setPosts(getPostsRes);
    } catch (err) {
      console.log(err);
    }
  };
  const getUsersPosts = async () => {
    try {
      console.log("----getUsersPosts Initiated----");
      const getUsersPostsRes = await axios.get(`${domain}/posts/user`);
      console.log("getUsersPosts response", getUsersPostsRes.data);
      setUsersPosts(getUsersPostsRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        getPosts,
        posts,
        setPosts,
        usersPosts,
        setUsersPosts,
        createPost,
        getUsersPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
export default PostContext;

export { PostContextProvider };
