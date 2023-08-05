import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Items from "./pages/Items";
import Sections from "./pages/Sections";
import Home from "./pages/Home";
import SectionsV1 from "./pages/SectionsV1";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sections" element={<Sections />} />
      <Route path="/sectionsV1" element={<SectionsV1 />} />
      <Route path="/sections/:sectionName" element={<Items />} />
    </Routes>
  </Router>
);

export default App;
