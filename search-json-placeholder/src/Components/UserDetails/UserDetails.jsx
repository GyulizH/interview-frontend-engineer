import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../../Store/Actions/user';
import UserCart from '../UserCart/UserCart';

const UserDetails = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [dispatch, userId]);

    const user = useSelector((state) => state?.allUsers?.selectedUser);

    return (
        <div>
            <UserCart user={user} />
        </div>
    );
};

export default UserDetails;
