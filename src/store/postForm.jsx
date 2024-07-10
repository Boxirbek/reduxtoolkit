import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, editPost } from './postSlice';

const PostForm = ({ currentPost, setCurrentPost }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (currentPost) {
            setTitle(currentPost.title);
            setContent(currentPost.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [currentPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentPost) {
            dispatch(editPost({ ...currentPost, title, content }));
        } else {
            dispatch(addPost({ id: Date.now(), title, content }));
        }
        setTitle('');
        setContent('');
        setCurrentPost(null);
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className='btnpost' type="submit">Save Post</button>
        </form>
    );
};

export default PostForm;
