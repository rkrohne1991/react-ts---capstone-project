import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

export enum ButtonTypeClasses {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

const getButton = (buttonType = ButtonTypeClasses.base): typeof BaseButton =>
  ({
    [ButtonTypeClasses.base]: BaseButton,
    [ButtonTypeClasses.google]: GoogleSignInButton,
    [ButtonTypeClasses.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: ButtonTypeClasses;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

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
