import { Category } from "../../state/category";
import classes from "./category-item.module.scss";

const CategoryItem: React.FC<Category> = ({ id, title, imageUrl }) => (
  <div key={id} className={classes["category-container"]}>
    <div
      className={classes["background-image"]}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className={classes["category-body-container"]}>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);

export default CategoryItem;
