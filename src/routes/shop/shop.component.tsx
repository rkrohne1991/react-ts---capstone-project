import { useContext } from "react";

import { ProductContext } from "../../contexts/products.context";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map(({ id, name }) => (
        <h1 key={id}>{name}</h1>
      ))}
    </div>
  );
};

export default Shop;
