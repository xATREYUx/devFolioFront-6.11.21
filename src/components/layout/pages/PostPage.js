import React from "react";
import { PostPageContainer } from "./post-page-styles";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../../shared/images/logo.svg";
import Linkify from "react-linkify";

const PostPage = (props) => {
  const history = useHistory();
  const postDetails = history.location.state;
  console.log("PostPage props", postDetails);
  return (
    <PostPageContainer>
      <div className="post-image-section-container">
        <h1>{postDetails.postURLs["postImageTwo"]}</h1>

        <div
          className={`post-image-container ${
            postDetails.postURLs[1] && "undashed"
          }`}
        >
          <img
            className="postImage"
            src={postDetails.postURLs[1].postImageOne}
          />
        </div>
        <div
          className={`post-image-container ${
            postDetails.postURLs[2] && "undashed"
          }`}
        >
          <img
            className="postImage"
            src={postDetails.postURLs[2].postImageTwo}
          />
        </div>
      </div>
      <div className="post-section-container">
        <h1>{postDetails.title}</h1>
        <Linkify>
          <div className="post-content">{postDetails.content}</div>
        </Linkify>
        <Logo className="logo" />
      </div>
    </PostPageContainer>
  );
};

export default PostPage;
