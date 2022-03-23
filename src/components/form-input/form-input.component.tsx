import classes from "./form-input.module.scss";

interface FormInputOptions {
  [key: string]: string;
}

interface FormInputProps {
  label?: string;
  changeHandler(event: React.ChangeEvent<HTMLInputElement>): void;
  inputOptions: FormInputOptions;
  required: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  changeHandler,
  inputOptions,
  required,
}) => {
  const formLabelClass = inputOptions.value.length
    ? `${classes["form-input-label"]} ${classes["shrink"]}`
    : classes["form-input-label"];

  return (
    <div className={classes["group"]}>
      <input
        className={classes["form-input"]}
        {...inputOptions}
        onChange={changeHandler}
        required={required}
      />
      {label && (
        <label className={formLabelClass} htmlFor={inputOptions.name}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
