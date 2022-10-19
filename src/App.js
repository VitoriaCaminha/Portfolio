import React from 'react'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { Nav } from './Style';

export default function App() {
  return (
    <BrowserRouter>
      <Nav>
        <li>
          <Link to="/">Página inicial</Link>
        </li>
        <li>
          <Link to="/Home">Sobre</Link>
        </li>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" />
      </Routes>
    </BrowserRouter>
  );
}
