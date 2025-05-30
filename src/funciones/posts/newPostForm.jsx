import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice';

export default function NewPostForm() {
  const dispatch = useDispatch();
  const [caption, setCaption] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const submit = e => {
    e.preventDefault();
    if (!caption && !imageFile) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(
        postAdded({
          user: 'Carlos',
          avatar: 'https://i.pravatar.cc/40?u=Carlos',
          image: reader.result,
          caption,
        }),
      );
      setCaption('');
      setImageFile(null);
    };
    // si no hay imagen, enviamos de inmediato
    imageFile ? reader.readAsDataURL(imageFile) : reader.onloadend();
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-xl shadow p-4 mb-6 flex flex-col gap-3"
    >
      <textarea
        value={caption}
        onChange={e => setCaption(e.target.value)}
        placeholder="¿Qué modelo vas a publicar hoy?"
        className="resize-none border rounded p-2"
      />

      <div className="flex items-center gap-2">
        <input
          type="file"
          accept="image/*"
          onChange={e => setImageFile(e.target.files[0])}
        />
        <button
          className="ml-auto bg-blue-600 text-white px-4 py-1 rounded-full disabled:opacity-40"
          disabled={!caption && !imageFile}
        >
          Publicar
        </button>
      </div>
    </form>
  );
}