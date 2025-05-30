import NewPostForm from '../funciones/posts/newPostForm';
import PostsFeed from '../funciones/posts/postsFeed';

export default function Home() {
  return (
    <main className="max-w-xl mx-auto pt-6">
      <NewPostForm />
      <PostsFeed />
    </main>
  );
}