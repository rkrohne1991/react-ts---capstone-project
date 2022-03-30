import { ButtonType } from "../../../state/button-types";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
}

const getButton = (buttonType: ButtonType | undefined) => {
  switch (buttonType) {
    case ButtonType.GOOGLE:
      return GoogleSignInButton;
    case ButtonType.INVERTED:
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
