import React from 'react';
import CreatePost from '../components/CreatePost';
import { useParams } from 'react-router-dom';

const CreatePostScreen = ({ posts, setPosts }) => {
  const { id } = useParams();
  return (
    <div className="create-post-screen">
      <h1>{id ? 'Edit Post' : 'Create Post'}</h1>
      <CreatePost postId={id} posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default CreatePostScreen;
