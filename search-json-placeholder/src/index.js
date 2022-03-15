import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { userReducer } from './Store/Reducers/users';
import { postReducer } from './Store/Reducers/posts';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    allUsers: userReducer,
    allPosts: postReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
