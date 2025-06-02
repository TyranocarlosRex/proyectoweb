import React, { useState, useEffect } from 'react';
import './App.css';
import Catalogo from './paginas/Catalogo';
import Publicar from './paginas/Publicar';

function App() {
  const [currentPage, setCurrentPage] = useState('catalogo');

  const API_URL = process.env.REACT_APP_API_URL;

   useEffect(() => {
    fetch(`${API_URL}/modelo3d`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => console.log('Posts:', data))
      .catch(err => console.error('Error al conectar con la API:', err));
  }, [API_URL]);

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
