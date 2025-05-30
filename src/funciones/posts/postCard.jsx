export default function PostCard({ post }) {
  return (
    <article className="bg-white rounded-xl shadow p-4 mb-4">
      <header className="flex items-center gap-2 mb-2">
        <img src={post.avatar} alt="" className="w-10 h-10 rounded-full" />
        <h2 className="font-semibold">{post.user}</h2>
        <time className="ml-auto text-xs text-gray-500">
          {new Date(post.createdAt).toLocaleString()}
        </time>
      </header>

      <p className="mb-2">{post.caption}</p>
      {post.image && (
        <img
          src={post.image}
          alt={post.caption}
          className="w-full rounded-lg"
        />
      )}
    </article>
  );
}