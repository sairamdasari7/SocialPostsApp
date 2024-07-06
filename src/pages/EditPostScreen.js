import React from 'react';
import EditPost from '../components/EditPost';
import { useParams } from 'react-router-dom';

const EditPostScreen = ({ posts, setPosts }) => {
  const { id } = useParams();
  return (
    <div className="edit-post-screen">
      <h1>Edit Post</h1>
      <EditPost postId={id} posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default EditPostScreen;
