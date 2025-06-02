import React, { useState } from 'react';
import { useGetModelosQuery } from '../features/api/modelosApi';  // 👈 hook de RTK Query
import './Catalogo.css';

export default function Catalogo() {
  // Estado local para mostrar detalles del modelo seleccionado
  const [seleccionado, setSeleccionado] = useState(null);

  // Llamada a la API (RTK Query maneja caching, loading, error…)
  const { data: modelos = [], isLoading, isError, error } = useGetModelosQuery();

  return (
    <div className="catalogo-container">
      {/* 🔍 Barra de búsqueda (todavía sin lógica de filtro) */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." className="search-input" />
      </div>

      <div className="catalogo-content">
        {/* LISTA DE PRODUCTOS */}
        <div className="productos-lista">
          {isLoading && <p className="mensaje">Cargando…</p>}
          {isError   && <p className="mensaje error">Error: {error?.error}</p>}

          {modelos.map((m) => (
            <div
              key={m.id}
              className="producto-card"
              onClick={() => setSeleccionado(m)}          
            >
              <div className="producto-imagen">
                {/* Fallback si no hay miniatura */}
                <img
                  src={m.miniaturaUrl || '/no-image.png'}
                  alt={m.descripcion}
                />
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

        {/* PANEL DE CARACTERÍSTICAS */}
        <div className="caracteristicas-panel">
          {seleccionado ? (
            <>
              <h2>Características</h2>
              <p><strong>ID:</strong> {seleccionado.id}</p>
              <p><strong>Descripción:</strong> {seleccionado.descripcion}</p>
              {/* Muestra imagen grande si existe */}
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