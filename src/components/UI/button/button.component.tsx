import classes from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: string;
}

interface ButtonTypeClasses {
  [key: string]: string;
}

const BUTTON_TYPE_CLASSES: ButtonTypeClasses = {
  google: classes["google-sign-in"],
  inverted: classes["inverted"],
};

const Button: React.FC<ButtonProps> = ({ buttonType, children, ...props }) => {
  const buttonClass = buttonType
    ? `${classes["button-container"]} ${BUTTON_TYPE_CLASSES[buttonType]}`
    : `${classes["button-container"]}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
export default Button;
