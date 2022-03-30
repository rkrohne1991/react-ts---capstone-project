import { useNavigate } from "react-router-dom";

import { Category } from "../../state/category";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem: React.FC<Category> = ({ id, title, imageUrl, route }) => {
  const navigate = useNavigate();
  const onNavigateHandler = (_: React.MouseEvent<HTMLDivElement>) =>
    navigate(route);

  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
