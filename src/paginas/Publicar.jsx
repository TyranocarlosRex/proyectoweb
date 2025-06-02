import React, { useState } from 'react';
import { useAddModeloMutation } from '../features/api/modelosApi';
import './Publicar.css';

export default function Publicar() {
  const [nombre, setNombre]         = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria]   = useState('');
  const [archivo, setArchivo]       = useState(null);

  const [addModelo, { isLoading, isSuccess, isError, error }] =
    useAddModeloMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!archivo) return alert('Selecciona un archivo');

    // 👉 arma FormData para enviar imagen + campos
    const data = new FormData();
    data.append('nombre', nombre);
    data.append('descripcion', descripcion);
    data.append('categoria', categoria);
    data.append('file', archivo);          // mismo nombre que espera tu API

    try {
      await addModelo(data).unwrap();      // RTKQ devuelve la promesa
      // opcional: limpiar o redirigir
      setNombre(''); setDescripcion(''); setCategoria(''); setArchivo(null);
      alert('¡Modelo subido!');
    } catch (_) {
      /* ya manejamos isError abajo */
    }
  };

  return (
    <div className="publicar-wrapper">
      <form onSubmit={handleSubmit} className="publicar-form">
        <label>Nombre
          <input value={nombre} onChange={e=>setNombre(e.target.value)} required/>
        </label>

        <label>Descripción
          <textarea rows={6}
            value={descripcion}
            onChange={e=>setDescripcion(e.target.value)}
            required
          />
        </label>

        <label>Categoría
          <input value={categoria} onChange={e=>setCategoria(e.target.value)} required/>
        </label>

        <label className="dropzone">
          {archivo ? archivo.name : 'Arrastra archivo o haz clic'}
          <input
            type="file"
            accept="image/*,model/*"   // ajusta extensiones .obj .fbx … si quieres
            onChange={e=>setArchivo(e.target.files[0])}
            hidden
          />
        </label>

        <button type="submit" disabled={isLoading}>SUBIR</button>

        {isError   && <p className="mensaje error">Error: {error?.data || 'falló'}</p>}
        {isSuccess && <p className="mensaje ok">Subido con éxito ✔</p>}
      </form>
    </div>
  );
}