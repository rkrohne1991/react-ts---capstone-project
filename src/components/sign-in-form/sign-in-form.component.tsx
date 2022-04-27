import React, { useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';

import Button, { ButtonTypeClasses } from '../UI/button/button.component';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import {
  emailSignInStart,
  googleSignInStart,
  setIsModalOpen,
  setModalContent,
} from '../../store/action-creators';

type FormFields = {
  email: string;
  password: string;
};

const defaultFormFields: FormFields = {
  email: '',
  password: '',
};

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.length === 0 || password.length === 0) return;

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error: unknown) {
      const err = error as FirebaseError;
      dispatch(setIsModalOpen(true));
      dispatch(setModalContent(`User sign in failed, ${err}`));
      // console.log('user sign in failed', err);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have the account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          required
          onChange={handleChange}
        />

        <ButtonsContainer>
          <Button buttonType={ButtonTypeClasses.base} type="submit">
            Sign In
          </Button>
          <Button
            buttonType={ButtonTypeClasses.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
