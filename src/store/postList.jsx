import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from './postSlice';
import PostItem from './postItem';

const PostList = ({ onEdit }) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const searchTerm = useSelector(state => state.posts.searchTerm);

    const filteredPosts = posts.filter(post => post.title.includes(searchTerm));

    return (
        <div className="container">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search Posts"
                    value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                />
            </div>
            <ul>
                {filteredPosts.map(post => (
                    <PostItem key={post.id} post={post} onEdit={onEdit} />
                ))}
            </ul>
        </div>
    );
};

export default PostList;
