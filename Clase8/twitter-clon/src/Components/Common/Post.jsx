import './post.css';

export default function Post({ id, content, author }) {
  const avatar = `https://api.dicebear.com/7.x/identicon/svg?seed=${author}`;

  return (
    <div className="post-container">
      <img src={avatar} alt={author} className="post-avatar" />
      <div className="post-content">
        <div className="post-header">
          <span className="post-author">@{author}</span>
        </div>
        <div className="post-text">{content}</div>
      </div>
    </div>
  );
}
