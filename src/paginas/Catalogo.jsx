import React, { useState, useMemo } from 'react';
import { useGetModelosQuery } from '../features/api/modelosApi';  // 👈 hook de RTK Query
import './Catalogo.css';

export default function Catalogo() {
  const [seleccionado, setSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  const { data: modelos = [], isLoading, isError, error } = useGetModelosQuery();

  const filtrados = useMemo(() => {
    const term = busqueda.trim().toLowerCase();
    if (!term) return modelos;
    return modelos.filter(m =>
      (m.nombre && m.nombre.toLowerCase().includes(term)) ||
      (m.descripcion && m.descripcion.toLowerCase().includes(term)) ||
      (m.categoria && m.categoria.toLowerCase().includes(term))
    );
  }, [busqueda, modelos]);

  return (
    <div className="catalogo-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="catalogo-content">
        <div className="productos-lista">
          {isLoading && <p className="mensaje">Cargando…</p>}
          {isError && <p className="mensaje error">Error: {error?.error}</p>}

          {filtrados.length === 0 && !isLoading && (
            <p className="mensaje">Sin resultados para “{busqueda}”.</p>
          )}

          {filtrados.map((m) => (
            <div
              key={m.id}
              className="producto-card"
              onClick={() => setSeleccionado(m)}
            >
              <div className="producto-imagen">
                <img src={m.miniaturaUrl || '/no-image.png'} alt={m.descripcion} />
              </div>
              <div className="producto-info">
                <p className="descripcion">{m.descripcion}</p>
                <div className="producto-actions">
                  <button className="btn-favorito">♥</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="caracteristicas-panel">
          {seleccionado ? (
            <>
              <h2>{seleccionado.nombre}</h2>
              <p><strong>Categoría:</strong> {seleccionado.categoria}</p>
              <p>{seleccionado.descripcion}</p>
              {seleccionado.miniaturaUrl && (
                <img
                  src={seleccionado.miniaturaUrl}
                  alt={seleccionado.descripcion}
                  className="preview-img"
                />
              )}
            </>
          ) : (
            <h2>Selecciona un modelo de la lista</h2>
          )}
        </div>
      </div>
    </div>
  );
}
