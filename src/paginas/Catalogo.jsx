import React from 'react';
import './Catalogo.css';

const Catalogo = () => {
  return (
    <div className="catalogo-container">
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." className="search-input" />
      </div>
      
      <div className="catalogo-content">
        <div className="productos-lista">
          {/* Producto Card */}
          <div className="producto-card">
            <div className="producto-imagen">
              <span>IMAGEN</span>
            </div>
            <div className="producto-info">
              <p className="descripcion">descripción</p>
              <div className="producto-actions">
                {/*<button className="btn-comprar">COMPRAR</button>*/}
                <button className="btn-favorito">♥</button>
              </div>
            </div>
          </div>

          {/* Producto Card 2 */}
          <div className="producto-card">
            <div className="producto-imagen">
              <span>IMAGEN</span>
            </div>
            <div className="producto-info">
              <p className="descripcion">descripción</p>
              <div className="producto-actions">
                {/*<button className="btn-comprar">COMPRAR</button>*/}
                <button className="btn-favorito">♥</button>
              </div>
            </div>
          </div>

          {/* Producto Card 3 */}
          <div className="producto-card">
            <div className="producto-imagen">
              <span>IMAGEN</span>
            </div>
            <div className="producto-info">
              <p className="descripcion">descripción</p>
              <div className="producto-actions">
                {/*<button className="btn-comprar">COMPRAR</button>*/}
                <button className="btn-favorito">♥</button>
              </div>
            </div>
          </div>
        </div>

        <div className="caracteristicas-panel">
          <h2>EN ESTA PARTE SE MUESTRAN LAS CARACTERÍSTICAS DE LOS OBJETOS DE LA DERECHA</h2>
        </div>
      </div>
    </div>
  );
};

export default Catalogo; 