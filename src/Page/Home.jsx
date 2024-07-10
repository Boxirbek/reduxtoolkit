import React, { useState } from 'react';
import PostList from '../store/postList';

const Home = () => {
    const [currentPost, setCurrentPost] = useState(null);

    return (
        <div>
            <h1>Home Page</h1>
            <PostList onEdit={setCurrentPost} />
        </div>
    );
};

export default Home;
