import { Category } from "../../state/category";
import classes from "./directory-item.module.scss";

const DirectoryItem: React.FC<Category> = ({ id, title, imageUrl }) => (
  <div key={id} className={classes["directory-item-container"]}>
    <div
      className={classes["background-image"]}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className={classes["body"]}>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);

export default DirectoryItem;
