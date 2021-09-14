import { useContext } from "react";
import { useHistory } from "react-router";
import { CardContainer, PostButtonsContainer } from "./posts.styles";
import { Column } from "../../shared/shared.styles";
import AuthContext from "../../context/AuthContext";
import PostButtons from "./PostButtons";

const PostListCard = ({ post, setEditPostData }) => {
  console.log("PostListCard Initiated: ", post);
  const history = useHistory();
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <CardContainer>
        <Column
          style={{ flex: 1 }}
          onClick={() => {
            console.log("post clicked!!");
            history.push(`/post/${post.id}`, post);
          }}
        >
          <img
            id="postImageOne"
            alt="Youre probably not online"
            src={post.postURLs[0]}
          />
        </Column>
        <Column style={{ flex: 1 }}>
          <h3
            onClick={() => {
              console.log("post clicked!!");
              history.push(`/post/${post.id}`, post);
            }}
          >
            {post.title}
          </h3>
          <div>{post.caption}</div>
          <PostButtonsContainer className="postButtons">
            {post.creator === loggedIn.user.uid && (
              <PostButtons post={post} setEditPostData={setEditPostData} />
            )}
          </PostButtonsContainer>
        </Column>
      </CardContainer>
    </>
  );
};

export default PostListCard;
