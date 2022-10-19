import React from 'react'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import About from './components/About';
import Contacts from './components/Contacts';
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
          <Link to="/Sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/Contatos">Contatos</Link>
        </li>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Contatos" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
