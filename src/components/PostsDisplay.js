import React from 'react';
import PostItem from './PostItem';

const PostsDisplay = ({ posts, onDelete }) => {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <PostItem key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PostsDisplay;
