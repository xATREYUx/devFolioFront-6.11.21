import React, { useState, useContext, useEffect } from "react";
import { FormContainer } from "./posts.styles";
import { appendErrors, useForm } from "react-hook-form";
import PostContext from "../../context/PostContext";
import AuthContext from "../../context/AuthContext";

import ImageUpload from "../form-elements/ImageUpload";
import Button from "../form-elements/button";
import axios from "axios";

const NewPostForm = (props) => {
  console.log("NewPostForm props", props.editPostData);
  const { register, handleSubmit, reset } = useForm("");
  const { createPost, updatePost } = useContext(PostContext);
  // const { sendRequest } = useHttpClient();
  const [editMode, setEditMode] = useState("Create");
  const [pickedCardImage, setPickedCardImage] = useState();
  const [pickedCardImageOne, setPickedCardImageOne] = useState();
  const [pickedCardImageTwo, setPickedCardImageTwo] = useState();
  const [resetComponent, setResetComponent] = useState(false);
  const [editPostId, setEditPostId] = useState();
  const resetForm = () => setResetComponent(!resetComponent);

  useEffect(() => {
    if (props.editPostData) {
      console.log("props.editPostData", props.editPostData);
      setEditMode("Edit");
      setEditPostId(props.editPostData.id);
    }
  }, [props.editPostData]);

  const submitPost = async (data) => {
    console.log("send data", data);
    console.log("send pickedCardImage", pickedCardImage);

    var formData = new FormData();

    try {
      const dataFunction = async () => {
        formData.append("title", data.title);
        formData.append("caption", data.caption);
        formData.append("content", data.content);
        formData.append("cardImage", pickedCardImage);
        formData.append("postImageOne", pickedCardImageOne);
        formData.append("postImageTwo", pickedCardImageTwo);
        // props.addNewPost((prevState) => [response.post, ...prevState]);
      };
      await dataFunction();

      for (var value of formData.values()) {
        console.log("newpostform data", value);
      }
      await createPost(formData);

      resetForm();
      reset();
    } catch (err) {
      console.log("submitPost error", err);
    }
  };

  const editPost = async (data) => {
    console.log("editPost Initiated data", data);
    console.log("editPost send pickedCardImage", pickedCardImage);

    var formData = new FormData();

    try {
      const dataFunction = async () => {
        formData.append("title", data.title);
        formData.append("caption", data.caption);
        formData.append("content", data.content);
        formData.append("cardImage", pickedCardImage);
        formData.append("postImageOne", pickedCardImageOne);
        formData.append("postImageTwo", pickedCardImageTwo);
        // props.addNewPost((prevState) => [response.post, ...prevState]);
      };
      await dataFunction();

      for (var value of formData.values()) {
        console.log("editPost data value", value);
      }
      await updatePost({ formData, editPostId });

      resetForm();
      reset();
    } catch (err) {
      console.log("editPost error", err);
    }
  };

  return (
    <FormContainer>
      <form
        id="new-post-form"
        onSubmit={handleSubmit(editMode === "Edit" ? editPost : submitPost)}
        // enctype="multipart/form-data"
      >
        <h1>{editMode} Post</h1>
        <h1>{props.editPostData.id}</h1>
        <br />
        <label>Title</label>
        <br />
        <input
          type="text"
          placeholder="Title"
          name="title"
          defaultValue={props.editPostData.title || ""}
          {...register("title")}
        />
        <br />
        <label>Caption</label>
        <br />
        <input
          type="text"
          placeholder="42 Charachter Limit"
          name="caption"
          maxLength="42"
          defaultValue={props.editPostData.caption || ""}
          {...register("caption")}
        />
        <br />
        <label>Content</label>
        <br />
        <textarea
          type="textarea"
          placeholder="Content"
          name="content"
          cols="30"
          rows="10"
          defaultValue={props.editPostData.content || ""}
          {...register("content")}
        />
        <br />
        <br />
        {/* <input
          type="text"
          placeholder="Image"
          name="cardImage"
          ref={register}
        />*/}
        <ImageUpload
          name="cardImage"
          displayName="Card Image"
          previewImage={props?.editPostData?.postURLs?.[0]}
          // inputRef={register}
          setImage={setPickedCardImage}
          resetForm={resetComponent}
        />
        <ImageUpload
          name="postImageOne"
          displayName="Post Image One"
          previewImage={props?.editPostData?.postURLs?.[1]}
          // inputRef={register}
          setImage={setPickedCardImageOne}
          resetForm={resetComponent}
        />
        <ImageUpload
          name="postImageTwo"
          displayName="Post Image Two"
          previewImage={props?.editPostData?.postURLs?.[2]}
          // inputRef={register}
          setImage={setPickedCardImageTwo}
          resetForm={resetComponent}
        />
        {/* <input ref={register} name="cardImage" type="file" /> */}
        {appendErrors.password && <p>{appendErrors.password.message}</p>}
        <br />

        <Button type="submit">{editMode === "Edit" ? "Edit" : "Post"}</Button>
      </form>
    </FormContainer>
  );
};

export default NewPostForm;
