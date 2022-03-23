import classes from "./form-input.module.scss";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormInput: React.FC<FormInputProps> = ({ ...props }) => {
  const propsValueLength = new String(props.value).length;

  const formLabelClass = propsValueLength
    ? `${classes["form-input-label"]} ${classes["shrink"]}`
    : classes["form-input-label"];

  return (
    <div className={classes["group"]}>
      <input className={classes["form-input"]} {...props} />
      {props.label && (
        <label className={formLabelClass} htmlFor={props.name}>
          {props.label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
