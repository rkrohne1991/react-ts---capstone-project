import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/UI/cart-icon/cart-icon.component";
import CartDropdown from "../../components/UI/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../hooks/user-selector";
import { RootState } from "../../store";
import { selectIsCartOpen } from "../../hooks/cart-selector";
import { signOutStart } from "../../store/action-creators";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector<RootState>(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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
