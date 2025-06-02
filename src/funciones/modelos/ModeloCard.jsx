import './modeloCard.css';      // tu css actual

export default function ModeloCard({ modelo }) {
  const { imagenUrl, descripcion } = modelo;

  return (
    <article className="card">
      <img src={imagenUrl} alt={descripcion} className="thumb" />
      <span className="descripcion">{descripcion}</span>
      <button className="favBtn">❤</button>
    </article>
  );
}