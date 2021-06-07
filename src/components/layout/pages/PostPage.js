import { useHistory } from "react-router";

const PostPage = () => {
  const history = useHistory();
  const post = history.location.state;
  return (
    <>
      <h2> {post.title} </h2>
      <div> {post.caption} </div>
      <div> {post.content} </div>
      <div> {post.postURLs[0].cardImage} </div>
      <img src={post.postURLs[0].cardImage} />
    </>
  );
};

export default PostPage;
