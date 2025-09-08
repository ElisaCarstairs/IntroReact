import { useState, useEffect } from "react";
import './newpost.css'; // Usando el CSS general

export default function RightSideBar({ user }) {
  const [posts, setPosts] = useState([]);
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  // Cargar posts desde localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    const saved = savedPosts ? JSON.parse(savedPosts) : [];
    setPosts(saved);
  }, []);

  // Generar lista de usuarios sugeridos de manera aleatoria
  useEffect(() => {
    const uniqueAuthors = [...new Set(posts.map(p => p.author))];
    const suggestions = uniqueAuthors
      .filter(a => a !== (user?.username || ""))
      .sort(() => Math.random() - 0.5)
      .slice(0, 5)
      .map(author => ({
        username: author,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`
      }));
    setSuggestedUsers(suggestions);
  }, [posts, user]);

  return (
    <div className="right-sidebar" style={{ width: '20%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px', backgroundColor: '#f8f9fa' }}>
      {/* Trending */}
      <div className="trending">
        <h3>Trending</h3>
        <ul>
          {['ReactJS', 'JavaScript', 'OpenAI', 'NodeJS', 'CSS'].map(tag => (
            <li key={tag} style={{ padding: '6px 12px', borderRadius: '999px', cursor: 'pointer', marginBottom: '6px', backgroundColor: '#e8f5fe', color: '#1da1f2' }}>
              #{tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Usuarios sugeridos */}
      <div className="suggested-users">
        <h3>Quién seguir</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {suggestedUsers.map(u => (
            <li key={u.username} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={u.avatar} alt={u.username} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <span>@{u.username}</span>
              </div>
              <button style={{ backgroundColor: '#1da1f2', color: '#fff', border: 'none', borderRadius: '999px', padding: '6px 12px', cursor: 'pointer' }}>
                Seguir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
