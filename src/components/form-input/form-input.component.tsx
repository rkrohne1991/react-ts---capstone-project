import { FormInputLabel, Input, Group } from "./form-input.styles";

type FormInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({ ...props }) => {
  return (
    <Group>
      <Input {...props} />
      {props.label && (
        <FormInputLabel
          shrink={Boolean(
            props.value && typeof props.value === "string" && props.value.length
          )}
          htmlFor={props.name}
        >
          {props.label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
