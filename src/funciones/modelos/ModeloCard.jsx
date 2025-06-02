import './modeloCard.css';

export default function ModelCard({ modelo, onFav }) {
  const src = `${import.meta.env.VITE_API_URL}/${modelo.rutaImagen}`; // ajusta a tu campo

  return (
    <article className="modelo-card">
      <div className="modelo-thumb">
        <img src={src} alt={modelo.nombre} />
      </div>

      <div className="modelo-info">
        <h4>{modelo.nombre}</h4>
        <p>{modelo.descripcion}</p>
      </div>

      <button
        className={`fav-btn ${modelo.favorito ? 'isFav' : ''}`}
        onClick={() => onFav(modelo.id)}
      >
        ❤
      </button>
    </article>
  );
}