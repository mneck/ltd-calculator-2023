import { Routes, Route } from "react-router-dom";
import "./App.css";

import PresentValueTable from "./pages/PresentValueTable";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<PresentValueTable />} />
      </Routes>
    </>
  );
}

export default App;
