import React from 'react';

import { FormInputLabel, Input, Group } from './form-input.styles';

type FormInputProps = {
  label: string;
  value: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({ ...props }) => {
  const { label, value, name } = props;
  const { length } : { length: number } = value;

  return (
    <Group>
      <Input {...props} />
      {label && (
      <FormInputLabel
        shrink={Boolean(
          value && typeof value === 'string' && length,
        )}
        htmlFor={name}
      >
        {label}
      </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
