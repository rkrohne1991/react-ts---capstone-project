import { FormInputLabel, Input, Group } from "./form-input.styles";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormInput: React.FC<FormInputProps> = ({ ...props }) => {
  const propsValueLength = String(props.value).length;

  return (
    <Group>
      <Input {...props} />
      {props.label && (
        <FormInputLabel shrink={propsValueLength} htmlFor={props.name}>
          {props.label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
