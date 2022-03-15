export const FETCH_POSTS = 'FETCH POSTS';
export const FETCH_POST = 'FETCH POST';

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts`
            );
            const posts = await response.json();
            dispatch({ type: FETCH_POSTS, payload: posts });
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchPost = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            const post = await response.json();
            dispatch({ type: FETCH_POST, payload: post });
        } catch (e) {
            console.log(e);
        }
    };
};
