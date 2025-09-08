import { useState } from "react";
import './newpost.css';

export default function NewPost({ posts, setPost }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      id: Date.now(),
      content,
      //author: 'Elisa_Carstairs',
    };

    // Agregar el nuevo post al inicio del array
    setPost([post, ...posts]);

    // Limpiar textarea
    setContent('');
  };

  return (
    <form className="newpost-container" onSubmit={handleSubmit}>
      <div className="newpost-content">
        <textarea
          name="content"
          className="newpost-textarea"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="¿Qué está pasando?"
        />
        <div className="newpost-actions">
          <button
            type="submit"
            className="newpost-button"
            disabled={!content.trim()}
          >
            Publicar
          </button>
        </div>
      </div>
    </form>
  );
}
