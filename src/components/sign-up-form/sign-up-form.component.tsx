import { FirebaseError } from "firebase/app";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Display Name</label>
        <input
          name="displayName"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
        />

        <label htmlFor="">Email</label>
        <input
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={email}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          required
          onChange={handleChange}
          value={password}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
