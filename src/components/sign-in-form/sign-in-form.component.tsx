import { useState } from "react";
import { FirebaseError } from "firebase/app";

import FormInput from "../form-input/form-input.component";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import classes from "./sign-in-form.module.scss";
import Button from "../UI/button/button.component";

interface FormFields {
  email: string;
  password: string;
}

const defaultFormFields: FormFields = {
  email: "",
  password: "",
};

const SignInForm: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.length === 0 || password.length === 0) return;

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error: unknown) {
      const err = error as FirebaseError;

      switch (err.code) {
        case "auth/wrong-password":
        case "auth/user-not-found":
          alert("Incorrect email or password!");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className={classes["sign-in-container"]}>
      <h2>Already have the account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          required={true}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          required={true}
          onChange={handleChange}
        />

        <div className={classes["buttons-container"]}>
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;