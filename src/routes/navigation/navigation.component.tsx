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
import Modal from "../../components/UI/modal/modal.component";

import { selectCurrentUser } from "../../hooks/user-selector";
import { RootState } from "../../store";
import { selectIsCartOpen } from "../../hooks/cart-selector";
import { setIsModalOpen, signOutStart } from "../../store/action-creators";
import {
  selectIsModalOpen,
  selectModalContent,
} from "../../hooks/modal-selector";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector<RootState>(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const isModalOpen = useSelector(selectIsModalOpen);
  const modalContent = useSelector(selectModalContent);

  const signOutUser = () => dispatch(signOutStart());

  const hideModalHandler = (_: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setIsModalOpen(false));
  };

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
      {isModalOpen && <Modal onClose={hideModalHandler}>{modalContent}</Modal>}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
