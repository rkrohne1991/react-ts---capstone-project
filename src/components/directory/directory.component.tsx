import { DirectoryContainer } from "./directory.styles";

import { Category } from "../../state/category";
import DirectoryItem from "../directory-item/directory-item.component";

import CATEGORIES_DATA from "../../categories-data.json";

const Directory: React.FC = () => {
  const categories: Category[] = CATEGORIES_DATA;

  return (
    <DirectoryContainer>
      {categories.map(({ id, title, imageUrl, route }) => (
        <DirectoryItem
          key={id}
          id={id}
          title={title}
          imageUrl={imageUrl}
          route={route}
        />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
