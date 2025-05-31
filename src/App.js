import React, { useState } from 'react';
import './App.css';
import Catalogo from './paginas/Catalogo';
import Publicar from './paginas/Publicar';

function App() {
  const [currentPage, setCurrentPage] = useState('catalogo');

  return (
    <div className="App">
      <nav className="navbar">
        <a href="/" className="nav-brand">MODELOS 3D</a>
        <div className="nav-links">
          <a 
            href="#catalogo" 
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('catalogo');
            }}
          >
            Catalogo
          </a>
          <a 
            href="#publicar"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('publicar');
            }}
          >
            Publicar
          </a>
          <div className="usuario-icon">
            <img src="/user-icon.png" alt="" />
          </div>
        </div>
      </nav>
      <main>
        {currentPage === 'catalogo' ? <Catalogo /> : <Publicar />}
      </main>
    </div>
  );
}

export default App;
