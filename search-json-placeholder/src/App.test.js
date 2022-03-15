import { render } from '@testing-library/react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { postReducer } from './Store/Reducers/posts';
import { userReducer } from './Store/Reducers/users';
import { App } from './App';

export const createTestStore = () =>
    createStore(
        combineReducers({
            allUsers: userReducer,
            allPosts: postReducer
        }),
        applyMiddleware(ReduxThunk)
    );

describe('App component', () => {
    let store;

    beforeEach(() => {
        store = createTestStore();
    });

    it('should render App component correctly', () => {
        const { container } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
