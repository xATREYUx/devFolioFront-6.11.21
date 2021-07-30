import React, { useState, useContext } from "react";
import { FormContainer } from "./contacts.styles";
import { appendErrors, useForm } from "react-hook-form";

import Button from "../form-elements/button";
import axios from "axios";
import domain from "../../util/domain";

import Captcha from "../form-elements/captcha";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [captcha, setCaptcha] = useState();

  const { register, handleSubmit, reset } = useForm("");
  // const { sendRequest } = useHttpClient();

  const [resetComponent, setResetComponent] = useState(false);

  const resetForm = () => setResetComponent(!resetComponent);

  const submitContact = async (e) => {
    e.preventDefault();

    console.log("send data", e);

    try {
      const newContactBody = {
        name,
        email,
        message,
      };
      console.log("new contact form token: ", captcha.token);
      let headers = {
        headers: {
          Authorization: "Bearer " + captcha.token,
        },
      };
      axios.post(`${domain}/contacts`, newContactBody, headers);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log("submitContact error", err);
    }
  };

  return (
    <FormContainer id="form-container">
      <form className="new-contact-form" onSubmit={submitContact}>
        <h2>Contact Me</h2>
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
        <br />
        <Captcha setCaptcha={setCaptcha} />
        {appendErrors.password && <p>{appendErrors.password.message}</p>}
        <br />
        <Button type="submit">Send</Button>
      </form>
    </FormContainer>
  );
};

export default ContactUs;
