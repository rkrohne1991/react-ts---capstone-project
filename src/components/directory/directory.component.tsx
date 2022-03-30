import { DirectoryContainer } from "./directory.styles";

import { Category } from "../../state/category";
import DirectoryItem from "../directory-item/directory-item.component";

interface DirectoryProps {
  categories: Category[];
}

const Directory: React.FC<DirectoryProps> = ({ categories }) => (
  <DirectoryContainer>
    {categories.map(({ id, title, imageUrl }) => (
      <DirectoryItem key={id} id={id} title={title} imageUrl={imageUrl} />
    ))}
  </DirectoryContainer>
);

export default Directory;
