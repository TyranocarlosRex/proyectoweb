import { useGetModelosQuery } from '../api/modelosApi';
import { useLikeModeloMutation } from '../api/apiSlice';
import ModeloCard from './ModeloCard';

export default function ModelosFeed() {
  const { data: modelos = [], isLoading, isError, error } = useGetModelosQuery();
  const [likeModelo] = useLikeModeloMutation();

  if (isLoading) return <p style={{ color: '#fff' }}>Cargando…</p>;
  if (isError) return <p style={{ color: 'red' }}>Error: {error?.error}</p>;

  return (
    <section>
      {modelos.map(m => (
        <ModeloCard key={m.id} modelo={m} onLike={likeModelo} />
      ))}
    </section>
  );
}