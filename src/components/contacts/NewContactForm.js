import React, { useState, useContext } from "react";
import { FormContainer } from "./contacts.styles";
import { appendErrors, useForm } from "react-hook-form";

import Button from "../form-elements/button";
import axios from "axios";
import domain from "../../util/domain";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { register, handleSubmit, reset } = useForm("");
  // const { sendRequest } = useHttpClient();

  const [resetComponent, setResetComponent] = useState(false);

  const resetForm = () => setResetComponent(!resetComponent);

  const submitPost = async (e) => {
    e.preventDefault();

    console.log("send data", e);

    try {
      const postBody = {
        name,
        email,
        message,
      };

      axios.post(`${domain}/contacts`, postBody);

      resetForm();
      reset();
    } catch (err) {
      console.log("submitPost error", err);
    }
  };

  return (
    <FormContainer>
      <form id="new-post-form" onSubmit={submitPost}>
        <h1>Contact Me</h1>
        <br />
        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          placeholder="Email"
          name="email"
          maxLength="42"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label>Message</label>
        <br />
        <textarea
          type="textarea"
          placeholder="Message"
          name="message"
          cols="30"
          rows="10"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        {appendErrors.password && <p>{appendErrors.password.message}</p>}
        <br />
        <Button type="submit">Send</Button>
      </form>
    </FormContainer>
  );
};

export default ContactUs;
