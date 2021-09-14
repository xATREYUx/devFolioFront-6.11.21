import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenSquare,
  faTrashAlt,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import domain from "../../util/domain";

const PostButtons = ({ post, setEditPostData }) => {
  const deletePost = async () => {
    console.log("deletePost Initiated", post.id);
    const delPostRes = await axios.delete(`${domain}/posts/${post.id}`);
    console.log("deletePost Status: ", delPostRes);
  };

  const updatePost = async () => {
    console.log("updatePost Initiated", post.id);
    const updatePostRes = await axios.update(`${domain}/posts/$${post.id}`);
  };

  const editPost = () => {};

  return (
    <div>
      <div className="nav-icon" onClick={deletePost}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
      <div className="nav-icon" onClick={() => setEditPostData(post)}>
        <FontAwesomeIcon icon={faPenSquare} />
      </div>
    </div>
  );
};

export default PostButtons;
