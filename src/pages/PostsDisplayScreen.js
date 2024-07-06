import React from 'react';
import { Link } from 'react-router-dom';
import PostsDisplay from '../components/PostsDisplay';

const PostsDisplayScreen = ({ posts, setPosts }) => {
  const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div className="posts-display-screen">
      <h1>Posts</h1>
      <PostsDisplay posts={posts} onDelete={handleDelete} />
      <Link to="/create-post">
        <button className="create-post-button">Create Post</button>
      </Link>
    </div>
  );
}

export default PostsDisplayScreen;
