import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditPost = ({ postId, posts, setPosts }) => {
  const navigate = useNavigate();
  const existingPost = posts.find(post => post.id === parseInt(postId));

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title);
      setContent(existingPost.content);
    }
  }, [existingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPosts = posts.map(post =>
      post.id === parseInt(postId) ? { ...post, title, content } : post
    );
    setPosts(updatedPosts);
    navigate('/');
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPost;
