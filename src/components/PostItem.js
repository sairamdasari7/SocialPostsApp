import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post, onDelete }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to={`/edit-post/${post.id}`}>
        <button className="edit-post-button">Edit</button>
      </Link>
      <button className="delete-post-button" onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
}

export default PostItem;
