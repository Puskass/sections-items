import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Items from './pages/Items';
import Sections from './pages/Sections'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<h1>This is home page, Go to /sections </h1>} />
      <Route path="/sections" element={<Sections />} />
      <Route path="/sections/:sectionName" element={<Items />} />
    </Routes>
  </Router>
);

export default App;
