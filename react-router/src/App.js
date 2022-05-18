import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Show from "./components/Show";
import New from "./components/New";
import Index from "./components/Index";
import NavBar from "./components/NavBar";
import Fallback from "./components/Fallback";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="products">
            <Route index element={<Index />} />
            <Route path=":productid">
              <Route index element={<Show />} />
              <Route path="edit" element={<Edit />} />
            </Route>
            <Route path="new" element={<New />} />
          </Route>
        </Route>
        <Route path="*" element={<Fallback />} />
      </Routes>
    </div>
  );
}

export default App;
