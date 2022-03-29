import classes from "./directory.module.scss";

import { Category } from "../../state/category";
import DirectoryItem from "../directory-item/directory-item.component";

interface DirectoryProps {
  categories: Category[];
}

const Directory: React.FC<DirectoryProps> = ({ categories }) => (
  <div className={classes["directory-container"]}>
    {categories.map(({ id, title, imageUrl }) => (
      <DirectoryItem key={id} id={id} title={title} imageUrl={imageUrl} />
    ))}
  </div>
);

export default Directory;
