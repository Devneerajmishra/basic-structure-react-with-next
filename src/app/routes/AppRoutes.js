import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../page';
import About from '../about/page';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
