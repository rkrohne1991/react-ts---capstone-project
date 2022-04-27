import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import FormInput from '../form-input/form-input.component';

import Button, { ButtonTypeClasses } from '../UI/button/button.component';

import { SignUpContainer } from './sign-up-form.styles';
import {
  setIsModalOpen,
  setModalContent,
  signUpStart,
} from '../../store/action-creators';

type FormFields = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultFormFields: FormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    displayName, email, password, confirmPassword,
  } = formFields;

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
      displayName.length === 0
      || email.length === 0
      || password.length === 0
      || confirmPassword.length === 0
    ) return;

    if (password !== confirmPassword) {
      dispatch(setIsModalOpen(true));
      dispatch(setModalContent('Passwords do not match!'));
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        dispatch(setIsModalOpen(true));
        dispatch(setModalContent('Cannot create user, email already in use!'));
      } else {
        // console.error('User creation encountered an error', error);
        dispatch(setIsModalOpen(true));
        dispatch(
          setModalContent(`User creation encountered an error, ${error}`),
        );
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have the account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          value={displayName}
          required
          onChange={handleChange}
        />

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

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          onChange={handleChange}
        />

        <Button buttonType={ButtonTypeClasses.base} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
