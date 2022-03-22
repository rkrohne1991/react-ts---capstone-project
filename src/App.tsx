import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./routes/home/home.component";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
