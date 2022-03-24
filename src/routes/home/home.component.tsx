import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

import { Category } from "../../state/category";
import CATEGORIES_DATA from "../../categories-data.json";

const Home: React.FC = () => {
  const categories: Category[] = CATEGORIES_DATA;
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
