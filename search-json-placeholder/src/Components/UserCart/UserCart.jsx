import React from 'react';
import { Link } from 'react-router-dom';

export const UserCart = ({ user }) => {
    //the code might break if some of the object values are absent such as address.city, for now with optional chaining, I am trying to prevent it
    //however if there is no address for the user is present - a placeholder should be provided.
    return (
        <div key={user.id} className="list-element">
            <h3>{user.username}</h3>
            <p>id: {user.id}</p>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>address: {user.address?.city}</p>
            <p>phone:{user.phone}</p>
            <p>company: {user.company?.name}</p>
            <Link to={`/postsByUser/${user.id}`}>
                <button id={user.id}>SEE THE POSTS OF THE USER</button>
            </Link>
        </div>
    );
};
