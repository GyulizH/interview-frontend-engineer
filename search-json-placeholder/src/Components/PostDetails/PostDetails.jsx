import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../../Store/Actions/post';
import { useDispatch, useSelector } from 'react-redux';

export const PostDetails = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        dispatch(fetchPost(postId)).finally(() => {
            setIsLoading(false);
        });
    }, [dispatch, postId]);

    const postDetails = useSelector((state) => state?.allPosts?.post);
    return (
        <div>
            {isLoading && <div>LOADING...</div>}
            <div>
                <h3>{postDetails.title}</h3>
                <p>{postDetails.body}</p>
            </div>
        </div>
    );
};
