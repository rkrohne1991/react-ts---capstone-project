import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: string;
}

interface ButtonTypeClasses {
  [key: string]: string;
}

const BUTTON_TYPE_CLASSES: ButtonTypeClasses = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType: string | undefined) => {
  switch (buttonType) {
    case "google":
      return GoogleSignInButton;
    case "inverted":
      return InvertedButton;
    case undefined:
    default:
      return BaseButton;
  }
};

const Button: React.FC<ButtonProps> = ({ buttonType, children, ...props }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...props}>{children}</CustomButton>;
};
export default Button;
