import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../../hooks/cart-selector';
import { setIsCartOpen } from '../../../store/action-creators';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon: React.FC = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = (_: React.MouseEvent<HTMLDivElement>) => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
