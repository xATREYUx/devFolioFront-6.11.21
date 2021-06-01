import React, { useState, useContext } from "react";
import PostContext from "../../context/PostContext";

const NewPostForm = () => {
  const [title, setTitle] = useState();
  const [caption, setCaption] = useState();
  const [content, setContent] = useState();
  const [cardImage, setCardImage] = useState();
  //   const [postImageOne, setPostImageOne] = useState();
  //   const [postImageTwo, setPostImageTwo] = useState();
  const { posts, getPosts, usersPosts, createPost } = useContext(PostContext);
  const submitPost = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        title,
        caption,
        content,
        // cardImage,
      };
      createPost(postData);
    } catch (err) {
      console.log("createPost Error", err);
    }
  };

  return (
    <div>
      <div>New Post Form Component</div>
      <form id="new-post-form" onSubmit={submitPost}>
        <h1>New Post</h1>
        <br />
        <label>Title</label>
        <br />
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label>Caption</label>
        <br />
        <input
          type="text"
          placeholder="42 Charachter Limit"
          onChange={(e) => {
            setCaption(e.target.value);
          }}
          maxLength="42"
        />
        <br />
        <label>Content</label>
        <br />
        <textarea
          type="textarea"
          placeholder="Content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          cols="30"
          rows="10"
        />
        <br />
        <br />
        {/* <input
          type="text"
          placeholder="Image"
          name="cardImage"
          ref={register}
        /> */}
        {/* <ImageUpload
          name="cardImage"
          displayName="Card Image"
          inputRef={register}
          selectedImage={() => {}}
        /> */}

        {/* <input ref={register} name="cardImage" type="file" /> */}
        {/* {appendErrors.password && <p>{appendErrors.password.message}</p>} */}
        <br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;
