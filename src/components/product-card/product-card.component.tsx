import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { addItemToCart } from '../../store/action-creators';
import { selectCartItems } from '../../hooks/cart-selector';
import Button, { ButtonTypeClasses } from '../UI/button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';
import { CategoryItem } from '../../store/types/categoryTypes';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch<Dispatch>();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = (_: React.MouseEvent<HTMLButtonElement>) => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={ButtonTypeClasses.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};
export default ProductCard;
