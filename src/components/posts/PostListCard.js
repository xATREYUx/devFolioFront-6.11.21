import { useHistory } from "react-router";
import { CardContainer } from "./posts.styles";
import { Column } from "../../shared/shared.styles";

const PostListCard = ({ post }) => {
  console.log("PostListCard Initiated: ", post);
  const history = useHistory();
  return (
    <CardContainer
      onClick={() => {
        console.log("post clicked!!");
        history.push(`/post/${post.id}`, post);
      }}
    >
      <Column style={{ flex: 1 }}>
        <img
          id="postImageOne"
          alt="Youre probably not online"
          src={post.postURLs[0]}
        />
      </Column>
      <Column style={{ flex: 1 }}>
        <h3>{post.title}</h3>

        <div>{post.caption}</div>
      </Column>
    </CardContainer>
  );
};

export default PostListCard;
