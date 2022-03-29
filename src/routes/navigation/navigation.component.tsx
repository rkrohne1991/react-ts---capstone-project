import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles";

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
    <NavLink as="span" onClick={signOutUser}>
      SIGN OUT
    </NavLink>
  );

  const signIn = <NavLink to="/auth">SIGN IN</NavLink>;
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? signOut : signIn}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
