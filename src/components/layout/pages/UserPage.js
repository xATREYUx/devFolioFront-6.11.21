import React, { useContext, useEffect, useState } from "react";
import { Column } from "../../../shared/shared.styles";
import { UserPageContainer } from "./user-page-styles";

import NewPostForm from "../../posts/NewPostForm";
import PostList from "../../posts/PostList";
import PostContext from "../../../context/PostContext";
import AuthContext from "../../../context/AuthContext";

const UserPage = () => {
  const { getUsersPosts, usersPosts } = useContext(PostContext);
  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    getUsersPosts();
  }, []);

  console.log("UserPage: ", usersPosts);
  return (
    <UserPageContainer>
      <Column>
        <div>{loggedIn.user.email}</div>
        <PostList posts={usersPosts} dataLimit={4} pageLimit={4} title="" />
      </Column>
      <Column>
        <NewPostForm />
      </Column>
    </UserPageContainer>
  );
};

export default UserPage;
