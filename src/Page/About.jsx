import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../store/postItem';

const About = () => {
    const posts = useSelector(state => state.posts.posts);
    const [currentPost, setCurrentPost] = useState(null);

    return (
        <div>
            <h1>About Page</h1>
            <ul>
                {posts.map(post => (
                    <PostItem key={post.id} post={post} onEdit={setCurrentPost} />
                ))}
            </ul>
        </div>
    );
};

export default About;
