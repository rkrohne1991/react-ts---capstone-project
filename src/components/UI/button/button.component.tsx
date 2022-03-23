import classes from "./button.module.scss";

interface ButtonProps {
  buttonType?: string;
  type: "button" | "submit" | "reset" | undefined;
}

interface ButtonTypeClasses {
  [key: string]: string;
}

const BUTTON_TYPE_CLASSES: ButtonTypeClasses = {
  google: classes["google-sign-in"],
  inverted: classes["inverted"],
};

const Button: React.FC<ButtonProps> = ({ buttonType, type, children }) => {
  const buttonClass = buttonType
    ? `${classes["button-container"]} ${BUTTON_TYPE_CLASSES[buttonType]}`
    : `${classes["button-container"]}`;

  return (
    <button className={buttonClass} type={type}>
      {children}
    </button>
  );
};
export default Button;
