import { useNavigate } from "react-router-dom";
import { CategoryHome } from "../../store/types/categoryTypes";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem: React.FC<CategoryHome> = ({
  id,
  title,
  imageUrl,
  route,
}) => {
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
