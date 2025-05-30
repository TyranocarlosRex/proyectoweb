import { useSelector } from 'react-redux';
import PostCard from './postCard';

export default function PostsFeed() {
  const posts = useSelector(state => state.posts);
  return (
    <section>
      {posts.map(p => (
        <PostCard key={p.id} post={p} />
      ))}
    </section>
  );
}