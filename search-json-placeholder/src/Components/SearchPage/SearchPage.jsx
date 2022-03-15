import React, { useState } from 'react';
import Input from '../Input/Input';
import { useSelector } from 'react-redux';
import SearchResultsList from '../SearchResultsList/SearchResultsList';

import './SearchPageStyles.css';

const SearchPage = () => {
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const allPosts = useSelector((state) => state?.allPosts?.posts);

    const noResults =
        !isLoading &&
        searchedUsers.length === 0 &&
        searchedPosts.length === 0 &&
        searchTerm.length !== 0;

    //OPTIONAL CHAINING AGAIN
    const users = useSelector((state) => state?.allUsers?.users);

    //Could be handled in redux
    const findSearchedUsers = (name) => {
        return users.filter((user) =>
            user.username.toLowerCase().includes(name)
        );
    };

    const findSearchedPosts = (term) => {
        //i can check the posts better
        const postResults = allPosts.filter((post) =>
            post.title.includes(term)
        );
        return postResults;
    };

    const handleInputChange = (searchTerm) => {
        setIsLoading(true);
        setSearchTerm(searchTerm);
        if (searchTerm.length > 0) {
            const foundUsers = findSearchedUsers(searchTerm);
            const foundPosts = findSearchedPosts(searchTerm);
            setSearchedUsers(foundUsers);
            setSearchedPosts(foundPosts);
            setIsLoading(false);
        } else {
            setSearchedUsers([]);
            setSearchedPosts([]);
            setIsLoading(false);
        }
    };

    return (
        <div className="search-page-container">
            <h3>SEARCH USERS AND POSTS</h3>
            <div>
                <Input
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Start typing to search for a user by username or post by title"
                />
            </div>
            {isLoading && <div> LOADING... </div>}
            {noResults && <div>NO RESULTS</div>}
            {(searchedUsers.length > 0 || searchedPosts.length > 0) && (
                <SearchResultsList
                    userList={searchedUsers}
                    postList={searchedPosts}
                />
            )}
        </div>
    );
};

export default SearchPage;
