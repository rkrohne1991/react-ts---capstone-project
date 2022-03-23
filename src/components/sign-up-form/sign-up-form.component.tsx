import { useState } from "react";

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
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
