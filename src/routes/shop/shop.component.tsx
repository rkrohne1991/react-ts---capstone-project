import SHOP_DATA from "../../shop-data.json";
import { Product } from "../../state/product";

const Shop = () => {
  const shopData: Product[] = SHOP_DATA;

  return (
    <div>
      {shopData.map(({ id, name }) => (
        <h1 key={id}>{name}</h1>
      ))}
    </div>
  );
};

export default Shop;
