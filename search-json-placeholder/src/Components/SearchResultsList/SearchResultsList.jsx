import React from 'react';
import { Link } from 'react-router-dom';

import { UserCart } from '../UserCart/UserCart';

import './SearchResultsList.css';

export const SearchResultsList = ({ userList, postList }) => {
    const userListItems = userList.map((item) => (
        //object fields might be absent
        <UserCart user={item} />
    ));
    //better key values for the list items!!
    const postListItems = postList.map((post) => (
        <div className="post-list-element" key={post.id}>
            {post.title}
            <Link to={`/posts/${post.id}`}>
                <button id={post.id} onClick={() => {}}>
                    SEE THE POST DETAILS
                </button>
            </Link>
        </div>
    ));

    const allListItems = [...userListItems, ...postListItems];

    return (
        <div className="list-container">
            <div>{allListItems}</div>
        </div>
    );
};
