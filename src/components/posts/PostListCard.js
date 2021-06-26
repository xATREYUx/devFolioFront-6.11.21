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
      <Column>
        <img
          style={{ height: "100%", width: "100%" }}
          src={post.postURLs[0].cardImage}
        />
      </Column>
      <Column>
        <h3>{post.title}</h3>
        <div>{post.caption}</div>
      </Column>
    </CardContainer>
  );
};

export default PostListCard;
