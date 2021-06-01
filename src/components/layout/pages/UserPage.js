import React, { useContext, useEffect, useState } from "react";
import NewPostForm from "../../posts/NewPostForm";
import PostList from "../../posts/PostList";
import PostContext from "../../../context/PostContext";

const UserPage = () => {
  const { getUsersPosts, usersPosts } = useContext(PostContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getUsersPosts();
  }, []);

  // console.log("UserPage: ", usersPosts);
  return (
    <div>
      <div>User Page Component</div>
      {/* <h3>{usersPosts.length}</h3> */}

      <NewPostForm />
      <PostList posts={usersPosts} />
    </div>
  );
};

export default UserPage;
