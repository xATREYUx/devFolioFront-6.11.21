import React, { useContext, useEffect } from "react";

const PostList = ({ posts }) => {
  useEffect(() => {
    console.log("PostList posts: ", posts);
  }, [posts]);

  return (
    <>
      <div>Post List Component</div>
      {posts.length > 0
        ? posts.map((post) => {
            console.log("post list item", post);
            return <div key={`${post.id}`}>{post.title}</div>;
          })
        : null}
    </>
  );
};

export default PostList;
