import React, { useContext, useEffect, useState } from "react";
import { Column } from "../../../shared/shared.styles";
import { UserPageContainer } from "./user-page-styles";

import NewPostForm from "../../posts/NewPostForm";
import PostList from "../../posts/PostList";
import PostContext from "../../../context/PostContext";
import AuthContext from "../../../context/AuthContext";
import EnterUserAdmin from "../../adminComponents/MakeUserAdmin";

import firebase from "firebase";

const UserPage = () => {
  const { getUsersPosts, usersPosts } = useContext(PostContext);
  const { loggedIn, CheckAdmin } = useContext(AuthContext);

  const [editPostData, setEditPostData] = useState("");

  useEffect(() => {
    getUsersPosts();
    console.log("UserPage loggedIn", loggedIn);
  }, []);

  console.log("UserPage: ", usersPosts);
  return (
    <UserPageContainer>
      <Column>
        <div>{loggedIn.user.email}</div>
        <PostList
          posts={usersPosts}
          dataLimit={4}
          pageLimit={4}
          title=""
          setEditPostData={setEditPostData}
        />
      </Column>
      <Column>
        <NewPostForm
          editPostData={editPostData}
          setEditPostData={setEditPostData}
        />
        <div className="admin-container">
          <CheckAdmin />
        </div>
      </Column>
    </UserPageContainer>
  );
};

export default UserPage;
