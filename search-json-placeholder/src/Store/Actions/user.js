export const FETCH_USER = 'FETCH  USER';
export const FETCH_USERS = 'FETCH ALL USERS';

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users`
            );
            const users = await response.json();
            dispatch({ type: FETCH_USERS, payload: users });
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchUser = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            const selectedUser = await response.json();
            dispatch({ type: FETCH_USER, payload: selectedUser });
        } catch (e) {
            console.log(e);
        }
    };
};
