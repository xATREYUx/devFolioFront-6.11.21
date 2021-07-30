import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import domain from "../../src/util/domain";
import firebase from "firebase";

const PostContext = createContext();

const PostContextProvider = (props) => {
  console.log("PostContext Initiated", props);

  const [posts, setPosts] = useState([]);
  const [usersPosts, setUsersPosts] = useState([]);

  const createPost = async (formData) => {
    for (var value of formData.values()) {
      console.log("createPost data", value);
    }

    try {
      console.log("createPost Action Initiated");
      //  formData.imageOne = urllocation
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const newPostRes = await axios.post(`${domain}/posts`, formData, config);
      console.log("newPostRes log", newPostRes.data);
      const data = newPostRes.data;
      setUsersPosts((prevState) => [...prevState, data]);
      console.log("---Post Created---");
    } catch (err) {
      console.log("createPost error", err);
    }
  };

  const getPosts = async () => {
    try {
      console.log("getPosts Initiated");
      let getPostsRes = await axios.get(`${domain}/posts`);
      console.log("getPosts response", getPostsRes.data);
      setPosts(getPostsRes.data);
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

  const deletePost = async () => {
    try {
      // signed out
    } catch (e) {
      // an error
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
