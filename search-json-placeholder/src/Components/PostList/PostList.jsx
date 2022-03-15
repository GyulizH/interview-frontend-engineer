import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PostListStyles.css';

const PostList = () => {
    //No persistent redux state on page refresh
    const { userId } = useParams();
    const users = useSelector((state) => state?.allUsers?.users);
    const currentUser = users.find(
        (user) => user.id.toString() === userId
    ).username;
    const [postsByUser, setPostsByUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //used optional chaining, check the transpiler
    const allPosts = useSelector((state) => state?.allPosts?.posts);

    useEffect(() => {
        //filtering the posts by a specific user could have been handled in redux
        const filteredPosts = allPosts.filter(
            (post) => post.userId.toString() === userId
        );
        setPostsByUser(filteredPosts);
        setIsLoading(false);
    }, [allPosts, userId]);

    const posts = postsByUser.map((post) => (
        <div key={post.id} className="list-element">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ));

    return (
        <div>
            <h2>POSTS BY {currentUser}</h2>
            <div className="post-list-container">
                {isLoading && <div> LOADING... </div>}
                {posts}
            </div>
        </div>
    );
};

export default PostList;
