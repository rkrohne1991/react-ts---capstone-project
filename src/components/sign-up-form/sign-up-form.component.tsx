import { useState } from "react";
import { FirebaseError } from "firebase/app";

import FormInput from "../form-input/form-input.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import classes from "./sign-up-form.module.scss";
import Button from "../UI/button/button.component";

interface FormFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultFormFields: FormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      displayName.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    )
      return;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (response)
        await createUserDocumentFromAuth(response.user, { displayName });

      resetFormFields();
    } catch (error: unknown) {
      const err = error as FirebaseError;

      if (err.code === "auth/email-already-in-use")
        alert("Cannot create user, email already in use!");
      else console.error("User creation encountered an error", error);
    }
  };

  return (
    <div className={classes["sign-up-container"]}>
      <h2>Don't have the account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            name: "displayName",
            type: "text",
            value: displayName,
          }}
          required={true}
          changeHandler={handleChange}
        />

        <FormInput
          label="Email"
          inputOptions={{
            name: "email",
            type: "email",
            value: email,
          }}
          required={true}
          changeHandler={handleChange}
        />

        <FormInput
          label="Password"
          inputOptions={{
            name: "password",
            type: "password",
            value: password,
          }}
          required={true}
          changeHandler={handleChange}
        />

        <FormInput
          label="PasConfirm Passwordsword"
          inputOptions={{
            name: "confirmPassword",
            type: "password",
            value: confirmPassword,
          }}
          required={true}
          changeHandler={handleChange}
        />

        <Button type="submit">Signup</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
