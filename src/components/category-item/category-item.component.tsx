import classes from "./category-item.module.scss";

interface CategoryItemProps {
  id: number;
  title: string;
  imageUrl: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ id, title, imageUrl }) => {
  return (
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
};

export default CategoryItem;
