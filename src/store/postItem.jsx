import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from './postSlice';

const PostItem = ({ post, onEdit }) => {
    const dispatch = useDispatch();

    return (
        <div className='aboutPost'>
            <h3 >{post.title}</h3>
            <p>{post.content}</p>
            <button className="delete-button" onClick={() => dispatch(deletePost(post.id))}>
                Delete Post
            </button>
            <button className="cancel-button" onClick={() => onEdit(post)}>
                Edit
            </button>
        </div>
    );
};

export default PostItem;
