import React, { useState } from 'react';
import PostForm from '../store/postForm';

const Post = () => {
    const [currentPost, setCurrentPost] = useState(null);

    return (
        <div>
            <h1>Create a New Post</h1>
            <PostForm currentPost={currentPost} setCurrentPost={setCurrentPost} />
        </div>
    );
};

export default Post;

