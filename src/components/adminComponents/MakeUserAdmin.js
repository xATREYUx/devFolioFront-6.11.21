import React, { useState, useContext } from "react";
import { FormContainer } from "../posts/posts.styles";
import { appendErrors, useForm } from "react-hook-form";

import Button from "../form-elements/button";
import axios from "axios";
import domain from "../../util/domain";

const EnterUserAdmin = () => {
  const [email, setEmail] = useState("");

  const { register, handleSubmit, reset } = useForm("");

  const [resetComponent, setResetComponent] = useState(false);

  const resetForm = () => setResetComponent(!resetComponent);

  const submitAdmin = async (e) => {
    e.preventDefault();

    console.log("send admin data", e);

    try {
      const newAdminBody = {
        email,
      };

      axios.post(`${domain}/admin`, newAdminBody);
      setEmail("");
    } catch (err) {
      console.log("submitAdmin error", err);
    }
  };

  return (
    <FormContainer id="form-container">
      <form className="new-admin-form" onSubmit={submitAdmin}>
        <h2>Add Admin</h2>
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

        {/* {appendErrors.password && <p>{appendErrors.password.message}</p>} */}
        <br />
        <Button type="submit">Add Admin</Button>
      </form>
    </FormContainer>
  );
};

export default EnterUserAdmin;
