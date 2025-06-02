import { useGetPostsQuery } from '../features/api/apiSlice';
import PostCard from './postCard';

export default function PostsFeed() {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery();

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Ups, error al cargar los posts.</p>;

  return (
    <section>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </section>
  );
}