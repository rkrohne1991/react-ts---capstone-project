import { ButtonType } from "../../../state/button-types";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
  isLoading?: boolean;
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

const Button: React.FC<ButtonProps> = ({
  buttonType,
  children,
  isLoading,
  ...props
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...props}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};
export default Button;
