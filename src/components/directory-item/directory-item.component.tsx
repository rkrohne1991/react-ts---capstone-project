import { Category } from "../../state/category";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem: React.FC<Category> = ({ id, title, imageUrl }) => (
  <DirectoryItemContainer key={id}>
    <BackgroundImage imageUrl={imageUrl} />
    <Body>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </Body>
  </DirectoryItemContainer>
);

export default DirectoryItem;
