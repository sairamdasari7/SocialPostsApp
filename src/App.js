import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostsDisplayScreen from './pages/PostsDisplayScreen';
import CreatePostScreen from './pages/CreatePostScreen';
import EditPostScreen from './pages/EditPostScreen';

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PostsDisplayScreen posts={posts} setPosts={setPosts} />} />
        <Route path="/create-post" element={<CreatePostScreen posts={posts} setPosts={setPosts} />} />
        <Route path="/edit-post/:id" element={<EditPostScreen posts={posts} setPosts={setPosts} />} />
      </Routes>
    </div>
  );
}

export default App;
