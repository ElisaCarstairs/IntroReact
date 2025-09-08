import { useState } from "react";
import './newpost.css';

export default function NewPost({ posts, setPost, user }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) return;

    const post = {
      id: Date.now(),
      content,
      author: user ? user.username : "Anonimo"
    };

    setPost([post, ...posts]);
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
