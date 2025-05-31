import React, { useState, useRef } from 'react';
import './Publicar.css';

const Publicar = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.add('dragover');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="publicar-container">
      <div className="publicar-form">
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-group">
          <label>Descripcion</label>
          <textarea className="form-textarea"></textarea>
        </div>

        <div className="form-group">
          <label>Categoria</label>
          <input type="text" className="form-input" />
        </div>

        <div className="upload-section">
          <div 
            className="upload-area"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClickUpload}
          >
            {selectedFile ? (
              <div className="file-info">
                <p>Archivo seleccionado:</p>
                <p>{selectedFile.name}</p>
              </div>
            ) : (
              <div className="upload-message">
                <p className="upload-hint">Arrastra y suelta un archivo aquí o haz clic para seleccionar</p>
                {/*SI QUIEREN LE PUEDEN PONER OTRO PARA PONER LA FOTO QUE SE VA PONER EL PARTE DE LOS CATALOGOS DE CADA MODELO*/}
              </div>
            )}
            <input 
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        <div className="form-actions">
          <button className="btn-subir">SUBIR</button>
        </div>
      </div>
    </div>
  );
};

export default Publicar; 