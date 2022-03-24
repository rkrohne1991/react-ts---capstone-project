import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import classes from "./navigation.module.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/UI/cart-icon/cart-icon.component";
import CartDropdown from "../../components/UI/cart-dropdown/cart-dropdown.component";

const Navigation: React.FC = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOut = (
    <span className={classes["nav-link"]} onClick={signOutUser}>
      SIGN OUT
    </span>
  );

  const signIn = (
    <Link className={classes["nav-link"]} to="/auth">
      SIGN IN
    </Link>
  );
  return (
    <Fragment>
      <div className={classes["navigation"]}>
        <Link className={classes["logo-container"]} to="/">
          <CrwnLogo className={classes["logo"]} />
        </Link>
        <div className={classes["nav-links-container"]}>
          <Link className={classes["nav-link"]} to="/shop">
            SHOP
          </Link>
          {currentUser ? signOut : signIn}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
