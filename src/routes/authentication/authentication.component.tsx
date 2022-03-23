import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import classes from "./authentication.module.scss";

const Authentication: React.FC = () => {
  return (
    <div className={classes["authentication-container"]}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
