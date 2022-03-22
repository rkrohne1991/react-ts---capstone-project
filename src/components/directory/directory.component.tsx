import classes from "./directory.module.scss";

import { Category } from "../../state/category";
import CategoryItem from "../category-item/category-item.component";

interface DirectoryProps {
  categories: Category[];
}

const Directory: React.FC<DirectoryProps> = ({ categories }) => (
  <div className={classes["directory-container"]}>
    {categories.map(({ id, title, imageUrl }) => (
      <CategoryItem key={id} id={id} title={title} imageUrl={imageUrl} />
    ))}
  </div>
);

export default Directory;
