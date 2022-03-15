import { FETCH_USERS, FETCH_USER } from '../Actions/user';
const initialState = {
    users: [],
    selectedUser: {}
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };
        case FETCH_USER:
            return {
                ...state,
                selectedUser: action.payload
            };
        default:
            return state;
    }
};
