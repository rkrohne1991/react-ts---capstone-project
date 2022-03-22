import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop: React.FC = () => {
  return <h1>I am the shop page</h1>;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
